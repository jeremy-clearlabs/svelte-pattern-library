<script>
	import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';

  export let duration = 400;
  export let progress = 0;

	const progressTweened = tweened(0, {
		duration,
		easing: cubicOut
  });

  $: progressTweened.set(progress);
</script>

<style>
	progress {
		display: block;
		width: 100%;
	}
</style>

<progress value={$progressTweened}></progress>
