<script lang="ts">
  export let form: string = '';
  export let style: 'green' | 'red' | 'ghost' = 'green';
  export let type: 'button' | 'submit' = 'button';
  export let submitting = false;
  export let disabled = false;
</script>

<button
  {form}
  on:click
  {type}
  class={'transition h-9 focus:outline-none text-gray-50 focus:ring-2 font-bold rounded-lg text-sm px-4 py-2 text-center inline-flex items-center justify-center' +
    (style === 'green'
      ? ' bg-teal-600 hover:bg-teal-700  focus:ring-teal-300'
      : '') +
    (style === 'red'
      ? ' bg-red-600 hover:bg-red-700  focus:ring-red-300'
      : '') +
    (style === 'ghost'
      ? ' bg-sky-700 hover:bg-sky-600  focus:ring-sky-300'
      : '')}
  disabled={submitting || disabled}
>
  {#if submitting}
    <i class="fa-solid fa-spinner fa-spin-pulse mr-2" />
  {/if}
  <slot />
</button>
