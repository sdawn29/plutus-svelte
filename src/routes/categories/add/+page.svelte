<script lang="ts">
	import { enhance } from '$app/forms';
	import Header from '$lib/components/Header.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import TextInput from '$lib/components/ui/input/TextInput.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Add Category</title>
</svelte:head>

<div class="mx-auto my-4 flex w-[600px] flex-col gap-4">
	<Header {data} />
	<div class="rounded-lg border border-zinc-900 p-6">
		<form
			method="POST"
			use:enhance
			action="/categories/add?/addCategory"
			class="flex flex-col gap-6"
		>
			<div class="text-lg">Add new category</div>

			<div class="flex flex-col gap-4">
				<TextInput name="name" placeholder="Enter Name" label="Name" />
				<TextInput name="emoji" placeholder="Enter Emoji" label="Emoji" />
			</div>
			<div class="flex flex-row-reverse">
				<Button>Add Category</Button>
			</div>
		</form>
	</div>
</div>
