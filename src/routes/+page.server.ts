import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;
// ERROR, since satisfies requires the load function to adhere to the PageServerLoad type, it fails because we don't include the session.
