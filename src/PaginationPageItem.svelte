<script>
  export let next;
  export let previous;
  export let between;
  export let label;
  export let selected;
  export let number;
</script>

<style>
  li.wrapper {
    display: block;
    margin: 0 0.5rem;
    width: min-content;
  }
  li.wrapper:first-child {
    margin-left: 0;
  }
  li.wrapper:last-child {
    margin-right: 0;
  }
  span.screen-reader-only {
    font-size: 0;
  }

  button.pagination-page-item-button--selected {
    font-weight: bold;
  }
</style>

{#if next || previous}
  <li class="wrapper">
    <button aria-label={label} class="pagination-page-item-button">
      {#if next}
        <span aria-hidden="true">&raquo;</span>
      {:else}<span aria-hidden="true">&laquo;</span>{/if}
      <span class="screen-reader-only">{label}</span>
    </button>
  </li>
{:else if between}
  <li class="wrapper">
    <button disabled class="pagination-page-item-button">
      <span aria-hidden="true">&hellip;</span>
    </button>
  </li>
{:else}
  <li class="wrapper">
    <button
      class={selected ? 'pagination-page-item-button pagination-page-item-button--selected' : 'pagination-page-item-button'}
      aria-label={`Go to page ${number}`}>
      {number}
    </button>
  </li>
{/if}
