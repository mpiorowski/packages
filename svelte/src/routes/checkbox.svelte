<script lang="ts">
  import Checkbox from '../lib/form/checkbox.svelte';
  import Group from '../lib/form/group.svelte';

  let checked = false;

  let checkboxValues = [
    { value: '1', label: 'One' },
    { value: '2', label: 'Two' },
  ];

  let groupCheckbox: string[] = ['1'];
  let groupRadio = '1';
</script>

<Checkbox bind:checked>True / false Checkbox</Checkbox>
Values: {checked}
<Group type="radio" values={checkboxValues} bind:group={groupRadio} />
Values: {groupRadio}
<Group type="checkbox" values={checkboxValues} bind:group={groupCheckbox} />
Values: {groupCheckbox}
