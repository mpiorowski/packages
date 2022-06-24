<script lang="ts">
  export let checked: boolean;
  export let color: 'dark' | 'white' = 'white';
</script>

<label
  class={'ml-2 text-sm font-medium text-gray-100 hover:cursor-pointer' +
    (color === 'dark' ? ' text-gray-900' : '')}
>
  <input
    bind:checked
    type="checkbox"
    class="w-4 h-4 bg-gray-100 rounded focus:ring-blue-500 focus:ring-2 accent-blue-300 hover:cursor-pointer no-underline"
  />
  <slot />
</label>
