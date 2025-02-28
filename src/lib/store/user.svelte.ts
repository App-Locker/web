import { browser } from '$app/environment';
import { goto, invalidateAll } from '$app/navigation';
import { account } from '$lib/appwrite';
import { ID, type Models } from 'appwrite';

type UserStore = {
    value: Models.User<any> | null;
}

const createUser = () => {
    let store = $state<UserStore | null>(null);

    async function init() {
        if (!browser) return;

        try {
            store = {
                value: await account.get()
            }
        } catch (e) {
            store = {
                value: null
            }
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

    async function updateEmail(newEmail: string, password: string) {
        if (!browser) return;
        await account.updateEmail(newEmail, password);
        await init();
    }

    async function updateUsername(newName: string) {
        if (!browser) return;
        await account.updateName(newName);
        await init();
    }

    async function updatePassword(newPassword: string, oldPassword: string) {
        if (!browser) return;
        await account.updatePassword(newPassword, oldPassword);
        await init();
    }

    async function updatePhone(newPhone: string, password: string) {
        if (!browser) return;
        await account.updatePhone(newPhone, password);
        await init();
    }

    async function logout() {
        if (store) {
            await account.deleteSession('current');

            store.value = null;
        }


        invalidateAll();
        goto('/');
    }

    return {
        get value() {
            return store?.value;
        },

        register,
        login,
        updateEmail,
        updateUsername,
        updatePassword,
        updatePhone,
        logout,
        init
    };
};

export const user = createUser();
