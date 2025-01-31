import { browser } from '$app/environment';
import { goto } from '$app/navigation';
import { user } from '$lib/store/user.svelte.js';
import { redirect } from '@sveltejs/kit';

const BLOCKED_ROUTES = ['/dashboard', '/settings'];

export const load = async ({ url }: any) => {
    if (!browser) return;

    try {
        const userSession = user.value;
        console.log("User session:", userSession);

        if (!userSession && BLOCKED_ROUTES.includes(url.pathname)) {
            console.log("Redirecting to login page");
            goto('/login');
            throw redirect(302, '/login');
        }

        return { user: userSession };
    } catch (error) {
        console.error("Error fetching user session:", error);

        return { user: null };
    }
};