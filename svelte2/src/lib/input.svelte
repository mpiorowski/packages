<script lang="ts">
  import { t } from 'svelte-i18n';
  import './app.css';

  export let label: string;
  export let value: unknown;
  export let error = '';
  export let type:
    | 'text'
    | 'number'
    | 'password'
    | 'email'
    | 'datetime-local'
    | 'date' = 'text';
  export let required = false;
  export let disabled = false;

  export let max: string | undefined = undefined;
  export let min: string | undefined = undefined;

  function typeAction(node: HTMLInputElement) {
    node.type = type;
  }
</script>

<div class="w-full">
  <label for={label} class="block mb-1 text-sm font-medium h-5 ">
    {label}
    {#if required}<span class="text-red-600">*</span>{/if}
  </label>
  <input
    use:typeAction
    on:input
    bind:value
    id={label}
    step="0.1"
    {disabled}
    {max}
    {min}
    class={`transition h-9 shadow-sm block w-full px-3.5 py-1.5 text-sm rounded-md border focus:ring-2 focus:ring-sky-300 border-gray-300 text-gray-900 bg-gray-50
  ${error ? 'border-red-800 text-red-500 bg-red-100' : ''}
  ${disabled ? 'bg-gray-200' : ''}`}
  />
  <p class="mt-1 h-5 text-sm text-red-400 font-bold">
    {#if error}
      {$t(error)}
    {/if}
  </p>
</div>
