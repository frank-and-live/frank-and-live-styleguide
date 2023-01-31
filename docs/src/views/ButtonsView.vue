<template>
  <h5 class="mb-3">Sizes</h5>
	<div class="d-inline-block mb-5 border fl-border-grey-500">
    <div class="d-flex align-items-center">
      <div class="p-5">
        <button class="fl-btn fl-btn-filled-blue">Regular</button>
      </div>
      <div class="p-5">
        <button class="fl-btn fl-btn-sm fl-btn-filled-blue">Small</button>
      </div>
    </div>
  </div>

  <h5>Variations</h5>
  <p>Filled white</p>
  <div class="d-inline-block mb-5 border fl-border-grey-500">
    <div class="d-flex">
      <div class="p-5 fl-bg-grey-300">
        <button class="fl-btn fl-btn-filled-white">Button</button>
      </div>
      <div class="p-5">
        <button class="fl-btn fl-btn-filled-white" disabled>Button</button>
      </div>
    </div>
  </div>

  <p>Filled blue</p>
  <div class="d-inline-block mb-5 border fl-border-grey-500">
    <div class="d-flex">
      <div class="p-5">
        <button class="fl-btn fl-btn-filled-blue">Button</button>
      </div>
      <div class="p-5">
        <button class="fl-btn fl-btn-filled-blue" disabled>Button</button>
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
        <a href="#" class="fl-btn fl-btn-filled-blue">Link</a>
      </div>
      <div class="p-5">
        <a class="fl-btn fl-btn-filled-blue disabled">Link</a>
      </div>
    </div>
  </div>

  <p>Icon button</p>
  <div class="d-inline-block mb-5 border fl-border-grey-500">
    <div class="d-flex align-items-center">
      <div class="p-5">
        <button class="fl-btn">
          <img class="me-3" src="https://style.moneyflow.dev/dist/static/logos/logo--favicon--white--dotted.svg">
          Connect
        </button>
      </div>
      <div class="p-5">
        <button class="fl-btn fl-btn-sm">
          <img class="me-3" style="height: 16px;" src="https://style.moneyflow.dev/dist/static/logos/logo--favicon--white--dotted.svg">
          Connect
        </button>
      </div>
    </div>
  </div>

  <h5>HTMX spinner</h5>
  <p>HTMX will add a <code>htmx-request</code> class while it is fetching</p>
  <div class="d-inline-block mb-5 border fl-border-grey-500">
    <div class="d-flex">
      <div class="p-5 fl-bg-grey-300">
        <button class="fl-btn fl-btn-filled-white htmx-request">Button</button>
      </div>
      <div class="p-5">
        <button class="fl-btn fl-btn-filled-blue htmx-request">Button</button>
      </div>
    </div>
  </div>
  <div class="d-inline-block mb-5 border fl-border-grey-500">
    <div class="d-flex">
      <div class="p-5 fl-bg-grey-300">
        <button class="fl-btn fl-btn-sm fl-btn-filled-white htmx-request">Button</button>
      </div>
      <div class="p-5">
        <button class="fl-btn fl-btn-sm fl-btn-filled-blue htmx-request">Button</button>
      </div>
    </div>
  </div>
</template>


