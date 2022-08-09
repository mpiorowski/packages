<script lang="ts">
  import { Tooltip } from '../lib';
</script>

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

<style>
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
