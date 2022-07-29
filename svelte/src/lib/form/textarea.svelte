<script lang="ts">
  export let label: string;
  export let value: unknown;
  export let error = '';
  export let required = false;
  export let disabled = false;
  export let rows = 3;
</script>

<label for={label} class="textarea">
  {label}
  {#if required}<span class="red">*</span>{/if}
  <textarea
    bind:value
    {rows}
    {disabled}
    class={`${error && 'textarea-error'} ${disabled && 'textarea-disabled'}`}
  />
  <p class="error">
    {#if error}
      {error}
    {/if}
  </p>
</label>

<style>
  .textarea {
    @apply block text-sm font-medium w-full;
  }
  textarea {
    @apply transition mt-1 shadow-sm block w-full px-3.5 py-1.5 text-sm rounded-md border border-slate-600 text-gray-50  bg-slate-600;
  }
  textarea:focus {
    @apply ring-2 ring-slate-400;
  }
  .textarea-error {
    @apply border-red-400 text-red-400;
  }
  .textarea-disabled {
    @apply bg-gray-700 cursor-not-allowed;
  }
  .red {
    @apply text-red-600;
  }
  .error {
    @apply mt-1 h-5 text-red-400 font-bold;
  }
</style>
