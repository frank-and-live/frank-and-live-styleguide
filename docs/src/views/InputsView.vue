<template>
  <h5>Sizes</h5>
  <div class="mb-5 border fl-border-grey-500 fl-bg-grey-300 p-5">
    <div class="fl-input d-inline-block me-5" style="width: 230px">
      <input
        class="fl-fs-p-3"
        type="text"
        name="field-only"
        placeholder="Default fixed width"
      />
    </div>
    <div class="fl-input fl-input-sm d-inline-block">
      <input
        class="fl-fs-p-3"
        type="text"
        name="field-only"
        placeholder="Small"
      />
    </div>
    <div class="fl-input fl-input-sm mt-5 w-100">
      <input
        class="fl-fs-p-3"
        type="text"
        name="field-only"
        placeholder="Small full width"
      />
    </div>
  </div>

  <h5>Variations</h5>
  <div class="d-inline-block p-5 mb-5 border fl-border-grey-500 fl-bg-grey-300">
    <div class="mb-5">
      <div class="fl-input">
        <input
          class="fl-fs-p-3"
          type="text"
          name="field-only"
          placeholder="Preview text"
        />
      </div>
    </div>
    <div class="mb-5">
      <div class="fl-input">
        <label class="fl-fs-p-4 mb-1" for="with-label">Label</label>
        <input
          class="fl-fs-p-3"
          type="text"
          name="with-label"
          placeholder="Preview text"
        />
      </div>
    </div>
    <div class="mb-5">
      <div class="fl-input">
        <label class="fl-fs-p-4 mb-1" for="with-helper-text">Label</label>
        <input
          class="fl-fs-p-3"
          type="text"
          name="with-helper-text"
          placeholder="Preview text"
        />
        <div class="fl-fs-p-5 fl-fg-grey-500 mt-1 help-text">
          This is optional helper text
        </div>
      </div>
    </div>
    <div>
      <div class="fl-input">
        <label class="fl-fs-p-4 mb-1" for="with-icon">Label</label>
        <input
          class="fl-fs-p-3"
          type="text"
          name="with-icon"
          placeholder="Preview text"
        />
        <img
          class="fl-input-icon"
          src="https://moneyflow-group.github.io/moneyflow-style-guide-v2/dist/static/icons/close.svg"
          alt=""
        />
        <div class="fl-fs-p-5 fl-fg-grey-500 mt-1 help-text">
          This is optional helper text
        </div>
      </div>
    </div>
  </div>

  <h5>States</h5>
  <div class="d-inline-block mb-5 border fl-border-grey-500">
    <div class="d-flex">
      <div class="p-5 fl-bg-grey-300">
        <div class="fl-input fl-input-error">
          <label class="fl-fs-p-4 mb-1" for="with-error">Label</label>
          <input
            class="fl-fs-p-3"
            type="text"
            name="with-error"
            placeholder="Preview text"
          />
          <div class="fl-fs-p-5 fl-fg-grey-500 mt-1 help-text">This is error text</div>
        </div>
      </div>
      <div class="p-5">
        <div class="fl-input">
          <label class="fl-fs-p-4 mb-1" for="with-error">Label</label>
          <input
            class="fl-fs-p-3"
            type="text"
            name="with-error"
            placeholder="Preview text"
            disabled
          />
          <div class="fl-fs-p-5 fl-fg-grey-500 mt-1 help-text">
            This input is disabled
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
