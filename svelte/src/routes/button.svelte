<script lang="ts">
  import { Button, Checkbox } from '../lib';
  let disabled = false;
  let submitting = false;
</script>

<Checkbox bind:checked={disabled}>Disabled</Checkbox>
<Checkbox bind:checked={submitting}>Submitting</Checkbox>
<Button {disabled} {submitting}>Primary button</Button>
<Button {disabled} {submitting} style="error">Error button</Button>
<Button {disabled} {submitting} style="ghost">Ghost button</Button>
