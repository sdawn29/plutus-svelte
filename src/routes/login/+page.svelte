<script>
	import Button from '$lib/ui/Button.svelte';
</script>

<div class="flex h-screen">
	<div class="m-auto">
		<div class="flex w-[20rem] flex-col gap-6 p-4">
			<div class="text-lg">
				Welcome to <span class="font-bold underline decoration-indigo-600">Plutus.</span>
			</div>
			<div>
				<label for="username" class="block text-sm font-medium">Username</label>
				<input
					type="text"
					name="username"
					id="username"
					class="mt-1 block w-full rounded bg-zinc-900 p-2 text-sm outline-none placeholder:text-zinc-500 focus:border-indigo-500 focus:ring-indigo-500"
					placeholder="Username"
				/>
			</div>
			<div>
				<label for="username" class="block text-sm font-medium">Password</label>
				<input
					type="password"
					name="password"
					id="username"
					class="mt-1 block w-full rounded bg-zinc-900 p-2 text-sm outline-none placeholder:text-zinc-500 focus:border-indigo-500 focus:ring-indigo-500"
					placeholder="Password"
				/>
			</div>
			<Button>Continue</Button>
			<p class="text-sm">
				Don`t have an account? <a href="/register" class="font-semibold text-indigo-500 underline"
					>Register</a
				>
			</p>
		</div>
	</div>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.zinc.950);
		color: theme(colors.zinc.50);
	}
</style>
