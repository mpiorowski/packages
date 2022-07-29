<script>
  import { fade } from 'svelte/transition';
  import './table.css';
</script>

<div class="table-container" in:fade>
  <table class="table">
    <thead class="table-head">
      <slot name="head" />
    </thead>
    <tbody>
      <slot name="body" />
    </tbody>
  </table>
</div>

<style>
  .table-container {
    @apply relative overflow-x-auto shadow-md rounded-lg;
  }
  .table {
    @apply w-full text-sm text-left text-gray-200;
  }
  .table-head {
    @apply text-xs uppercase bg-slate-700 text-slate-300;
  }
</style>
