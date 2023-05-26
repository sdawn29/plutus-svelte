<script lang="ts">
	import { enhance } from '$app/forms';
	import Header from '$lib/components/Header.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import TextInput from '$lib/components/ui/input/TextInput.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Add Expense</title>
</svelte:head>

<div class="mx-auto my-4 flex w-[600px] flex-col gap-4">
	<Header {data} />
	<div class="rounded-lg border border-zinc-900 p-6">
		<form method="POST" use:enhance class="flex flex-col gap-6">
			<div class="text-lg">Add new expense</div>

			<div class="flex flex-col gap-4">
				<TextInput name="title" placeholder="Enter Title" label="Title" />
				<TextInput name="amount" placeholder="Enter Amount" label="Amount" />
				<TextInput name="category" placeholder="Enter Category" label="Category" />
			</div>
			<div class="flex flex-row-reverse">
				<Button>Add Expense</Button>
			</div>
		</form>
	</div>
</div>
