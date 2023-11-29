'use client';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { UserQuery } from './queries/userQuery';
import { DialogClose } from '@/components/ui/dialog';

type Props = {
	id?: string;
	name?: string;
	email?: string;
	role?: 'ADMIN' | 'USER';
	isManageUsers?: boolean;
};

type FormInputs = {
	name: string;
	role: 'ADMIN' | 'USER';
};

const ProfileForm = ({ id, name, email, role, isManageUsers }: Props) => {
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
		}
	});

	const onSubmit: SubmitHandler<FormInputs> = data => {
		// console.log(data);
		mutation.mutate(data);
	};

	const data = UserQuery(id ?? '');
	// console.log('data: ', data.data);

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={`${
				isManageUsers
					? 'flex flex-col items-start justify-start gap-2 rounded-3xl bg-[#292929] px-12 py-8'
					: 'flex flex-col items-start justify-start gap-2 rounded-3xl bg-[#1a1a1a] px-12 py-8 shadow-lg'
			}`}
		>
			<div className=" flex flex-row gap-4">
				<p
					className={` ${
						isManageUsers ? 'text-[1rem]' : 'text-[1.3rem]'
					} flex items-center justify-center`}
				>
					User name:
				</p>
				{data.isLoading && <p className=" text-[1rem]">Loading...</p>}
				{data.data && (
					<input
						type="text"
						defaultValue={data.data.name}
						className={`${
							isManageUsers ? 'mb-2 px-2 py-1' : 'px-4 py-2'
						} rounded-lg  text-black`}
						{...register('name', { required: true, maxLength: 60 })}
						// {errors.name && <span>This field is required</span>}
					/>
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
				<DialogClose asChild>
					<input
						type="submit"
						value={'Save changes'}
						className=" mt-6 cursor-pointer self-center rounded-xl bg-primary-green px-4 py-2 text-primary-black duration-200 hover:scale-105"
					/>
				</DialogClose>
			) : (
				<input
					type="submit"
					value={'Save changes'}
					className=" mt-6 cursor-pointer self-center rounded-xl bg-primary-green px-4 py-2 text-primary-black duration-200 hover:scale-105"
				/>
			)}
		</form>
	);
};

export default ProfileForm;
