<script lang="ts">
	import type { PageData } from '../routes/$types';

	export let data: PageData;
</script>

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
		{data.user.username}
	</div>
</div>
