<script lang="ts">
  export let group: string[] = [];
  export let values: { value: string; description: string }[] = [];
</script>

{#each values as value}
  <label class="checkbox">
    <input
      bind:group
      value={value.value}
      type="checkbox"
      class="checkbox-input"
    />
    {value.description}
  </label>
{/each}

<style>
  .checkbox {
    @apply select-none font-medium text-gray-100 flex items-center gap-2;
  }
  .checkbox:hover {
    @apply cursor-pointer;
  }
  .checkbox-input {
    @apply w-5 h-5 bg-gray-100 rounded accent-teal-500 no-underline;
  }
  .checkbox-input:hover {
    @apply cursor-pointer;
  }
</style>
