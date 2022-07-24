<script lang="ts">
	export let value: unknown;
	export let label: string;
	export let error = '';
	export let type: 'text' | 'password' | 'email' | 'datetime-local' | 'date' = 'text';
	export let required = false;
	export let disabled = false;

	export let maxlength: number | undefined = undefined;

	function typeAction(node: HTMLInputElement) {
		node.type = type;
	}
</script>

<label class="block text-sm font-medium w-full">
	{label}
	{#if required}<span class="text-red-600">*</span>{/if}
	<input
		use:typeAction
		bind:value
		{disabled}
		{maxlength}
		class={`${error ? 'error' : ''} ${disabled ? 'disabled' : ''}`}
	/>
	<p class="mt-1 h-5 text-sm text-red-400 font-bold">
		{#if error}
			{error}
		{/if}
	</p>
</label>

<style>
	input {
		@apply transition h-9 shadow-sm block w-full px-3.5 py-1.5 text-sm rounded-md border  border-slate-600 text-gray-50  bg-slate-600;
	}
	input:focus {
		@apply ring-2 ring-slate-400;
	}
	input.error {
		@apply border-red-400 text-red-400;
	}
	input.disabled {
		@apply bg-gray-200;
	}
</style>
