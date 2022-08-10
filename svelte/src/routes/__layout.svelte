<script lang="ts">
  import { page } from '$app/stores';
  import Config from './_config.svelte';
  $: url = $page.url.pathname;
</script>

<div class="main">
  <div class="navigation">
    <a href="/" class={url === '/' ? 'active' : ''}>Instalation</a>
    <a href="/button" class={url === '/button' ? 'active' : ''}>Button</a>
    <a href="/input" class={url === '/input' ? 'active' : ''}>Input</a>
    <a href="/select" class={url === '/select' ? 'active' : ''}>Select</a>
    <a href="/checkbox" class={url === '/checkbox' ? 'active' : ''}>Checkbox</a>
    <a href="/dropdown" class={url === '/dropdown' ? 'active' : ''}>Dropdown</a>
    <a href="/tooltip" class={url === '/tooltip' ? 'active' : ''}>Tooltip</a>
    <a href="/toast" class={url === '/toast' ? 'active' : ''}>Toast</a>
    <a href="/drawer" class={url === '/drawer' ? 'active' : ''}>Drawer</a>
    <a href="/table" class={url === '/table' ? 'active' : ''}>Table</a>
    <a href="/spinner" class={url === '/spinner' ? 'active' : ''}>Spinner</a>
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
    /* gap: 8px; */
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
    background-color: #434343;
  }
  a.active {
    background-color: #434343;
  }
  .content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 100vh;
    overflow: auto;
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
