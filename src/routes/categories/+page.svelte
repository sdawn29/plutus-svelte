<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="mx-auto my-4 flex w-[600px] flex-col gap-4">
	<Header {data} />
	hello categories
</div>
