<script lang="ts">
  export let tooltip: boolean | string = false; // prevent blank tooltips
  export let position: 'top' | 'right' = 'top';
  export let move = 0;
</script>

<div
  data-tooltip={tooltip}
  style={`--tooltip-move:${move}rem`}
  class={position}
>
  <slot />
</div>

<style>
  [data-tooltip] {
    position: relative;
    display: block;
  }

  [data-tooltip]::before,
  [data-tooltip]::after {
    z-index: 100;
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
    transition: 0.2s ease-out;
    /* transform: translate(-50%, 5px); */
  }

  [data-tooltip]::before {
    z-index: 100;
    position: absolute;
    width: 100%;

    content: attr(data-tooltip);
    text-align: center;
    transition: 0.2s ease-out;

    @apply bg-gray-200 text-gray-800 rounded-lg font-normal px-2 py-1 mb-1 text-sm;
  }

  /* TODO - add arrow */
  /* [data-tooltip]:after {
    position: absolute;
    top: auto;
    left: calc(100% + 10px);
    width: 0;
    border-top: 5px solid #000;
    border-top: 5px solid hsla(0, 0%, 20%, 0.9);
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
    content: ' ';
    font-size: 0;
    line-height: 0;
  } */

  [data-tooltip]:hover::before,
  [data-tooltip]:hover::after {
    z-index: 40;
    visibility: visible;
    opacity: 1;
    /* transform: translate(-50%, 0); */
  }
  [data-tooltip='false']:hover::before,
  [data-tooltip='false']:hover::after {
    visibility: hidden;
    opacity: 0;
  }

  .top::before {
    left: 50%;
    transform: translateX(-50%);
    bottom: calc(100% + var(--tooltip-move));
  }
  .right::before {
    top: auto;
    left: calc(100% + var(--tooltip-move));
  }
</style>
