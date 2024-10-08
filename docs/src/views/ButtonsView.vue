<template>
  <h5 class="mb-3">Sizes</h5>
  <div class="d-inline-block mb-5 border fl-border-grey-500 fl-bg-white">
    <div class="d-flex align-items-center">
      <div class="p-5">
        <button class="fl-btn">Regular</button>
      </div>
      <div class="p-5">
        <button class="fl-btn fl-btn-sm">Small</button>
      </div>
      <div class="p-5">
        <button class="fl-btn fl-btn-lg">Large</button>
      </div>
    </div>
  </div>

  <h5>Variations</h5>
  <p>Filled white</p>
  <div class="d-inline-block mb-5 border fl-border-grey-500">
    <div class="d-flex">
      <div class="p-5">
        <button class="fl-btn fl-btn-filled-white">Button</button>
      </div>
      <div class="p-5">
        <button class="fl-btn fl-btn-filled-white" disabled>Button</button>
      </div>
    </div>
  </div>

  <p>Filled black</p>
  <div class="d-inline-block mb-5 border fl-border-grey-500">
    <div class="d-flex">
      <div class="p-5">
        <button class="fl-btn fl-btn-filled-black">Button</button>
      </div>
      <div class="p-5">
        <button class="fl-btn fl-btn-filled-black" disabled>Button</button>
      </div>
    </div>
  </div>

  <p>Filled green</p>
  <div class="d-inline-block mb-5 border fl-border-grey-500">
    <div class="d-flex">
      <div class="p-5">
        <button class="fl-btn fl-btn-filled-green">Button</button>
      </div>
      <div class="p-5">
        <button class="fl-btn fl-btn-filled-green" disabled>Button</button>
      </div>
    </div>
  </div>

  <p>Outlined</p>
  <div class="d-inline-block mb-5 border fl-border-grey-500">
    <div class="d-flex">
      <div class="p-5">
        <button class="fl-btn fl-btn-outlined">Button</button>
      </div>
      <div class="p-5">
        <button class="fl-btn fl-btn-outlined" disabled>Button</button>
      </div>
    </div>
  </div>

  <p>Rounded</p>
  <div class="d-inline-block mb-5 border fl-border-grey-500">
    <div class="d-flex">
      <div class="p-5">
        <button class="fl-btn fl-btn-rounded">Button</button>
      </div>
      <div class="p-5">
        <button class="fl-btn fl-btn-rounded" disabled>Button</button>
      </div>
    </div>
  </div>

  <p>Tertiary</p>
  <div class="d-inline-block mb-5 border fl-border-grey-500">
    <div class="d-flex">
      <div class="p-5">
        <button class="fl-btn fl-btn-tertiary">Button</button>
      </div>
      <div class="p-5">
        <button class="fl-btn fl-btn-tertiary" disabled>Button</button>
      </div>
    </div>
  </div>

  <p>Button as a link</p>
  <div class="d-inline-block mb-5 border fl-border-grey-500">
    <div class="d-flex">
      <div class="p-5">
        <button class="fl-btn fl-btn-link">Button</button>
      </div>
      <div class="p-5">
        <button class="fl-btn fl-btn-link" disabled>Button</button>
      </div>
    </div>
  </div>

  <p>Link as a button</p>
  <div class="d-inline-block mb-5 border fl-border-grey-500">
    <div class="d-flex">
      <div class="p-5">
        <a href="#" class="fl-btn fl-btn-filled-green">Link</a>
      </div>
      <div class="p-5">
        <a class="fl-btn fl-btn-filled-green disabled">Link</a>
      </div>
    </div>
  </div>

  <p>Icon button</p>
  <div class="d-inline-block mb-5 border fl-border-grey-500">
    <div class="d-flex align-items-center">
      <div class="p-5">
        <button class="fl-btn">
          <img
            class="me-3"
            src="/src/assets/frank-and-live-styleguide/static/logos/logo--favicon--white--dotted.svg"
          />
          Connect
        </button>
      </div>
      <div class="p-5">
        <button class="fl-btn fl-btn-sm">
          <img
            class="me-3"
            style="height: 16px"
            src="/src/assets/frank-and-live-styleguide/static/logos/logo--favicon--white--dotted.svg"
          />
          Connect
        </button>
      </div>
    </div>
  </div>

  <h5>Button spinner</h5>
  <p><code>fl-btn-spinner</code> class while it is fetching</p>
  <div class="d-inline-block mb-5 border fl-border-grey-500">
    <div class="d-flex">
      <div class="p-5">
        <button class="fl-btn fl-btn-filled-white fl-btn-spinner">Button</button>
      </div>
      <div class="p-5">
        <button class="fl-btn fl-btn-spinner">Button</button>
      </div>
    </div>
  </div>
  <div></div>
  <div class="d-inline-block mb-5 border fl-border-grey-500">
    <div class="d-flex">
      <div class="p-5">
        <button class="fl-btn fl-btn-sm fl-btn-filled-white fl-btn-spinner">Button</button>
      </div>
      <div class="p-5">
        <button class="fl-btn fl-btn-sm fl-btn-spinner">Button</button>
      </div>
    </div>
  </div>
</template>
