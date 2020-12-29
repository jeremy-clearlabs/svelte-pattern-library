<script>
  export let level = 1;

  $: {
    if (
      !new Array(6)
        .fill()
        .map((_, i) => i + 1)
        .includes(level)
    ) {
      // return level back to default
      level = 1;
    }
  }
</script>

<style>
  h1.heading {
    font-size: 2rem;
  }
  h2.heading {
    font-size: 1.8rem;
  }
  h3.heading {
    font-size: 1.5rem;
  }
  h4.heading {
    font-size: 1.2rem;
  }
  h5.heading {
    font-size: 1rem;
  }
  h6.heading {
    font-size: 0.8rem;
  }
</style>

{#if level === 1}
  <h1 class="heading">
    <slot>Heading Level 1</slot>
  </h1>
{:else if level === 2}
  <h2 class="heading">
    <slot>Heading Level 2</slot>
  </h2>
{:else if level === 3}
  <h3 class="heading">
    <slot>Heading Level 3</slot>
  </h3>
{:else if level === 4}
  <h4 class="heading">
    <slot>Heading Level 4</slot>
  </h4>
{:else if level === 5}
  <h5 class="heading">
    <slot>Heading Level 5</slot>
  </h5>
{:else if level === 6}
  <h6 class="heading">
    <slot>Heading Level 6</slot>
  </h6>
{/if}
