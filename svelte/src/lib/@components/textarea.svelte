<script lang="ts">
  import { t } from "svelte-i18n";

  export let label: string;
  export let value: unknown;
  export let error: string = "";
  export let required = false;
  export let disabled = false;
  export let rows: number = 3;
</script>

<div class="w-full">
  <label for={label} class="block mb-1 text-sm font-medium ">
    {label}
    {#if required}<span class="text-red-600">*</span>{/if}
  </label>
  <textarea
    bind:value
    id={label}
    {rows}
    {disabled}
    step="0.1"
    class={`transition shadow-sm block w-full px-3.5 py-1.5 text-sm rounded-md border focus:ring-2 focus:ring-sky-300 
  ${error ? "border-red-800 text-red-500 bg-red-100" : ""}
  ${disabled ? "bg-gray-200" : ""}`}
  />
  <p class="mt-1 h-4 text-sm text-red-400 font-bold">
    {$t(error)}
  </p>
</div>
