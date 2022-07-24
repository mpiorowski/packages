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

<label class="label">
	{label}
	{#if required}<span class="required">*</span>{/if}
	<input
		use:typeAction
		bind:value
		{disabled}
		{maxlength}
		class={'transition shadow ' + (error ? 'error ' : '') + (disabled ? 'disabled ' : '')}
	/>
	<p class="mt-1 h-5 text-sm text-red-400 font-bold">
		{#if error}
			{error}
		{/if}
	</p>
</label>

<style>
	.label {
		width: 100%;
		display: block;
		font-size: 0.875rem /* 14px */;
		line-height: 1.25rem /* 20px */;
		font-weight: 500;
	}
	.required {
		color: var(--red-600);
	}
	/* input {
		display: block;
		width: 100%;
		height: 2.25rem;
		padding-left: 0.875rem;
		padding-right: 0.875rem;
		padding-top: 0.375rem;
		padding-bottom: 0.375rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--gray-50);
		border: 1px solid var(--slate-600);
		border-radius: 0.375rem;
		background-color: var(--slate-600);
	}
	input:focus {
		box-shadow: var(--ring);
	} */

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
	.container {
		width: 100%;
	}
</style>
