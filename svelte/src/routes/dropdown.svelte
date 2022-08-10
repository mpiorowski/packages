<script lang="ts">
  import { Dropdown, Group } from '../lib';
  import Button from '../lib/form/button.svelte';

  let position = [
    {
      value: 'left',
      label: 'Left',
    },
    {
      value: 'right',
      label: 'Right',
    },
  ];

  let group: 'left' | 'right' = 'left';
</script>

<Group values={position} type="radio" bind:group />
<div class="container">
  <!-- <Dropdown position={group}>
    <svelte:fragment slot="button">
      <div class="avatar">
        <Avatar />
      </div>
    </svelte:fragment>
    <svelte:fragment slot="content">
      <div>
        <div class="email">useremail@gmail.com</div>
        <div class="logout">Logout</div>
      </div>
    </svelte:fragment>
  </Dropdown> -->
  <Dropdown position={group}>
    <svelte:fragment slot="button">
      <Button style="ghost">Dropdown</Button>
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
  .container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }
  .avatar {
    height: 3rem;
    width: 3rem;
  }
  .avatar:hover {
    transition: all 0.2s ease-in-out;
    opacity: 0.5;
    cursor: pointer;
  }
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
</style>
