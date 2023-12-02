'use client';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { SubmitHandler, set, useForm } from 'react-hook-form';
import { UserQuery } from './queries/userQuery';
import { DialogClose } from '@/components/ui/dialog';

type Props = {
	id?: string;
	name?: string;
	email?: string;
	role?: 'ADMIN' | 'USER';
	isManageUsers?: boolean;
	setInEditMode?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
	setOpen?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
};

type FormInputs = {
	name: string;
	role: 'ADMIN' | 'USER';
};

const ProfileForm = ({
	id,
	name,
	email,
	role,
	isManageUsers,
	setInEditMode,
	setOpen
}: Props) => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm<FormInputs>({
		defaultValues: {
			role: role
		}
	});

	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: (data: FormInputs) =>
			fetch(`/api/user/${id}`, {
				method: 'PUT',
				body: JSON.stringify(data)
			}),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['userInfo', { id }] });
			queryClient.invalidateQueries({ queryKey: ['usersList', 'all'] });
			if (setInEditMode !== undefined) {
				setInEditMode(false);
			}
			if (setOpen !== undefined) {
				setOpen(false);
			}
		}
	});

	const onSubmit: SubmitHandler<FormInputs> = data => {
		mutation.mutate(data);
	};

	const data = UserQuery(id ?? '');

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={`${
				isManageUsers
					? 'flex flex-col items-start justify-start gap-2 rounded-3xl bg-[#292929] px-12 py-8'
					: 'flex flex-col items-start justify-start gap-2 rounded-3xl bg-[#1a1a1a] px-12 py-8 shadow-lg'
			}`}
		>
			<div className=" flex flex-row flex-wrap gap-4">
				<p
					className={` ${
						isManageUsers ? 'text-[1rem]' : 'text-[1.3rem]'
					} flex items-center justify-center`}
				>
					User name:
				</p>
				{data.isLoading && <p className=" text-[1rem]">Loading...</p>}
				{data.data && (
					<>
						<input
							type="text"
							defaultValue={data.data.name}
							className={`${
								isManageUsers ? 'mb-2 px-2 py-1' : 'px-4 py-2'
							} rounded-lg  text-black`}
							{...register('name', { required: true, maxLength: 60 })}
						/>
					</>
					// {errors.name && <span>This field is required</span>}
				)}
			</div>
			<div className=" flex w-full flex-row gap-4">
				{errors.name?.type === 'required' && (
					<span className=" w-full text-center text-red-400">
						This field is required
					</span>
				)}
				{errors.name?.type === 'maxLength' && (
					<span className=" w-full text-center text-red-400">
						Max length of 60 characters
					</span>
				)}
			</div>
			<div className=" flex flex-row gap-4">
				<p className={` ${isManageUsers ? 'text-[1rem]' : 'text-[1.3rem]'}`}>
					E-mail:
				</p>
				<p className={` ${isManageUsers ? 'text-[1rem]' : 'text-[1.3rem]'}`}>
					{email}
				</p>
			</div>
			<div className=" flex flex-row gap-4">
				<p className={` ${isManageUsers ? 'text-[1rem]' : 'text-[1.3rem]'}`}>
					Role:
				</p>
				{isManageUsers ? (
					<select
						id="role"
						{...register('role')}
						className=" rounded-md px-2 py-1 text-black"
					>
						<option value="USER">User</option>
						<option value="ADMIN">Admin</option>
					</select>
				) : (
					<p className={` ${isManageUsers ? 'text-[1rem]' : 'text-[1.3rem]'}`}>
						{role}
					</p>
				)}
			</div>

			{isManageUsers ? (
				<>
					<input
						type="submit"
						value={'Save changes'}
						className=" mt-6 cursor-pointer self-center rounded-xl bg-primary-green px-4 py-2 text-primary-black duration-200 hover:bg-[#c9cccf]"
					/>
				</>
			) : (
				<input
					type="submit"
					value={'Save changes'}
					className=" mt-6 cursor-pointer self-center rounded-xl bg-primary-green px-4 py-2 text-primary-black duration-200 hover:bg-[#c9cccf]"
				/>
			)}
		</form>
	);
};

export default ProfileForm;
