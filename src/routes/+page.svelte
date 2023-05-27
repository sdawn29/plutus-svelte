<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import { IconCurrencyDollar, IconPlus } from '@tabler/icons-svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Plutus</title>
</svelte:head>

<div class="mx-auto my-4 flex w-[600px] flex-col gap-8">
	<Header {data} />
	{#if data.expenses.length > 0}
		<div class="flex flex-col gap-2">
			<div class="grid grid-cols-1 gap-4">
				<a
					href="/add"
					class="flex flex-row items-center justify-center gap-2 rounded-lg border-2 border-dashed border-zinc-500 bg-zinc-900 py-2 font-semibold transition-all hover:bg-zinc-800 active:bg-zinc-900"
					><IconPlus size={18} /> Add Expense</a
				>
				{#each data.expenses as expense}
					<div class="flex flex-col gap-4 rounded-lg bg-zinc-900 p-4 font-semibold">
						<div class="flex flex-row items-center justify-between">
							<div class="flex flex-grow-0 flex-col gap-2">
								<div>
									{expense.name}
								</div>
								<div class="flex">
									<div class="flex-grow-0 rounded bg-zinc-800 px-2 py-1 text-sm">
										{expense.category.emoji}
										{expense.category.name}
									</div>
								</div>
							</div>
							<div class="text-3xl">
								₹ {expense.amount}
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>{:else}
		<div class="flex w-full flex-col items-center gap-4 rounded-lg border border-zinc-900 p-8">
			<div class="font-semibold text-zinc-500">No expense recorded yet.</div>
			<a
				href="/add"
				class="flex flex-row items-center gap-2 rounded bg-indigo-700 px-4 py-2 text-sm font-semibold transition-all hover:bg-indigo-600 active:bg-indigo-700"
				><IconCurrencyDollar size={16} />Add Expense</a
			>
		</div>
	{/if}
</div>
