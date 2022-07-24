<script lang="ts">
  export let group: string[] = [];
  export let values: { value: string; description: string }[] = [];
  export let color: 'dark' | 'white' = 'white';
</script>

{#each values as value}
  <div class="flex items-center mb-4 ">
    <input
      bind:group
      value={value.value}
      id={value.value}
      type="checkbox"
      class="w-4 h-4 bg-gray-100 rounded focus:ring-blue-500 focus:ring-2 accent-blue-300 hover:cursor-pointer no-underline"
    />
    <label
      for={value.value}
      class={'ml-2 text-sm font-medium text-gray-100 hover:cursor-pointer' +
        (color === 'dark' ? ' text-gray-900' : '')}
    >
      {value.description}
    </label>
  </div>
{/each}
