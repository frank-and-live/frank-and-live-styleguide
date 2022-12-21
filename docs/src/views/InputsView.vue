<template>
  <h5>Sizes</h5>
  <div class="mb-5 border mf-border-grey-500 mf-bg-grey-300 p-5">
    <div class="mf-input d-inline-block me-5" style="width: 230px">
      <input
        class="mf-fs-p-3"
        type="text"
        name="field-only"
        placeholder="Default fixed width"
      />
    </div>
    <div class="mf-input mf-input-sm d-inline-block">
      <input
        class="mf-fs-p-3"
        type="text"
        name="field-only"
        placeholder="Small"
      />
    </div>
    <div class="mf-input mf-input-sm mt-5 w-100">
      <input
        class="mf-fs-p-3"
        type="text"
        name="field-only"
        placeholder="Small full width"
      />
    </div>
  </div>

  <h5>Variations</h5>
  <div class="d-inline-block p-5 mb-5 border mf-border-grey-500 mf-bg-grey-300">
    <div class="mb-5">
      <div class="mf-input">
        <input
          class="mf-fs-p-3"
          type="text"
          name="field-only"
          placeholder="Preview text"
        />
      </div>
    </div>
    <div class="mb-5">
      <div class="mf-input">
        <label class="mf-fs-p-4 mb-1" for="with-label">Label</label>
        <input
          class="mf-fs-p-3"
          type="text"
          name="with-label"
          placeholder="Preview text"
        />
      </div>
    </div>
    <div class="mb-5">
      <div class="mf-input">
        <label class="mf-fs-p-4 mb-1" for="with-helper-text">Label</label>
        <input
          class="mf-fs-p-3"
          type="text"
          name="with-helper-text"
          placeholder="Preview text"
        />
        <div class="mf-fs-p-5 mf-fg-grey-500 mt-1 help-text">
          This is optional helper text
        </div>
      </div>
    </div>
    <div>
      <div class="mf-input">
        <label class="mf-fs-p-4 mb-1" for="with-icon">Label</label>
        <input
          class="mf-fs-p-3"
          type="text"
          name="with-icon"
          placeholder="Preview text"
        />
        <img
          class="mf-input-icon"
          src="https://moneyflow-group.github.io/moneyflow-style-guide-v2/dist/static/icons/close.svg"
          alt=""
        />
        <div class="mf-fs-p-5 mf-fg-grey-500 mt-1 help-text">
          This is optional helper text
        </div>
      </div>
    </div>
  </div>

  <h5>States</h5>
  <div class="d-inline-block mb-5 border mf-border-grey-500">
    <div class="d-flex">
      <div class="p-5 mf-bg-grey-300">
        <div class="mf-input mf-input-error">
          <label class="mf-fs-p-4 mb-1" for="with-error">Label</label>
          <input
            class="mf-fs-p-3"
            type="text"
            name="with-error"
            placeholder="Preview text"
          />
          <div class="mf-fs-p-5 mf-fg-grey-500 mt-1 help-text">This is error text</div>
        </div>
      </div>
      <div class="p-5">
        <div class="mf-input">
          <label class="mf-fs-p-4 mb-1" for="with-error">Label</label>
          <input
            class="mf-fs-p-3"
            type="text"
            name="with-error"
            placeholder="Preview text"
            disabled
          />
          <div class="mf-fs-p-5 mf-fg-grey-500 mt-1 help-text">
            This input is disabled
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
