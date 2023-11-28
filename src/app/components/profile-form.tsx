'use client';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { UserQuery } from './queries/userQuery';

type Props = {
	id?: string;
	name?: string;
	email?: string;
	role?: string;
};

type FormInputs = {
	name: string;
};

const ProfileForm = ({ id, name, email, role }: Props) => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm<FormInputs>();

	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: (newUserName: { name: string }) =>
			fetch(`/api/user/${id}`, {
				method: 'PUT',
				body: JSON.stringify(newUserName)
			}),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['userInfo', { id }] });
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
			className="flex flex-col items-start justify-start gap-2 rounded-3xl bg-[#1a1a1a] px-12 py-8 shadow-lg"
		>
			<div className=" flex flex-row gap-4">
				<p className=" text-[1.3rem]">User name:</p>
				{data.isLoading && <p className=" text-[1rem]">Loading...</p>}
				{data.data && (
					<input
						type="text"
						defaultValue={data.data.name}
						className="rounded-lg px-4 py-2 text-black"
						{...register('name', { required: true, maxLength: 60 })}
						// {errors.name && <span>This field is required</span>}
					/>
				)}
			</div>
			<div className=" flex flex-row gap-4">
				<p className=" text-[1.3rem]">E-mail:</p>
				<p className=" text-[1.3rem]">{email}</p>
			</div>
			<div className=" flex flex-row gap-4">
				<p className=" text-[1.3rem]">Role:</p>
				<p className=" text-[1.3rem]">{role}</p>
			</div>
			<input
				type="submit"
				value={'Save changes'}
				className=" mt-6 cursor-pointer self-center rounded-xl bg-primary-green px-4 py-2 text-primary-black duration-200 hover:scale-105"
			/>
		</form>
	);
};

export default ProfileForm;
