import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import prisma from '$lib/server/prisma';

export const load: PageServerLoad = async ({ locals }) => {
	const { user } = await locals.auth.validateUser();
	if (!user) throw redirect(302, '/login');

	return {
		user
	};
};

export const actions: Actions = {
	addCategory: async ({ request }) => {
		const form = await request.formData();
		const name = form.get('name') as string;
		const emoji = form.get('emoji') as string;

		await prisma.category.create({
			data: {
				name,
				emoji
			}
		});
	}
};
