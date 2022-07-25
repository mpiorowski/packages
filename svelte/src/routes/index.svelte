<script lang="ts">
  import {
    Button,
    Drawer,
    Input,
    InputNumber,
    isDrawerOpen,
    Pagination,
    Spinner,
    usePagination,
  } from '../lib';
  import {
    toastDelete,
    toastError,
    toastSave,
  } from '../lib/toast/toast.helper';
  import Toast from '../lib/toast/toast.svelte';

  const { actions, paginationData } = usePagination();
  paginationData.set({ pageNumber: 1, pageCount: 10 });
</script>

<Toast />

<Drawer
  isOpen={$isDrawerOpen}
  onClose={() => isDrawerOpen.set(false)}
  title="Drawer Title"
>
  <svelte:fragment slot="content">
    <p>This is a drawer component.</p>
  </svelte:fragment>
  <svelte:fragment slot="footer">
    <Button on:click={() => isDrawerOpen.set(false)}>Close</Button>
  </svelte:fragment>
</Drawer>

<div class="container">
  <h1>Input</h1>
  <Input value="" label="Input" />
  <h1>Input Number</h1>
  <InputNumber value="" label="Input number" />
  <h1>Spinner</h1>
  <div class="h-10 w-10">
    <Spinner />
  </div>
  <h1>Drawer</h1>
  <Button on:click={() => isDrawerOpen.set(true)}>Open drawer</Button>
  <h1>Pagination</h1>
  <Pagination paginationData={$paginationData} {actions} />
  <h1>Toast</h1>
  <div class="flex gap-4 ">
    <Button submitting on:click={toastSave}>Toast save</Button>
    <Button on:click={toastError}>Toast error</Button>
    <Button on:click={toastDelete}>Toast delete</Button>
  </div>
</div>

<style>
  .container {
    padding: 20px;
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
</style>
