<script>
	import { enhance } from '$app/forms';
	import Button from '$lib/components/ui/Button.svelte';
	import TextInput from '$lib/components/ui/input/TextInput.svelte';
</script>

<div class="flex h-screen">
	<div class="m-auto">
		<form method="POST" use:enhance class="flex w-[20rem] flex-col gap-6 p-4">
			<div class="text-lg">
				Welcome to <span class="font-bold underline decoration-indigo-600">Plutus.</span>
			</div>
			<TextInput name="username" placeholder="Enter Username" label="Username" />
			<TextInput name="password" placeholder="Enter Password" label="Password" type="password" />
			<Button>Continue</Button>
			<p class="text-sm">
				Don`t have an account? <a href="/register" class="font-semibold text-indigo-500 underline"
					>Register</a
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
