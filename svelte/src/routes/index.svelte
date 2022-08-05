<script lang="ts">
  import {
    Button,
    Checkbox,
    CheckboxGroup,
    Drawer,
    Dropdown,
    DropdownBtn,
    Input,
    InputSimple,
    isDrawerOpen,
    Pagination,
    Radio,
    Select,
    Spinner,
    Table,
    Textarea,
    Toast,
    toastDelete,
    toastError,
    toastSave,
    Tooltip,
    usePagination,
  } from '../lib';
  import Avatar from './avatar.svelte';

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
  />

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
  <div class="flex ml-auto">
    <Dropdown>
      <svelte:fragment slot="button">
        <div class="w-8">
          <Avatar />
        </div>
      </svelte:fragment>
      <svelte:fragment slot="content">
        <div class="p-2">
          <p>mateuszpiorowski@gmail.com</p>
        </div>
      </svelte:fragment>
    </Dropdown>
  </div>

  <h1>Dropdown with button</h1>
  <DropdownBtn name="Dropdown">
    <div>
      <p>Is sadasd asdasd asasda d dasd asdd dsad</p>
    </div>
  </DropdownBtn>

  <h1>Tooltip</h1>
  <div class="flex gap-2">
    <Tooltip tooltip={'tooltip right'} move={0.5} position={'right'}>
      <div class="border border-gray-600 rounded p-2 bg-gray-600">
        Tooltip right
      </div>
    </Tooltip>

    <Tooltip tooltip={'tooltip top'} position={'top'} move={0.2}>
      <div class="w-fit border border-gray-600 rounded p-2 bg-gray-600">
        Tooltip top
      </div>
    </Tooltip>
  </div>

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
