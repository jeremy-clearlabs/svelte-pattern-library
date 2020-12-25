<script>
  import PaginationPageItem from "./PaginationPageItem";

  export let ariaLabel;
  export let offset;
  export let onPageChanged;
  export let pageLimit;
  export let pageNeighbours;
  export let totalRecords;

  let currentPage = 1;
  let totalPages = 0;
  let inputPage = null;

  const LEFT_PAGE = "LEFT";
  const RIGHT_PAGE = "RIGHT";
  const BETWEEN_PAGE = "BETWEEN";

  function isNumeric(str) {
    if (typeof str != "string") return false; // we only process strings!
    return (
      !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
      !isNaN(parseFloat(str))
    ); // ...and ensure strings of whitespace fail
  }

  /**
   * Helper method for creating a range of numbers
   * range(1, 5) => [1, 2, 3, 4, 5]
   */
  const range = (from, to, step = 1) => {
    let i = from;
    const range = [];

    while (i <= to) {
      range.push(i);
      i += step;
    }

    return range;
  };

  const gotoPage = (page) => {
    const nextCurrentPage = Math.max(0, Math.min(page, totalPages));
    const paginationData = {
      currentPage: nextCurrentPage,
      totalPages,
      pageLimit,
      totalRecords,
    };

    // Do not send handler if page doesn't change
    if (currentPage === nextCurrentPage) {
      return;
    }

    setCurrentPage(nextCurrentPage);
    onPageChanged && onPageChanged(paginationData);
  };
  const handleClick = (page) => (evt) => {
    evt.preventDefault();
    gotoPage(page);
  };

  const handleMoveNeighboursLeft = (evt) => {
    evt.preventDefault();

    gotoPage(currentPage - pageNeighbours * 2 - 1);
  };

  const handleMoveNeighboursRight = (evt) => {
    evt.preventDefault();

    gotoPage(currentPage + pageNeighbours * 2 + 1);
  };

  const handleMoveLeft = (evt) => {
    evt.preventDefault();

    gotoPage(currentPage - 1);
  };

  const handleMoveRight = (evt) => {
    evt.preventDefault();

    gotoPage(currentPage + 1);
  };

  const onInputPageChange = () => {
    if (inputPage) {
      gotoPage(inputPage);
    }
  };

  /**
   * Let's say we have 10 pages and we set pageNeighbours to 2
   * Given that the current page is 6
   * The pagination control will look like the following:
   *
   * (1) < {4 5} [6] {7 8} > (10)
   *
   * (x) => terminal pages: first and last page(always visible)
   * [x] => represents current page
   * {...x} => represents page neighbours
   */
  const fetchPageNumbers = () => {
    /**
     * totalNumbers: the total page numbers to show on the control
     * totalBlocks: totalNumbers + 2 to cover for the left(<) and right(>) controls
     */
    const totalNumbers = pageNeighbours * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbours);
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);

      let pages = range(startPage, endPage);

      /**
       * hasLeftSpill: has hidden pages to the left
       * hasRightSpill: has hidden pages to the right
       * spillOffset: number of hidden pages either to the left or to the right
       */
      const hasLeftSpill = startPage > 2;
      const hasRightSpill = totalPages - endPage > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        // handle: (1) < {5 6} [7] {8 9} (10)
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = range(startPage - spillOffset, startPage - 1);
          // Removing left spill
          // pages = [LEFT_PAGE, ...extraPages, ...pages];
          pages = [BETWEEN_PAGE, ...extraPages, ...pages];
          break;
        }

        // handle: (1) {2 3} [4] {5 6} > (10)
        case !hasLeftSpill && hasRightSpill: {
          const extraPages = range(endPage + 1, endPage + spillOffset);
          // Removing right spill
          // pages = [...pages, ...extraPages, RIGHT_PAGE];
          pages = [...pages, ...extraPages, BETWEEN_PAGE];
          break;
        }

        // handle: (1) < {4 5} [6] {7 8} > (10)
        case hasLeftSpill && hasRightSpill:
        default: {
          // Removing left and right spill
          // pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
          pages = [BETWEEN_PAGE, ...pages, BETWEEN_PAGE];
          break;
        }
      }

      return [1, ...pages, totalPages];
    }

    return range(1, totalPages);
  };

  $: totalPages = Math.ceil(totalRecords / pageLimit);

  // Set the initial page
  $: currentPage = offset ? Math.floor(offset / pageLimit) + 1 : 1;

  $: totalPages = Math.ceil(totalRecords / pageLimit);

  // const { currentPage } = this.state;
  let pages = fetchPageNumbers();

  const handleInputChange = (event) => {
    if (isNumeric(event?.target?.value)) {
      inputPage = parseInt(event.target.value, 10);
    } else {
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
      <PaginationPageItem onClick={handleMoveLeft} previous />
      {#each pages as page, index}
        {#if page === LEFT_PAGE}
          <PaginationPageItem
            key={`page_item_${index.toString()}`}
            onClick={handleMoveNeighboursLeft}
            previous />
        {:else if page === RIGHT_PAGE}
          <PaginationPageItem
            key={`page_item_${index.toString()}`}
            onClick={handleMoveNeighboursRight}
            next />
        {:else if page === BETWEEN_PAGE}
          <PaginationPageItem key={`page_item_${index.toString()}`} between />;
        {:else}
          <PaginationPageItem
            key={`page_item_${index.toString()}`}
            onClick={handleClick(page)}
            number={page}
            selected={currentPage === page} />
        {/if}
      {/each}
      <PaginationPageItem onClick={handleMoveRight} next />
      <input
        type="number"
        id="pagination-to"
        placeholder="Go To"
        onChange={handleInputChange} />
      <button onClick={onInputPageChange}>Go</button>
    </ul>
  </div>
{/if}
