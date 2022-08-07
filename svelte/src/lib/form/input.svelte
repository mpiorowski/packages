<script lang="ts">
  export let value: unknown;
  export let label: string;
  export let error = '';
  export let type: 'text' | 'password' | 'email' | 'datetime-local' | 'date' =
    'text';
  export let required = false;
  export let disabled = false;
  export let name = '';

  export let maxlength: number | undefined = undefined;

  function typeAction(node: HTMLInputElement) {
    node.type = type;
  }
</script>

<label class="input">
  {label}
  {#if required}<span class="red">*</span>{/if}
  <input
    use:typeAction
    bind:value
    {name}
    {disabled}
    {maxlength}
    class={`${error && 'input-error'} ${disabled && 'input-disabled'}`}
  />
  <p class="error">
    {#if error}
      {error}
    {/if}
  </p>
</label>

<style>
  .input {
    @apply block text-sm font-medium w-full;
  }
  input {
    display: block;
    width: 100%;
    transition: all 0.2s ease-in-out;
    height: 2.25rem;
    margin-top: 0.25rem;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    @apply block w-full px-3.5 py-1.5 rounded-md border border-slate-600 text-gray-50  bg-slate-600;
  }
  input:focus {
    /* box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000); */
    box-shadow: 0 0 0 2px rgb(148 163 184), 0 1px 2px 0 rgb(0 0 0 / 0.05);
    /* @apply ring-2 ring-slate-400; */
    /* transition: outline 0.2s ease-in-out; */
    /* @apply outline outline-2 outline-slate-400; */
  }
  .input-error {
    @apply border-red-400 text-red-400;
  }
  .input-disabled {
    @apply bg-gray-700 cursor-not-allowed;
  }
  .red {
    @apply text-red-600;
  }
  .error {
    @apply mt-1 h-5 text-red-400 font-bold;
  }
</style>
