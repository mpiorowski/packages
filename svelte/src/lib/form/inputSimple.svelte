<script lang="ts">
	export let placeholder: string;
	export let value: unknown;
	export let type: 'text' | 'number' | 'password' | 'email' | 'date' = 'text';
	export let disabled = false;

	function typeAction(node: HTMLInputElement) {
		node.type = type;
	}
</script>

<input
	use:typeAction
	bind:value
	aria-label={placeholder}
	{placeholder}
	{disabled}
	class={`focus:ring-slate-400  border-slate-600 text-gray-50 placeholder:text-gray-400 bg-slate-600 transition shadow-sm block px-3.5 py-1.5 text-sm rounded-md border focus:ring-2 `}
/>
