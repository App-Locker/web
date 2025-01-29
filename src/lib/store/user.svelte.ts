import { browser } from '$app/environment';
import { goto } from '$app/navigation';
import { account } from '$lib/appwrite';
import { ID, type Models } from 'appwrite';

type UserStore = {
    value: Models.User<any> | null;
}

const createUser = () => {
    const store = $state<UserStore>({
        value: null,
    });

    async function init() {
        if (!browser) return;
        try {
            store.value = await account.get();
        } catch (e) {
            store.value = null;
        }
    }

    init();

    async function register(email: string, password: string, name: string) {
        if (!browser) return;
        await account.create(ID.unique(), email, password, name);
        await login(email, password);
    }

    async function login(email: string, password: string) {
        if (!browser) return;
        await account.createEmailPasswordSession(email, password);
        await init();
        goto('/dashboard');
    }

    async function logout() {
        await account.deleteSession('current');
        store.value = null;
    }

    return {
        get value(): UserStore["value"] {
            return store.value;
        },

        register,
        login,
        logout,
        init
    };
};

export const user = createUser();
