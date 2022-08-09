<script lang="ts">
  import {
    Button,
    Checkbox,
    Drawer,
    Dropdown,
    DropdownBtn,
    Group,
    Input,
    InputSimple,
    Select,
    Spinner,
    Table,
    Textarea,
    Toast,
    toastDelete,
    toastError,
    toastInfo,
    toastSave,
    Tooltip,
  } from '../lib';
  import InputNumber from '../lib/form/inputNumber.svelte';
  import Avatar from './avatar.svelte';

  let isDrawerOpen = false;

  let checkbox = true;
  let checkboxGroup = ['val1', 'val2'];
  let radio = 'val1';
  let select = 'val1';
  let input = '';
  let inputNumber = 1;
  let textarea = '';
</script>

<Toast />

<Drawer
  isOpen={isDrawerOpen}
  onClose={() => (isDrawerOpen = false)}
  title="Drawer Title"
>
  <svelte:fragment slot="content">
    {#each [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as number}
      <p>This is a drawer component.</p>
      <div>{number}</div>
    {/each}
  </svelte:fragment>
  <svelte:fragment slot="footer">
    <Button on:click={() => (isDrawerOpen = false)} style="ghost">Close</Button>
  </svelte:fragment>
</Drawer>

<div class="container">
  <h1>Inputs</h1>
  <Input bind:value={input} label="Input" />
  <Input bind:value={input} label="Input disabled" disabled />
  <Input bind:value={input} label="Input error" error="This is an error" />
  <InputNumber bind:value={inputNumber} label="Input number" />
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
  <Group
    type="checkbox"
    bind:group={checkboxGroup}
    values={[
      { value: 'val1', description: 'desc1' },
      { value: 'val2', description: 'desc2' },
    ]}
  />

  <h1>Radio</h1>
  <Group
    type="radio"
    bind:group={radio}
    values={[
      { value: 'val3', description: 'desc1' },
      { value: 'val4', description: 'desc2' },
    ]}
  />

  <h1>Buttons</h1>
  <div class="flex-gap">
    <Button>Primary</Button>
    <Button submitting>Submitting</Button>
    <Button disabled>Disabled</Button>
    <Button style="error">Error</Button>
    <Button style="ghost">Ghost</Button>
  </div>

  <h1>Spinner</h1>
  <Spinner size={100} />

  <h1>Drawer</h1>
  <Button on:click={() => (isDrawerOpen = true)}>Open drawer</Button>
  <!-- 
  <h1>Pagination</h1>
  <Pagination pagination={$pagination} {actions} /> -->

  <h1>Toast</h1>
  <div class="flex-gap">
    <Button on:click={toastSave}>Toast save</Button>
    <Button on:click={toastError}>Toast error</Button>
    <Button on:click={toastDelete}>Toast delete</Button>
    <Button on:click={toastInfo}>Toast info</Button>
  </div>

  <h1>Dropdown</h1>
  <div class="flex-gap">
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
  <div class="flex-gap">
    <Tooltip tooltip={'tooltip text'} position={'top'} move={0.2}>
      <div class="tooltip-container">Top</div>
    </Tooltip>

    <Tooltip tooltip={'tooltip text'} position={'bottom'} move={0.2}>
      <div class="tooltip-container">Bottom</div>
    </Tooltip>
    <Tooltip tooltip={'tooltip text'} move={0.2} position={'right'}>
      <div class="tooltip-container">Right</div>
    </Tooltip>

    <Tooltip tooltip={'tooltip text'} position={'left'} move={0.2}>
      <div class="tooltip-container">Left</div>
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
  .flex-gap {
    display: flex;
    gap: 10px;
  }
  .tooltip-container {
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid gray;
    background-color: aliceblue;
    border-radius: 0.5rem;
    width: 5rem;
    height: 2.5rem;
  }
</style>
