<script>
	import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';

  export let duration = 400;
  export let tween = 0;

	const progress = tweened(0, {
		duration,
		easing: cubicOut
  });

  $: progress.set(tween);
</script>

<style>
	progress {
		display: block;
		width: 100%;
	}
</style>

<progress value={$progress}></progress>
