<script lang="ts">
	export let label = '';
	export let value = '';
	export let data: {
		value: string;
		label: string;
	}[] = [];
</script>

<label for="username" class="block text-sm font-medium"
	>{label}
	<select
		{...$$restProps}
		bind:value
		name="category"
		id="category"
		class="rounded-lg border border-zinc-900 p-2"
	>
		{#each data as { value, label }}
			<option {value}>{label}</option>
		{/each}
	</select>
</label>

<style lang="postcss">
	select {
		@apply mt-1 block h-9 w-full rounded border border-zinc-800 bg-zinc-900 px-2 text-sm outline-none placeholder:text-zinc-500 focus:border-indigo-500 focus:ring-indigo-500;
	}
</style>
