<script lang="ts">
  import {
    Button,
    Drawer,
    Input,
    InputSimple,
    isDrawerOpen,
    Pagination,
    Spinner,
    Textarea,
    usePagination,
  } from '../lib';
  import Dropdown from '../lib/dropdown.svelte';
  import Checkbox from '../lib/form/checkbox.svelte';
  import CheckboxGroup from '../lib/form/checkboxGroup.svelte';
  import Radio from '../lib/form/radio.svelte';
  import Select from '../lib/form/select.svelte';
  import Table from '../lib/table/table.svelte';
  import {
    toastDelete,
    toastError,
    toastSave,
  } from '../lib/toast/toast.helper';
  import Toast from '../lib/toast/toast.svelte';

  const { actions, paginationData } = usePagination();
  paginationData.set({ pageNumber: 1, pageCount: 10 });

  let checkbox = true;
  let checkboxGroup = ['val1', 'val2'];
  let radio = 'val1';
  let select = 'val1';
  let input = '';
  let textarea = '';
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
  <h1>Inputs</h1>
  <Input bind:value={input} label="Input" />
  <Input bind:value={input} label="Input disabled" disabled />
  <Input bind:value={input} label="Input error" error="This is an error" />
  <InputSimple placeholder="Input simple" bind:value={input} />

  <h1>Select</h1>
  <Select label="Select" bind:value={select}>
    <option value="val1">Val 1</option>
    <option value="val2">Val 2</option>
  </Select>

  <Select label="Select error" error="This is an error" bind:value={select}>
    <option value="val1">Val 1</option>
    <option value="val2">Val 2</option>
  </Select>

  <h1>Textarea</h1>
  <Textarea bind:value={textarea} label="Textarea" disabled />
  <Textarea bind:value={textarea} label="Textarea" error="This is an error" />

  <h1>Checkbox</h1>
  <Checkbox bind:checked={checkbox}>Checkbox</Checkbox>

  <h1>CheckboxGroup</h1>
  <CheckboxGroup
    bind:group={checkboxGroup}
    values={[
      { value: 'val1', description: 'desc1' },
      { value: 'val2', description: 'desc2' },
    ]}
  >
    Checkbox
  </CheckboxGroup>

  <h1>Radio</h1>
  <Radio
    bind:group={radio}
    values={[
      { value: 'val1', description: 'desc1' },
      { value: 'val2', description: 'desc2' },
    ]}
  />

  <h1>Buttons</h1>
  <div class="flex flex-row gap-4">
    <Button submitting>Submitting</Button>
    <Button disabled>Disabled</Button>
    <Button style="red">Red</Button>
    <Button style="ghost">Ghost</Button>
  </div>

  <h1>Spinner</h1>
  <Spinner size={100} />

  <h1>Drawer</h1>
  <Button on:click={() => isDrawerOpen.set(true)}>Open drawer</Button>

  <h1>Pagination</h1>
  <Pagination paginationData={$paginationData} {actions} />

  <h1>Toast</h1>
  <div class="flex gap-4 ">
    <Button on:click={toastSave}>Toast save</Button>
    <Button on:click={toastError}>Toast error</Button>
    <Button on:click={toastDelete}>Toast delete</Button>
  </div>

  <h1>Dropdown</h1>
  <Dropdown name="Dropdown">
    <div>
      <p>This is a dropdown component.</p>
    </div>
  </Dropdown>

  <h1>Table</h1>
  <Table>
    <svelte:fragment slot="head">
      <th>Name</th>
      <th>Age</th>
      <th>Email</th>
    </svelte:fragment>
    <svelte:fragment slot="body">
      <tr>
        <td>John</td>
        <td>25</td>
        <td>email@gmail.com</td>
      </tr>
      <tr>
        <td>Jane</td>
        <td>24</td>
        <td>email@gmail.com</td>
      </tr>
    </svelte:fragment>
  </Table>
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
