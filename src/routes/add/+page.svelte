<script lang="ts">
	import Header from '$lib/Header.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="mx-auto my-4 flex w-[600px] flex-col gap-4">
	<Header {data} />
	<div class="text-sm font-semibold text-zinc-500">
		Expenses / <span class="font-bold text-indigo-500">Add</span>
	</div>
</div>
