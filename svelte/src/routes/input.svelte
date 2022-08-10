<script lang="ts">
  import { Checkbox, Input, Textarea } from '../lib';
  import InputNumber from '../lib/form/inputNumber.svelte';
  import InputSimple from '../lib/form/inputSimple.svelte';

  let input = '';
  let textarea = '';
  let inputNumber = 0;
  let inputDate = 0;
  let disabled = false;
  let required = false;
  let withError = false;
</script>

<Checkbox bind:checked={withError}>With errror</Checkbox>
<Checkbox bind:checked={required}>Required</Checkbox>
<Checkbox bind:checked={disabled}>Disabled</Checkbox>
<Input
  bind:value={input}
  {required}
  {disabled}
  error={withError ? 'This must be filled' : ''}
  label="Input text"
  type="text"
/>
<InputNumber
  bind:value={inputNumber}
  {required}
  {disabled}
  max={100}
  error={withError ? 'This must be filled' : ''}
  label="Input number"
/>
<Input
  bind:value={inputDate}
  {required}
  {disabled}
  error={withError ? 'This must be filled' : ''}
  label="Input date"
  type="date"
/>

<Textarea
  bind:value={textarea}
  {required}
  {disabled}
  error={withError ? 'This must be filled' : ''}
  label="Textarea"
  placeholder="Placeholder"
/>

<InputSimple bind:value={input} placeholder="Input simple" />
