<script lang="ts">
	import type { PageData } from '../../routes/$types';
	import { IconCurrencyDollar, IconCategory } from '@tabler/icons-svelte';
	import { page } from '$app/stores';

	export let data: PageData;
</script>

<div class="flex flex-col gap-4">
	<div class="flex flex-row items-center justify-between">
		<a href="/" class="text-xl font-semibold underline decoration-indigo-500">Plutus.</a>
		<div
			class="flex cursor-pointer items-center gap-2 rounded-md border border-zinc-800 p-2 text-sm font-semibold hover:border-zinc-700"
		>
			<div
				class="flex h-7 w-7 select-none items-center justify-center rounded-full bg-indigo-500 align-middle"
			>
				{data.user.username.slice(0, 1).toUpperCase()}
			</div>
			<div>
				{data.user.username}
			</div>
		</div>
	</div>
	<div class="items center flex gap-2">
		<a href="/" class="default-link" class:active-link={['/add', '/'].includes($page.url.pathname)}>
			<IconCurrencyDollar size={16} /> Expenses
		</a>
		<a
			href="/categories"
			class="default-link"
			class:active-link={['/categories', '/categories/add'].includes($page.url.pathname)}
		>
			<IconCategory size={16} />Category
		</a>
	</div>
</div>

<style lang="postcss">
	.default-link {
		@apply flex h-8 items-center gap-2 rounded bg-zinc-900 px-4 text-sm font-semibold;
	}

	.active-link {
		@apply flex h-8 items-center gap-2 rounded bg-indigo-600 px-4 text-sm font-semibold;
	}
</style>
