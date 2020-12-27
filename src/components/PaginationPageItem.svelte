<script context="module">
  export const PAGE_ITEM_TYPE_NEXT = "NEXT";
  export const PAGE_ITEM_TYPE_PREVIOUS = "PREVIOUS";
  export const PAGE_ITEM_TYPE_BETWEEN = "BETWEEN";
  export const PAGE_ITEM_TYPE_PAGE = "PAGE";
</script>

<script>
  import { createEventDispatcher } from "svelte";

  export let pageItemType = PAGE_ITEM_TYPE_NEXT;
  export let label;
  export let selected;
  export let number;

  const dispatch = createEventDispatcher();

  function clickHandler() {
    dispatch("onClick", { pageItemType, number });
  }
</script>

<style>
  li.page-item {
    display: block;
    margin: 0 0.5rem;
    width: min-content;
  }
  li.page-item:first-child {
    margin-left: 0;
  }
  li.page-item:last-child {
    margin-right: 0;
  }
  span.screen-reader-only {
    display: none;
    font-size: 0;
  }

  button.pagination-page-item-button--selected {
    font-weight: bold;
  }
</style>

{#if [PAGE_ITEM_TYPE_NEXT, PAGE_ITEM_TYPE_PREVIOUS].includes(pageItemType)}
  <li class="page-item" on:click={clickHandler}>
    <button aria-label={label} class="pagination-page-item-button">
      {#if pageItemType === PAGE_ITEM_TYPE_NEXT}
        <span aria-hidden="true">&raquo;</span>
      {:else}<span aria-hidden="true">&laquo;</span>{/if}
      <span class="screen-reader-only">{label}</span>
    </button>
  </li>
{:else if PAGE_ITEM_TYPE_BETWEEN === pageItemType}
  <li class="page-item" on:click={clickHandler}>
    <button disabled class="pagination-page-item-button">
      <span aria-hidden="true">&hellip;</span>
    </button>
  </li>
{:else if pageItemType === PAGE_ITEM_TYPE_PAGE}
  <li class="page-item" on:click={clickHandler}>
    <button
      class={selected ? 'pagination-page-item-button pagination-page-item-button--selected' : 'pagination-page-item-button'}
      aria-label={`Go to page ${number}`}>
      {number}
    </button>
  </li>
{/if}
