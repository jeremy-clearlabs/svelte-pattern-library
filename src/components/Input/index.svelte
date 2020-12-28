<script>
  /**
   * Types of input
   * @ref https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
   * @type {"button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week"}
   */
  export let type = "text";

  /** Set to `true` to disable the input */
  export let disabled = false;

  /** Set to `true` to border the input with the danger color */
  export let invalid = false;

  /** Obtain a reference to the HTML element */
  export let ref = null;
  export let value;

  let inputProps = {};

  $: inputProps = {
    ref,
    type,
    disabled,
    value,
    class: [
      "input",
      invalid && "input--invalid",
      type === "textarea" && "textarea",
      type === "select" && "select",
      type === "radio" && "radio",
      type === "checkbox" && "checkbox",
      type === "button" && "button",
      type === "color" && "color",
      type === "date" && "date",
      type === "datetime-local" && "datetime-local",
      type === "file" && "file-input",
      type === "hidden" && "hidden-input",
      type === "image" && "image",
      type === "month" && "month",
      type === "range" && "range",
      type === "reset" && "reset",
      type === "submit" && "submit",
      type === "time" && "time",
      type === "week" && "week",
      ["email", "number", "password", "search", "tel", "text", "url"].includes(
        type
      ) && "text-input",
    ]
      .filter(Boolean)
      .join(" "),
    ...$$restProps,
  };
</script>

<style>
  .textarea,
  .select,
  .text-input {
    display: block;
    width: 100%;
    margin: 0;
    box-sizing: border-box;
    padding: 0.4444444444em;
    height: 2.2222222222em;
    border: 1px solid var(--color-dark);
    border-radius: 2px;
  }

  .input--invalid {
    border: 1px solid var(--color-danger);
  }

  .textarea {
    height: auto;
  }

  .checkbox-input,
  .radio-input {
    display: inline-block;
    border: 0;
    border-radius: 0;
    width: auto;
    height: auto;
    margin: 0 0.2rem 0 0;
  }
</style>

<input {...inputProps} />
