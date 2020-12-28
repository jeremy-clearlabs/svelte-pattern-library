<script>
  import { createEventDispatcher } from 'svelte';

  import PaginationPageItem, {
    PAGE_ITEM_TYPE_NEXT,
    PAGE_ITEM_TYPE_PREVIOUS,
    PAGE_ITEM_TYPE_BETWEEN,
    PAGE_ITEM_TYPE_PAGE,
  } from "../PaginationPageItem/index.svelte";
  import fetchPageNumbers from "../../utils/fetchPageNumbers";

  const dispatch = createEventDispatcher();

  export let ariaLabel;
  export let offset = 0;
  export let pageLimit = 10;
  export let pageNeighbours = 2;
  export let totalRecords = 0;
  export let paginationInput = false;

  let currentPage = 1;
  let totalPages = 0;
  let inputPage = null;
  let pages = [];

  const LEFT_PAGE = "LEFT";
  const RIGHT_PAGE = "RIGHT";
  const BETWEEN_PAGE = "BETWEEN";

  $: totalPages = Math.ceil(totalRecords / pageLimit);

  // Set the initial page
  $: currentPage = offset ? Math.floor(offset / pageLimit) + 1 : 1;

  $: totalPages = Math.ceil(totalRecords / pageLimit);

  $: pages = fetchPageNumbers({ pageNeighbours, totalPages, currentPage });

  const gotoPage = (page) => {
    const nextCurrentPage = Math.max(0, Math.min(page, totalPages));

    // Do not send handler if page doesn't change
    if (currentPage === nextCurrentPage) {
      return;
    }

    currentPage = nextCurrentPage;

    dispatch('onPageChanged', {
      currentPage,
      totalPages,
      pageLimit,
      totalRecords,
    })
  };

  const handleInputPageChange = () => {
    console.log(inputPage);
    if (Number.isInteger(inputPage)) {
      gotoPage(parseInt(inputPage, 10));
      inputPage = null;
    }
  };
</script>

<style>
  ul.list {
    display: flex;
    list-style-type: none;
    justify-content: center;
    align-items: center;
  }
</style>

{#if !totalRecords || !totalPages || pageLimit >= totalRecords}
  <div />
{:else}
  <div aria-label={ariaLabel}>
    <ul class="list">
      <PaginationPageItem
        on:click={() => gotoPage(currentPage - 1)}
        pageItemType={PAGE_ITEM_TYPE_PREVIOUS} />
      {#each pages as page, index}
        {#if page === LEFT_PAGE}
          <PaginationPageItem
            key={`page_item_${index.toString()}`}
            on:click={() => gotoPage(currentPage - pageNeighbours * 2 - 1)}
            pageItemType={PAGE_ITEM_TYPE_PREVIOUS} />
        {:else if page === RIGHT_PAGE}
          <PaginationPageItem
            key={`page_item_${index.toString()}`}
            on:click={() => gotoPage(currentPage - pageNeighbours * 2 + 1)}
            pageItemType={PAGE_ITEM_TYPE_NEXT} />
        {:else if page === BETWEEN_PAGE}
          <PaginationPageItem
            key={`page_item_${index.toString()}`}
            pageItemType={PAGE_ITEM_TYPE_BETWEEN} />
        {:else}
          <PaginationPageItem
            key={`page_item_${index.toString()}`}
            on:click={() => gotoPage(page)}
            pageItemType={PAGE_ITEM_TYPE_PAGE}
            number={page}
            selected={currentPage === page} />
        {/if}
      {/each}
      <PaginationPageItem on:click={() => gotoPage(currentPage + 1)} next />
      {#if paginationInput}
        <input
          type="number"
          id="pagination-to"
          placeholder="Go To"
          bind:value={inputPage} />
        <button on:click={handleInputPageChange}>Go</button>
      {/if}
    </ul>
  </div>
{/if}
