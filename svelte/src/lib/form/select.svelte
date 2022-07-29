<script lang="ts">
  export let label: string;
  export let value: unknown;
  export let error = '';
  export let required = false;
  export let disabled = false;
</script>

<label class="select">
  {label}
  {#if required}<span class="red">*</span>{/if}
  <select {disabled} bind:value class={error && 'select-error'}>
    <slot />
  </select>
  <p class="error">
    {#if error}
      {error}
    {/if}
  </p>
</label>

<style>
  .select {
    @apply block text-sm font-medium w-full;
  }
  select {
    @apply transition mt-1 shadow-sm h-9 block w-full px-3.5 py-1.5 text-sm rounded-md border border-slate-700 text-gray-50 bg-slate-600;
  }
  select:focus {
    @apply ring-2 ring-slate-400;
  }
  .select-error {
    @apply border-red-400 text-red-400;
  }
  .red {
    @apply text-red-600;
  }
  .error {
    @apply mt-1 h-5 text-sm text-red-400 font-bold;
  }
</style>
