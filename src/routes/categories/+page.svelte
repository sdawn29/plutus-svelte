<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import type { PageData } from './$types';
	import { IconPlus } from '@tabler/icons-svelte';

	export let data: PageData;
</script>

<div class="mx-auto my-4 flex w-[600px] flex-col gap-8">
	<Header {data} />
	{#if data.categories.length > 0}
		<div class="flex flex-col gap-2">
			<div class="grid grid-cols-3 gap-2">
				<a
					href="/categories/add"
					class="flex flex-row items-center justify-center gap-2 rounded-lg border-2 border-dashed border-zinc-500 bg-zinc-900 p-4 font-semibold transition-all hover:bg-zinc-800 active:bg-zinc-900"
					><IconPlus size={18} /> Add Category</a
				>
				{#each data.categories as category}
					<div
						class="flex flex-row items-center justify-center gap-2 rounded-lg bg-zinc-800 p-4 font-semibold"
					>
						<div>{category.emoji}</div>
						<div>{category.name}</div>
					</div>
				{/each}
			</div>
		</div>
	{:else}
		<div class="flex w-full flex-col items-center gap-4 rounded-lg border border-zinc-900 p-8">
			<div class="font-semibold text-zinc-500">No Categories added yet</div>
			<a
				href="/categories/add"
				class="flex flex-row items-center gap-2 rounded bg-indigo-700 px-4 py-2 text-sm font-semibold transition-all hover:bg-indigo-600 active:bg-indigo-700"
				>Add Category</a
			>
		</div>
	{/if}
</div>
