import { PrismaAdapter } from '@next-auth/prisma-adapter';
import {
	getServerSession,
	type DefaultSession,
	type NextAuthOptions,
	type DefaultUser
} from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';

import { db } from '@/server/db';
import { Role } from '@prisma/client';

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module 'next-auth' {
	interface Session extends DefaultSession {
		user: {
			id: string;
			role: Role;
		} & DefaultSession['user'];
	}
	interface User extends DefaultUser {
		role: Role;
	}
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
	callbacks: {
		session: ({ session, user }) => ({
			...session,
			user: {
				...session.user,
				id: user.id,
				role: user.role
			}
		})
	},
	adapter: PrismaAdapter(db),
	providers: [
		DiscordProvider({
			clientId: process.env.DISCORD_CLIENT_ID ?? '',
			clientSecret: process.env.DISCORD_CLIENT_SECRET ?? ''
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID ?? '',
			clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ''
		}),
		CredentialsProvider({
			// The name to display on the sign in form (e.g. "Sign in with...")
			name: 'Credentials',
			// `credentials` is used to generate a form on the sign in page.
			// You can specify which fields should be submitted, by adding keys to the `credentials` object.
			// e.g. domain, username, password, 2FA token, etc.
			// You can pass any HTML attribute to the <input> tag through the object.
			credentials: {
				username: { label: 'Username', type: 'text', placeholder: 'your-name' },
				password: { label: 'Password', type: 'password' }
			},
			async authorize(credentials): Promise<any> {
				// Add logic here to look up the user from the credentials supplied
				const user = {
					id: '1',
					name: 'J Smith',
					email: 'jsmith@example.com',
					password: 'password'
				};

				if (
					credentials?.username === user.name &&
					credentials?.password === user.password
				) {
					// Any object returned will be saved in `user` property of the JWT
					return user;
				} else {
					// If you return null then an error will be displayed advising the user to check their details.
					return null;

					// You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
				}
			}
		})
		/**
		 * ...add more providers here.
		 *
		 * Most other providers require a bit more work than the Discord provider. For example, the
		 * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
		 * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
		 *
		 * @see https://next-auth.js.org/providers/github
		 */
	],
	pages: {
		signIn: '/sign-in',
		signOut: '/'
	}
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions);
