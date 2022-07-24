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

<label
  class="text font-medium text-gray-100 hover:cursor-pointer flex items-center gap-2"
>
  <input
    bind:checked
    on:change={onChange}
    type="checkbox"
    class="w-5 h-5 bg-gray-100 rounded accent-teal-500 hover:cursor-pointer no-underline"
  />
  <slot />
</label>
