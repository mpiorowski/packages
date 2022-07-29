<script lang="ts">
  export let group: string | number | boolean;
  export let values: {
    value: string | boolean | number;
    description: string;
  }[];
</script>

{#each values as radio}
  <label class="radio">
    <input value={radio.value} bind:group type="radio" />
    {radio.description}
  </label>
{/each}

<style>
  .radio {
    @apply font-medium text-gray-50 flex items-center mb-2 gap-2;
  }
  .radio:hover {
    @apply cursor-pointer text-gray-100;
  }
  input {
    @apply w-5 h-5 accent-teal-500;
  }
  input:hover {
    @apply cursor-pointer;
  }
</style>
