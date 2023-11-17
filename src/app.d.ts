// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// FIX, by making session optional, we can now satisfy the PageServerLoad type
		// interface PageData {
		// 	session?: Session | null;
		// }
	}
}

export {};
