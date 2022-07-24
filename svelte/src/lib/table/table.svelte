<script>
  import { fade } from 'svelte/transition';
  import './table.css';
</script>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg" in:fade>
  <table class="w-full text-sm text-left text-gray-200">
    <thead class="text-xs uppercase bg-slate-800 text-slate-300">
      <slot name="head" />
    </thead>
    <tbody>
      <slot name="body" />
    </tbody>
  </table>
</div>
