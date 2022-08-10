<script lang="ts">
  import { Spinner } from '../lib';
  import Checkbox from '../lib/form/checkbox.svelte';
  import InputNumber from '../lib/form/inputNumber.svelte';

  let center = false;
  let size = 40;
</script>

<Checkbox bind:checked={center}>Center spinner</Checkbox>
<InputNumber bind:value={size} label="Size" max={200} min={1} />

<Spinner {center} {size} />
