# create-svelte

auth.js adds this as typings for PageData
this causes typescript to error out

```ts
export declare function SvelteKitAuth(
	options: SvelteKitAuthConfig | DynamicSvelteKitAuthConfig
): Handle;
declare global {
	namespace App {
		interface Locals {
			getSession(): Promise<Session | null>;
		}
		interface PageData {
			session: Session | null;
		}
	}
}
```

when writing load functions like this

```ts
export const load = (async () => {
	return {};
}) satisfies PageServerLoad;
```

we need to make session optional in the interface
