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
/>

<style>
  input {
    @apply border-slate-600 text-gray-50  bg-slate-600 transition shadow-sm block px-3.5 py-1.5 text-sm rounded-md border;
  }
  input:focus {
    @apply ring-2 ring-slate-400;
  }
  input::placeholder {
    @apply text-gray-400;
  }
</style>
