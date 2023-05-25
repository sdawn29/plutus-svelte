<script lang="ts">
	import Header from '$lib/Header.svelte';
	import { IconCurrencyDollar } from '@tabler/icons-svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="mx-auto my-4 flex w-[600px] flex-col gap-8">
	<Header {data} />
	<div class="flex w-full flex-col items-center gap-4 rounded-lg border border-zinc-900 p-8">
		<div class="font-semibold text-zinc-500">No expense recorded yet.</div>
		<a
			href="/add"
			class="flex flex-row items-center gap-2 rounded bg-indigo-700 px-4 py-2 text-sm font-semibold transition-all hover:bg-indigo-600 active:bg-indigo-700"
			><IconCurrencyDollar size={16} />Add Expense</a
		>
	</div>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.zinc.950);
		color: theme(colors.zinc.50);
	}
</style>
