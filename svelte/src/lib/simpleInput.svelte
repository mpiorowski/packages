<script lang="ts">
  export let placeholder: string;
  export let value: unknown;
  export let type: 'text' | 'number' | 'password' | 'email' = 'text';
  export let disabled = false;

  function typeAction(node: HTMLInputElement) {
    node.type = type;
  }
</script>

<input
  use:typeAction
  bind:value
  {placeholder}
  {disabled}
  class={`transition shadow-sm block w-full px-3.5 py-1.5 text-sm rounded-md border focus:ring-2 focus:ring-sky-300  border-gray-300 text-gray-900 bg-gray-50`}
/>
