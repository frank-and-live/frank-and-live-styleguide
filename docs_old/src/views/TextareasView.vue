<template>
  <h5>Sizes</h5>
  <div class="mb-5 border fl-border-grey-500 fl-bg-grey-300 p-5">
    <div class="fl-input d-inline-block me-5" style="width: 230px">
      <textarea
        type="text"
        placeholder="Default size"
      ></textarea>
    </div>
    <div class="fl-input fl-input-sm d-inline-block">
      <textarea
        class="fl-fs-p-s"
        type="text"
        placeholder="Small"
      ></textarea>
    </div>
  </div>

  <h5>States</h5>
  <div class="d-inline-block mb-5 border fl-border-grey-500">
    <div class="d-flex">
      <div class="p-5 fl-bg-grey-300">
        <div class="fl-input">
          <label class="fl-fs-p-s mb-1" for="with-error">Label</label>
          <textarea
            type="text"
            name="with-error"
            placeholder="Preview text"
          ></textarea>
          <div class="fl-fs-p-5 fl-fg-grey-500 mt-1 help-text">This is error text</div>
        </div>
      </div>
      <div class="p-5">
        <div class="fl-input">
          <label class="fl-fs-p-s mb-1" for="disabled">Label</label>
          <textarea
            type="text"
            name="disabled"
            placeholder="Preview text"
            disabled
          ></textarea>
          <div class="fl-fs-p-5 fl-fg-grey-500 mt-1 help-text">This is disabled</div>
        </div>
      </div>
    </div>
  </div>
</template>