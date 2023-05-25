<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';
	import Button from '$lib/ui/Button.svelte';
	import TextInput from '$lib/ui/input/TextInput.svelte';

	import { IconCircleCheckFilled } from '@tabler/icons-svelte';

	export let form: ActionData;
</script>

<div class="flex h-screen">
	<div class="m-auto">
		{#if form?.success}
			<div
				class="mb-8 flex items-center gap-4 rounded-lg bg-zinc-900 px-2 py-4 text-sm font-semibold"
			>
				<IconCircleCheckFilled class="text-green-600" />
				Successfully signed up.
			</div>
		{/if}

		<form method="POST" use:enhance class="flex w-[20rem] flex-col gap-6">
			<div class="text-lg">
				Welcome to <span class="font-bold underline decoration-indigo-600">Plutus.</span>
			</div>
			<TextInput name="username" placeholder="Enter Username" label="Username" />
			<TextInput name="password" placeholder="Enter Password" label="Password" type="password" />
			<TextInput
				name="confirmPassword"
				placeholder="Confirm Password"
				label="Confirm Password"
				type="password"
			/>
			<Button>Sign Up</Button>
			<p class="text-sm">
				Aready have an account? <a href="/login" class="font-semibold text-indigo-500 underline"
					>Sign in</a
				>
			</p>
		</form>
	</div>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.zinc.950);
		color: theme(colors.zinc.50);
	}
</style>
