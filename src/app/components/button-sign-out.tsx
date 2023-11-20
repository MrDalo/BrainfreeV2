'use client';
import { signOut } from 'next-auth/react';
import React from 'react';

const ButtonSignOut = () => {
	return (
		<button
			onClick={() => {
				signOut({ callbackUrl: '/' });
			}}
		>
			Sing out
		</button>
	);
};

export default ButtonSignOut;
