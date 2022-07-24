<script lang="ts">
	import Spinner from '../spinner.svelte';

	export let form = '';
	export let style: 'green' | 'red' | 'ghost' = 'green';
	export let type: 'button' | 'submit' = 'button';
	export let submitting = false;
	export let disabled = false;
</script>

<button
	aria-label="button"
	{form}
	on:click
	{type}
	class={'transition h-9 focus:outline-none focus:ring-2 font-bold rounded-lg text-sm px-4 py-2 text-center inline-flex items-center justify-center ' +
		style}
	disabled={submitting || disabled}
>
	{#if submitting}
		<Spinner />
	{/if}
	<slot />
</button>

<style>
	button {
		@apply text-gray-100;
	}
	button.green {
		@apply bg-teal-600;
	}
	button.green:hover {
		@apply bg-teal-500;
	}
	button.green:focus {
		@apply ring-teal-300;
	}

	button.red {
		@apply bg-red-600;
	}
	button.red:hover {
		@apply bg-red-700;
	}
	button.red:focus {
		@apply ring-red-300;
	}

	button.ghost {
		@apply bg-slate-600;
	}
	button.ghost:hover {
		@apply bg-slate-500;
	}
	button.ghost:focus {
		@apply ring-slate-300;
	}
</style>
