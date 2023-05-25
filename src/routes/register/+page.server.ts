import { fail } from '@sveltejs/kit';
import { auth } from '$lib/server/lucia';
import type { Actions } from './$types';

// export const load: PageServerLoad = async ({ locals }) => {
// 	const { session } = await locals.auth.validateUser();
// 	if (session) throw redirect(302, '/');
// 	return {};
// };

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await request.formData();
		const username = form.get('username');
		const password = form.get('password');

		// check for empty values
		if (typeof username !== 'string' || typeof password !== 'string') {
			return fail(400);
		}

		try {
			await auth.createUser({
				primaryKey: {
					providerId: 'username',
					providerUserId: username,
					password
				},
				attributes: {
					username
				}
			});
			return { success: true };
		} catch {
			// username taken
			return fail(400);
		}
	}
};
