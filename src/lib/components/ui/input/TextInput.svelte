<script>
	export let label = '';
	export let value = '';
</script>

<label for="username" class="block text-sm font-medium"
	>{label}
	<input
		bind:value
		class="mt-1 block h-9 w-full rounded border border-zinc-800 bg-zinc-900 px-2 text-sm outline-none placeholder:text-zinc-500 focus:border-indigo-500 focus:ring-indigo-500"
		{...$$restProps}
	/>
</label>
