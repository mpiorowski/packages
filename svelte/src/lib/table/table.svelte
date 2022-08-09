<script>
  import { fade } from 'svelte/transition';
  import './table.css';
</script>

<div class="container" in:fade>
  <table>
    <thead>
      <slot name="head" />
    </thead>
    <tbody>
      <slot name="body" />
    </tbody>
    <tfoot>
      <slot name="foot" />
    </tfoot>
  </table>
</div>

<style>
  .container {
    position: relative;
    overflow-x: auto;
    border-radius: 0.5rem;

    box-shadow: var(--shadow);
  }
  table {
    width: 100%;
    font-size: 0.875rem /* 14px */;
    line-height: 1.25rem /* 20px */;
    text-align: left;
  }
  thead {
    font-size: 0.75rem /* 12px */;
    line-height: 1rem /* 16px */;
    background-color: var(--table-header);
    text-transform: uppercase;
  }
</style>
