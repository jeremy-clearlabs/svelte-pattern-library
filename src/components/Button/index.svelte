<script>
  import "../../main.css";

  /** Specify the `type` attribute for the button element */
  export let type = "button";
  /**
   * Specify the kind of button
   * @type {"primary" | "secondary" | "tertiary" | "danger" | "danger-tertiary" | "warning" | "warning-tertiary" | "info" | "info-tertiary" | "success" | "success-tertiary"}
   */
  export let variant = type === "link" ? "link" : "primary";
  /**
   * Specify the size of button
   * @type {"default" | "field" | "small"}
   */
  export let size = "default";
  /** Set to `true` for the icon-only variant */
  export let hasIconOnly = false;
  /**
   * Specify the icon from `carbon-icons-svelte` to render
   * @type {typeof import("carbon-icons-svelte").CarbonIcon}
   */
  export let icon = undefined;
  /**
   * Specify the ARIA label for the button icon
   * @type {string}
   */
  export let iconDescription = undefined;
  /**
   * Set the alignment of the tooltip relative to the icon
   * `hasIconOnly` must be set to `true`
   * @type {"start" | "center" | "end"}
   */
  export let tooltipAlignment = undefined;
  /**
   * Set the position of the tooltip relative to the icon
   * @type {"top" | "right" | "bottom" | "left"}
   */
  export let tooltipPosition = undefined;
  /** Set to `true` to disable the button */
  export let disabled = false;
  /**
   * Set the `href` to use an anchor link
   * @type {string}
   */
  export let href = undefined;
  /** Specify the tabindex */
  export let tabindex = "0";

  /** Obtain a reference to the HTML element */
  export let ref = null;

  $: buttonProps = {
    role: "button",
    type: href && !disabled ? undefined : type,
    tabindex,
    disabled,
    href,
    class: [
      "btn",
      size === "field" && "btn--field",
      size === "small" && "btn--sm",
      variant && `btn--${variant}`,
      disabled && "btn--disabled",
      hasIconOnly && "btn--icon-only",
      hasIconOnly && "tooltip__trigger",
      hasIconOnly && "tooltip--a11y",
      hasIconOnly && tooltipPosition && `tooltip--${tooltipPosition}`,
      hasIconOnly && tooltipAlignment && `tooltip--align-${tooltipAlignment}`,
      $$restProps.class,
    ]
      .filter(Boolean)
      .join(" "),
    ...$$restProps,
  };
</script>

<style>
  .btn {
    background-color: transparent;
    color: inherit;
    border-width: 0;
    padding: 0.8rem 0.4rem;
    cursor: pointer;
    border-radius: 4px;
  }
  .btn[disabled] {
    cursor: not-allowed;
  }
  .btn--field {
    padding: 1rem 0.5rem;
  }
  .btn--sm {
    padding: 0.4rem 0.2rem;
  }
  .btn--primary {
    background-color: var(--color-primary);
    color: var(--color-light);
  }
  .btn--secondary {
    background-color: var(--color-secondary);
    color: var(--color-light);
  }
  .btn--tertiary {
    border: none;
    color: var(--color-dark);
  }
  .btn--danger {
    background-color: var(--color-danger);
    color: var(--color-light);
  }
  .btn--warning {
    background-color: var(--color-warning);
    color: var(--color-dark);
  }
  .btn--info {
    background-color: var(--color-info);
    color: var(--color-dark);
  }
  .btn--success {
    background-color: var(--color-success);
    color: var(--color-dark);
  }
  .btn--light {
    background-color: var(--color-light);
    color: var(--color-dark);
  }
  .btn--dark {
    background-color: var(--color-dark);
    color: var(--color-light);
  }
  .btn--link {
    color: #069;
    text-decoration: underline;
    cursor: pointer;
  }
</style>

<button
  bind:this={ref}
  {...buttonProps}
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave>
  {#if hasIconOnly}
    <span class:bx--assistive-text={true}>{iconDescription}</span>
  {/if}
  <slot>Button</slot>
  <svelte:component
    this={icon}
    aria-hidden="true"
    class="bx--btn__icon"
    aria-label={iconDescription} />
</button>
