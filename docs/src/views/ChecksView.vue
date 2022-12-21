<template>
  <h5>Sizes</h5>
  <div class="d-inline-block mb-5 border mf-border-grey-500 p-5">
    <div class="mf-check d-inline-block me-5">
      <input class="mf-check-input" type="radio" name="flexRadioRegular" id="flexRadioRegular">
      <label class="mf-fs-p-3 ms-3" for="flexRadioRegular">
        Default radio
      </label>
    </div>
    <div class="mf-check mf-check-sm d-inline-block">
      <input class="mf-check-input mf-check-input-sm" type="radio" name="flexRadioSmall" id="flexRadioSmall">
      <label class="mf-fs-p-4 ms-3" for="flexRadioSmall">
        Default radio small
      </label>
    </div>
  </div>
  <h5>Radio buttons</h5>
  <p>Inlined</p>
  <div class="d-inline-block mb-5 border mf-border-grey-500 p-5">
    <div class="mf-check d-inline-block me-5">
      <input class="mf-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault1">
      <label class="mf-fs-p-3 ms-3" for="flexRadioDefault1">
        Default radio
      </label>
    </div>
    <div class="mf-check d-inline-block">
      <input class="mf-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault2" checked>
      <label class="mf-fs-p-3 ms-3" for="flexRadioDefault2">
        Default checked radio
      </label>
    </div>
  </div>
  <div></div>
  <div class="d-inline-block mb-5 border mf-border-grey-500 p-5">
    <div class="mf-check d-inline-block me-5">
      <input class="mf-check-input" type="radio" name="flexRadioDefaultDisabled1" id="flexRadioDefaultDisabled1" disabled>
      <label class="mf-fs-p-3 ms-3" for="flexRadioDefaultDisabled1">
        Default radio
      </label>
    </div>
    <div class="mf-check d-inline-block">
      <input class="mf-check-input" type="radio" name="flexRadioDefaultDisabled2" id="flexRadioDefaultDisabled2" checked disabled>
      <label class="mf-fs-p-3 ms-3" for="flexRadioDefaultDisabled2">
        Default checked radio
      </label>
    </div>
  </div>
  <h5>Checkboxes</h5>
  <p>Stacked</p>
  <div class="d-inline-block mb-5 border mf-border-grey-500 p-5">
    <div class="mf-check mt-3">
      <input class="mf-check-input" type="checkbox" value="" id="flexCheckDefault">
      <label class="mf-fs-p-3 ms-3" for="flexCheckDefault">
        Default checkbox
      </label>
    </div>
    <div class="mf-check mt-3">
      <input class="mf-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
      <label class="mf-fs-p-3 ms-3" for="flexCheckChecked">
        Checked checked checkbox
      </label>
    </div>
    <div class="mf-check mt-3">
      <input class="mf-check-input" type="checkbox" value="" id="flexCheckDefaultDisabled" disabled>
      <label class="mf-fs-p-3 ms-3" for="flexCheckDefaultDisabled">
        Default checkbox (disabled)
      </label>
    </div>
    <div class="mf-check mt-3">
      <input class="mf-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" checked disabled>
      <label class="mf-fs-p-3 ms-3" for="flexCheckCheckedDisabled">
        Checked checkbox (disabled)
      </label>
    </div>
  </div>
</template>
