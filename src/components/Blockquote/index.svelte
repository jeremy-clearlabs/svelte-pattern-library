<style>
  blockquote.blockquote {
    position: relative;
    font-style: italic;
    font-size: 1.2rem;
    line-height: 2rem;
    box-sizing: border-box;
    border-left: 5px solid var(--color-dark);
    margin: 1rem 0;
    padding: 0.5rem 0 0.5rem 1.5rem;
  }

  cite.cite {
    display: block;
    font-weight: 300;
    font-style: normal;
    margin-top: 0.4rem;
  }
</style>

<blockquote class="blockquote">
  <slot>Blockquote</slot>
  <cite class="cite"><slot name="cite" /></cite>
</blockquote>
