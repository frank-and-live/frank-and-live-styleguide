<template>
  <h5>Sizes</h5>
  <div class="mb-5 border fl-border-grey-500 fl-bg-grey-300 p-5">
    <div class="fl-select d-inline-block me-5" style="width: 400px">
      <select>
        <option value="default">Default with fixed width</option>
        <option value="option-2">Option 2</option>
        <option value="option-3">Option 3</option>
      </select>
    </div>
    <div class="fl-select fl-select-sm d-inline-block">
      <select>
        <option value="small">Small</option>
        <!-- <option value="option-2">Option 2</option>
        <option value="option-3">Option 3</option> -->
      </select>
    </div>

    <div class="mt-5">
      <div class="fl-select fl-select-sm">
        <label class="fl-fs-p-4 mb-1">Label</label>
        <select>
          <option value="small">Small full width</option>
          <option value="option-2">Option 2</option>
          <option value="option-3">Option 3 is a semi long option</option>
        </select>
      </div>
    </div>
  </div>

  <h5>Variations</h5>
  <div class="mb-5 border fl-border-grey-500 fl-bg-grey-300 p-5">
    <div class="fl-select mb-5">
      <select class="border-0">
        <option value="option-3">Option 3</option>
        <option value="option-2">Option 2</option>
        <option value="option-13">Option 13</option>
      </select>
    </div>
    
    <div class="fl-select mb-5">
      <label class="fl-fs-p-4 mb-1">Label</label>
      <select required>
        <!-- The "required" attribute is needed on the select element in order for the first option to serve as a placeholder -->
        <option value="" disabled selected>Please select</option>
        <option value="option-2">Option 2</option>
        <option value="option-3">Option 3</option>
      </select>
    </div>

    <div class="fl-select">
      <select>
        <option value="option-1">Option 1</option>
        <option value="option-2" selected>Option 2</option>
        <option value="option-3">Option 3</option>
      </select>
      <div class="fl-fs-p-5 fl-fg-grey-500 mt-1 mb-5 help-text">
        This is optional helper text
      </div>
    </div>

    <div class="fl-select">
      <label class="fl-fs-p-4 mb-1">Label</label>
      <select>
        <option value="option-1">Option 1</option>
        <option value="option-2">Option 2</option>
        <option value="option-3">Option 3</option>
      </select>
      <div class="fl-fs-p-5 fl-fg-grey-500 mt-1 help-text">
        This is optional helper text
      </div>
    </div>
  </div>

  <h5>States</h5>
  <div class="mb-5 border fl-border-grey-500 p-5">
    <div class="fl-select fl-select-error">
      <label class="fl-fs-p-4 mb-1">Label</label>
      <select>
        <option value="option-1">Option 1</option>
        <option value="option-2">Option 2</option>
        <option value="option-3">Option 3</option>
      </select>
      <div class="fl-fs-p-5 fl-fg-grey-500 mt-1 help-text mb-5">This is error text</div>
    </div>
    
    <div class="fl-select">
      <label class="fl-fs-p-4 mb-1">Label</label>
      <select disabled>
        <option value="option-1">Option 1</option>
        <option value="option-2">Option 2</option>
        <option value="option-3">Option 3</option>
      </select>
      <div class="fl-fs-p-5 fl-fg-grey-500 mt-1 help-text">
        This select is disabled
      </div>
    </div>
  </div>

</template>
