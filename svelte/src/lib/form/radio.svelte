<script lang="ts">
  export let group: string | number | boolean;
  export let values: {
    value: string | boolean | number;
    description: string;
  }[];
</script>

<div>
  {#each values as radio}
    <label
      class="text font-medium text-gray-50 hover:cursor-pointer flex items-center mb-2 gap-2"
    >
      <input
        value={radio.value}
        bind:group
        type="radio"
        class="w-5 h-5 accent-teal-500 hover:cursor-pointer"
      />
      {radio.description}
    </label>
  {/each}
</div>
