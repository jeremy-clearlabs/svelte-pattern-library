<script>
  /**
   * @extends {"./ButtonSkeleton"} ButtonSkeletonProps
   * @restProps {button | a | div}
   * @slot {{ props: { role: "button"; type?: string; tabindex: any; disabled: boolean; href?: string; class: string; [key: string]: any; } }}
   */
  /**
   * Specify the kind of button
   * @type {"primary" | "secondary" | "tertiary" | "ghost" | "danger" | "danger-tertiary" | "danger-ghost"}
   */
  export let kind = "primary";
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
  /** Specify the `type` attribute for the button element */
  export let type = "button";
  /** Obtain a reference to the HTML element */
  export let ref = null;

  $: buttonProps = {
    role: "button",
    type: href && !disabled ? undefined : type,
    tabindex,
    disabled,
    href,
    ...$$restProps,
    class: [
      "btn",
      size === "field" && "btn--field",
      size === "small" && "btn--sm",
      kind && `btn--${kind}`,
      disabled && "btn--disabled",
      hasIconOnly && "btn--icon-only",
      hasIconOnly && "tooltip__trigger",
      hasIconOnly && "tooltip--a11y",
      hasIconOnly && tooltipPosition && `tooltip--${tooltipPosition}`,
      hasIconOnly &&
        tooltipAlignment &&
        `tooltip--align-${tooltipAlignment}`,
      $$restProps.class,
    ]
      .filter(Boolean)
      .join(" "),
  };
</script>

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
  <slot />
  <svelte:component
    this={icon}
    aria-hidden="true"
    class="bx--btn__icon"
    aria-label={iconDescription} />
</button>
