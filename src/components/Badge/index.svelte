<script>
  /**
   * Specify the kind of badge
   * @type {"primary" | "secondary" | "tertiary" | "danger" | "danger-tertiary" | "warning" | "warning-tertiary" | "info" | "info-tertiary" | "success" | "success-tertiary"}
   */
  export let variant = "primary";

  let badgeProps;
  $: badgeProps = {
    class: ["badge", variant && `badge--${variant}`, $$restProps.class]
      .filter(Boolean)
      .join(" "),
  };
</script>

<style>
  .badge {
    font-size: 0.75rem;
    line-height: 1.5em;
    padding: 0.1em 0.3em;
    font-weight: 800;
    color: var(--color-light);
    background-color: var(--color-dark);
    border-radius: 0.16667em;
  }
</style>

<span {...badgeProps}><slot>Badge</slot></span>
