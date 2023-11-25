import React from 'react';

type Props = {
	name?: string;
	email?: string;
	role?: string;
};

const ProfileInfo = ({ name, email, role }: Props) => {
	return (
		<div className="flex flex-col items-start justify-start rounded-3xl bg-[#eee] px-12 py-8 shadow-lg">
			<div className=" flex flex-row gap-4">
				<p className=" text-[1.3rem]">User name:</p>
				<p className=" text-[1.3rem]">{name}</p>
			</div>
			<div className=" flex flex-row gap-4">
				<p className=" text-[1.3rem]">E-mail:</p>
				<p className=" text-[1.3rem]">{email}</p>
			</div>
			<div className=" flex flex-row gap-4">
				<p className=" text-[1.3rem]">Role:</p>
				<p className=" text-[1.3rem]">{role}</p>
			</div>
		</div>
	);
};

export default ProfileInfo;
