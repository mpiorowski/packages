<script lang="ts">
	export let label: string;
	export let value: unknown;
	export let error = '';
	export let required = false;
	export let disabled = false;
</script>

<label class="block text-sm font-medium w-full">
	{label}
	{#if required}<span class="text-red-600">*</span>{/if}
	<select
		{disabled}
		bind:value
		class={`transition shadow-sm h-9 block w-full px-3.5 py-1.5 text-sm rounded-md border focus:ring-2 focus:ring-slate-400  
      ${error ? 'border-red-800 text-red-200' : 'border-slate-700 text-gray-50 bg-slate-600'}`}
	>
		<slot />
	</select>
	<p class="mt-1 h-5 text-sm text-red-400 font-bold">
		{#if error}
			{error}
		{/if}
	</p>
</label>
