<script>
  import Progress from "./index.svelte";
  export let duration = 400;
  let tween = 0;
</script>

<Progress {tween} {duration} />

<button on:click={() => (tween = 0)}> 0% </button>

<button on:click={() => (tween = 0.25)}> 25% </button>

<button on:click={() => (tween = 0.5)}> 50% </button>

<button on:click={() => (tween = 0.75)}> 75% </button>

<button on:click={() => (tween = 1)}> 100% </button>
