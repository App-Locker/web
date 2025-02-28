import { browser } from '$app/environment';
import { account } from '$lib/appwrite';
import { redirect } from '@sveltejs/kit';
import type { Models } from 'appwrite';

const BLOCKED_ROUTES = ['/dashboard', '/settings'];

export const load = async ({ url }: any) => {
    if (!browser) return;

    let user: Models.User<any> | undefined;

    try {
        user = await account.get()
    } catch (error) {
        console.error("Error fetching user session:", error);

        return { user: null };
    }

    console.log("User session:", user);

    if (!user && BLOCKED_ROUTES.includes(url.pathname)) {
        console.log("Redirecting to login page");

        throw redirect(302, '/login');
    }

    return { user };
};