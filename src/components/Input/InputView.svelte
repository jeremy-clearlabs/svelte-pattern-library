<script>
  import Input from "./index.svelte";
</script>

<style>
  .form-control {
    margin: 1rem 0;
  }
  .form-control:first-child {
    margin: 0 0 1rem;
  }
  .form-control:last-child {
    margin: 1rem 0 0;
  }
</style>

<div class="form-control">
  <label for="input-button">Button</label>
  <Input name="input-button" id="input-button" type="button" value="button" />
</div>

<div class="form-control">
  <label for="input-checkbox">Checkbox</label>
  <Input id="input-checkbox" type="checkbox" />
</div>

<div class="form-control">
  <label for="input-color">Color</label>
  <Input id="input-color" type="color" />
</div>

<div class="form-control">
  <label for="input-date">Date</label>
  <Input id="input-date" type="date" />
</div>

<div class="form-control">
  <label for="input-datetime-local">Datetime-local</label>
  <Input id="input-datetime-local" type="datetime-local" />
</div>

<div class="form-control">
  <label for="input-email">Email</label>
  <Input id="input-email" type="email" />
</div>

<div class="form-control">
  <label for="input-file">File</label>
  <Input id="input-file" type="file" />
</div>

<div class="form-control">
  <label for="input-hidden">Hidden</label>
  <Input id="input-hidden" type="hidden" />
</div>

<div class="form-control">
  <label for="input-image">Image</label>
  <Input id="input-image" type="image" />
</div>

<div class="form-control">
  <label for="input-month">Month</label>
  <Input id="input-month" type="month" />
</div>

<div class="form-control">
  <label for="input-number">Number</label>
  <Input id="input-number" type="number" />
</div>

<div class="form-control">
  <label for="input-password">Password</label>
  <Input id="input-password" type="password" />
</div>

<div class="form-control">
  <label for="input-radio">Radio</label>
  <Input id="input-radio" type="radio" />
</div>

<div class="form-control">
  <label for="input-range">Range</label>
  <Input id="input-range" type="range" />
</div>

<div class="form-control">
  <label for="input-reset">Reset</label>
  <Input id="input-reset" type="reset" />
</div>

<div class="form-control">
  <label for="input-search">Search</label>
  <Input id="input-search" type="search" />
</div>

<div class="form-control">
  <label for="input-submit">Submit</label>
  <Input id="input-submit" type="submit" />
</div>

<div class="form-control">
  <label for="input-tel">Tel</label>
  <Input id="input-tel" type="tel" />
</div>

<div class="form-control">
  <label for="input-text">Text</label>
  <Input id="input-text" type="text" />
</div>

<div class="form-control">
  <label for="input-time">Time</label>
  <Input id="input-time" type="time" />
</div>

<div class="form-control">
  <label for="input-url">Url</label>
  <Input id="input-url" type="url" />
</div>

<div class="form-control">
  <label for="input-week">Week</label>
  <Input id="input-week" type="week" />
</div>
