import { SvelteKitAuth } from '@auth/sveltekit';
import Github from '@auth/core/providers/github';

export const handle = SvelteKitAuth({
	providers: [
		Github({
			clientId: '...',
			clientSecret: '...'
		})
	]
});
