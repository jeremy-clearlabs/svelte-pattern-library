<script>
  import Button from "./Button.svelte";
</script>

<style>
  .button-group {
    margin: 1rem 0;
  }
</style>

<div class="button-group">
  <Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="tertiary">Tertiary</Button>
  <Button variant="danger">Danger</Button>
  <Button variant="warning">Warning</Button>
  <Button variant="info">Info</Button>
  <Button variant="success">Success</Button>
  <Button variant="light">Light</Button>
  <Button variant="dark">Dark</Button>
  <Button type="link" href="/">Link</Button>
</div>

<div class="button-group">
  <Button disabled variant="primary">Disabled Primary</Button>
  <Button disabled variant="secondary">Disabled Secondary</Button>
  <Button disabled variant="tertiary">Disabled Tertiary</Button>
  <Button disabled variant="danger">Disabled Danger</Button>
  <Button disabled variant="warning">Disabled Warning</Button>
  <Button disabled variant="info">Disabled Info</Button>
  <Button disabled variant="success">Disabled Success</Button>
  <Button disabled variant="light">Disabled Light</Button>
  <Button disabled variant="dark">Disabled Dark</Button>
  <Button disabled type="link" href="/">Disabled Link</Button>
</div>
