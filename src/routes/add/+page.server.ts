import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import prisma from '$lib/server/prisma';

export const load: PageServerLoad = async ({ locals }) => {
	const { user } = await locals.auth.validateUser();
	if (!user) throw redirect(302, '/login');

	const categories = await prisma.category.findMany();
	return {
		user,
		categories
	};
};

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await request.formData();
		const name = form.get('name') as string;
		const amount = form.get('amount') as string;
		const category = form.get('category') as string;

		if (!name || !amount || !category) return redirect(302, '/add');

		await prisma.expense.create({
			data: {
				name,
				amount: Number(amount),
				category: {
					connect: {
						id: category
					}
				}
			}
		});

		return {
			success: true,
			message: 'Expense added successfully'
		};
	}
};
