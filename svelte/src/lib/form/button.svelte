<script lang="ts">
  import Spinner from '../spinner.svelte';

  export let form = '';
  export let style: 'primary' | 'error' | 'ghost' = 'primary';
  export let type: 'button' | 'submit' = 'button';
  export let submitting = false;
  export let disabled = false;
</script>

<button
  aria-label="button"
  {form}
  on:click
  {type}
  class={style}
  disabled={submitting || disabled}
>
  {#if submitting}
    <div class="spinner">
      <Spinner />
    </div>
  {/if}
  <slot />
</button>

<style>
  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 2.25rem;

    transition: all 0.2s ease-in-out;
    user-select: none;
    font-weight: bold;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    line-height: 1.25rem;

    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  }
  .spinner {
    height: 1.25rem;
    width: 1.25rem;
    margin-right: 0.5rem;
  }
  button.primary {
    background-color: var(--primary);
  }
  button.primary:hover {
    background-color: var(--primary-hover);
  }
  button.primary:focus {
    box-shadow: 0 0 0 2px var(--primary-focus), 0 1px 2px 0 rgb(0 0 0 / 0.05);
  }

  button.error {
    background-color: var(--error);
  }
  button.error:hover {
    background-color: var(--error-hover);
  }
  button.error:focus {
    box-shadow: 0 0 0 2px var(--error-focus), 0 1px 2px 0 rgb(0 0 0 / 0.05);
  }

  button.ghost {
    background-color: var(--ghost);
  }
  button.ghost:hover {
    background-color: var(--ghost-hover);
  }
  button.ghost:focus {
    box-shadow: 0 0 0 2px var(--ghost-focus), 0 1px 2px 0 rgb(0 0 0 / 0.05);
  }
</style>
