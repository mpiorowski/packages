<script lang="ts">
  export let checked: boolean;
  export let onChange:
    | ((
        e: Event & {
          currentTarget: EventTarget & HTMLInputElement;
        }
      ) => void)
    | undefined = undefined;
</script>

<label class="checkbox">
  <input
    bind:checked
    on:change={onChange}
    type="checkbox"
    class="checkbox-input"
  />
  <slot />
</label>

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
