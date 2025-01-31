<script lang="ts">
	import { user } from '$lib/store/user.svelte';

	let newValue = '';
	let password = '';
	let settingType: 'username' | 'email' | 'password' | 'phone' | '' = '';
	let errorMessage = '';
	let isLoading = false;

	function openModal(type: typeof settingType) {
		settingType = type;
		newValue = '';
		password = '';
		errorMessage = '';
	}

	async function updateSetting() {
		if (!newValue) {
			errorMessage = 'Please enter a value.';
			return;
		}

		isLoading = true;
		errorMessage = '';

		try {
			if (settingType === 'username') await user.updateUsername(newValue);
			else if (settingType === 'email') {
				if (!/^\S+@\S+\.\S+$/.test(newValue)) throw new Error('Invalid email format.');
				await user.updateEmail(newValue, password);
			} else if (settingType === 'password') {
				if (newValue.length < 8) throw new Error('Password must be at least 8 characters.');
				await user.updatePassword(newValue, password);
			} else if (settingType === 'phone') {
				if (!/^\+?\d{7,15}$/.test(newValue)) throw new Error('Invalid phone number.');
				await user.updatePhone(newValue, password);
			}

			settingType = '';
		} catch (err: any) {
			errorMessage = err.message || 'An error occurred. Please try again.';
		} finally {
			isLoading = false;
		}
	}
</script>

<div class="grid h-full min-h-screen grid-cols-[250px_1fr]">
	<!-- Sidebar -->
	<aside class="bg-white p-6 shadow-md">
		<h2 class="border-b pb-2 text-lg font-semibold">Settings</h2>
		<nav class="mt-4 flex flex-col gap-2 text-sm">
			<a href="/dashboard" class="rounded px-3 py-2 hover:bg-gray-200">Dashboard</a>
			<a href="/" class="rounded px-3 py-2 hover:bg-gray-200">Home</a>
		</nav>
	</aside>

	<section class="bg-white p-8 shadow-md">
		<h1 class="border-b pb-4 text-2xl font-semibold">Profile Settings</h1>
		<div class="mt-6 space-y-16">
			<!-- Personal Info -->
			<div>
				<h2 class="text-lg font-medium">Personal Information</h2>
				<p class="text-sm text-gray-600">Update your personal details.</p>
				<div class="mt-2 space-y-2">
					<p>Username: {user.value?.name || '-'}</p>
					<button
						onclick={() => openModal('username')}
						class="rounded-xl border px-4 py-2 text-sm hover:bg-gray-100"
					>
						Change Name
					</button>
				</div>
			</div>

			<!-- Email -->
			<div>
				<h2 class="text-lg font-medium">Email</h2>
				<p class="text-sm text-gray-600">Manage your email address.</p>
				<div class="mt-2 space-y-2">
					<p>Email: {user.value?.email || '-'}</p>
					<button
						onclick={() => openModal('email')}
						class="rounded-xl border px-4 py-2 text-sm hover:bg-gray-100"
					>
						Change Email
					</button>
				</div>
			</div>

			<!-- Security -->
			<div>
				<h2 class="text-lg font-medium">Security</h2>
				<p class="text-sm text-gray-600">Change your password.</p>
				<div class="mt-2 space-y-2">
					<p>Password: ********</p>
					<button
						onclick={() => openModal('password')}
						class="rounded-xl border px-4 py-2 text-sm hover:bg-gray-100"
					>
						Change Password
					</button>
				</div>
			</div>

			<!-- Phone Number -->
			<div>
				<h2 class="text-lg font-medium">Phone Number</h2>
				<p class="text-sm text-gray-600">Update your phone number.</p>
				<div class="mt-2 space-y-2">
					<p>Number: ******{user.value?.phone.slice(-4) || '-'}</p>
					<button
						onclick={() => openModal('phone')}
						class="rounded-xl border px-4 py-2 text-sm hover:bg-gray-100"
					>
						Change Number
					</button>
				</div>
			</div>

			<!-- Logout -->
			<div>
				<h2 class="text-lg font-medium">Logout</h2>
				<p class="text-sm text-gray-600">Sign out of your account.</p>
				<div class="mt-2">
					<button
						class="rounded-xl border px-4 py-2 text-sm hover:bg-gray-100"
						onclick={user.logout}
					>
						Logout
					</button>
				</div>
			</div>
		</div>
	</section>
</div>

<!-- Reusable Modal with Error Handling -->
{#if settingType}
	<div class="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-md">
		<button class="absolute -z-10 h-full w-full" onclick={() => (settingType = '')}>
			<span class="sr-only">Close dialog</span>
		</button>

		<div class="z-50 w-80 rounded-lg bg-white p-6 shadow-lg">
			<h2 class="mb-4 text-lg font-semibold">
				{settingType === 'username'
					? 'Change Name'
					: settingType === 'email'
						? 'Change Email'
						: settingType === 'password'
							? 'Change Password'
							: 'Change Phone Number'}
			</h2>

			<form
				class="flex flex-col gap-3"
				onsubmit={(event) => {
					event.preventDefault();
					updateSetting();
				}}
			>
				<input
					type={settingType === 'password' ? 'password' : 'text'}
					required
					placeholder={settingType === 'username'
						? 'New Name'
						: settingType === 'email'
							? 'New Email'
							: settingType === 'password'
								? 'New Password'
								: 'New Phone Number'}
					bind:value={newValue}
					class="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none"
				/>

				{#if settingType !== 'username'}
					<input
						type="password"
						required
						placeholder="Current Password"
						bind:value={password}
						class="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none"
					/>
				{/if}

				{#if errorMessage}
					<p class="text-sm text-red-500">{errorMessage}</p>
				{/if}

				<button
					type="submit"
					class="rounded bg-primary py-2 text-white hover:bg-primary/80"
					disabled={isLoading}
				>
					{isLoading ? 'Saving...' : 'Save'}
				</button>
			</form>
		</div>
	</div>
{/if}
