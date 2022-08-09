<script lang="ts">
  import Config from './_config.svelte';
</script>

<div class="main">
  <div class="navigation">
    <a href="/button">Button</a>
    <a href="/input">Input</a>
    <a href="/select">Select</a>
    <a href="/checkbox">Checkbox</a>
    <a href="/dropdown">Dropdown</a>
    <a href="/tooltip">Tooltip</a>
    <a href="/toast">Toast</a>
  </div>
  <div class="content">
    <div class="slot">
      <slot />
    </div>
    <div class="config">
      <Config />
    </div>
  </div>
</div>

<style>
  .main {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  .navigation {
    display: flex;
    flex-direction: column;
    gap: 8px;
    border-right: 1px solid #434343;
    height: 100vh;
  }
  a {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #434343;
    padding: 0.5rem;
  }
  a:hover {
    opacity: 0.8;
  }
  .content {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .config {
    border-top: 1px solid #434343;
    padding: 2rem;
  }
  .slot {
    padding: 2rem;
    padding-top: 4rem;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
</style>
