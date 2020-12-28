<script>
  import ProgressBar from "./index.svelte";
  export let duration = 400;
  let progress = 0;
</script>

<ProgressBar {progress} {duration} />

<button on:click={() => (progress = 0)}> 0% </button>

<button on:click={() => (progress = 0.25)}> 25% </button>

<button on:click={() => (progress = 0.5)}> 50% </button>

<button on:click={() => (progress = 0.75)}> 75% </button>

<button on:click={() => (progress = 1)}> 100% </button>
