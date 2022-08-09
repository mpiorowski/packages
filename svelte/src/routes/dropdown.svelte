<script lang="ts">
  import { Dropdown } from '../lib';
  import Avatar from '../lib/icon/avatar.svelte';
  import CaretDown from '../lib/icon/caretDown.svelte';
  import CarpetUp from '../lib/icon/carpetUp.svelte';

  let isOpen = false;
</script>

<div style="margin-left: auto; margin-bottom:50px;">
  <Dropdown>
    <svelte:fragment slot="button">
      <div style="width: 3rem">
        <Avatar />
      </div>
    </svelte:fragment>
    <svelte:fragment slot="content">
      <div>
        <div class="email">useremail@gmail.com</div>
        <div class="logout">Logout</div>
      </div>
    </svelte:fragment>
  </Dropdown>
</div>

<div style="margin-right: auto; margin-bottom:50px">
  <Dropdown position="left">
    <svelte:fragment slot="button">
      <button
        class="dropdown-btn"
        type="button"
        on:click={() => (isOpen = !isOpen)}
      >
        Open dropdown
        {#if isOpen}
          <CarpetUp />
        {:else}
          <CaretDown />
        {/if}
      </button>
    </svelte:fragment>
    <svelte:fragment slot="content">
      <div>
        <div class="email">useremail@gmail.com</div>
        <div class="logout">Logout</div>
      </div>
    </svelte:fragment>
  </Dropdown>
</div>

<style>
  .email {
    margin-top: 0.5rem;
    padding: 0.5rem;
    border-bottom: 1px solid gray;
  }
  .logout {
    margin-bottom: 0.5rem;
    padding: 0.5rem;
  }
  .logout:hover {
    background-color: #969393;
    cursor: pointer;
  }
  .dropdown-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid gray;
    background-color: rgb(156, 156, 157);
    cursor: pointer;
  }
</style>
