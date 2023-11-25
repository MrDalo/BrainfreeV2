'use client';
import ProfileForm from '@/app/components/profile-form';
import ProfileInfo from '@/app/components/profile-info';
import { UserQuery } from '@/app/components/queries/userQuery';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';

const ProfilePage = () => {
	const [inEditMode, setInEditMode] = useState(false);

	const { data: session } = useSession();

	const userData = UserQuery(session?.user.id ?? '');

	return (
		<div className=" flex w-full flex-col items-center justify-center gap-6 text-black">
			<h1 className=" text-[3rem]">Profile</h1>
			{inEditMode ? (
				<ProfileForm
					id={session?.user.id ? session.user.id : ''}
					name={session?.user.name ? session.user.name : ''}
					email={session?.user.email ? session.user.email : ''}
					role={session?.user.role ? session.user.role : ''}
				/>
			) : (
				<ProfileInfo
					name={userData?.data ? userData.data.name : 'Loading....'}
					email={session?.user.email ? session.user.email : 'Loading....'}
					role={session?.user.role ? session.user.role : 'Loading....'}
				/>
			)}

			<button
				className="rounded-2xl bg-[#b0f191] px-6 py-4 text-black duration-200 hover:scale-105"
				onClick={e => setInEditMode(!inEditMode)}
			>
				Edit profile
			</button>
		</div>
	);
};

export default ProfilePage;
