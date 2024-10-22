<template>
  <h5>Color utility classes</h5>
  <p class="mb-5">
    <code>fl-fg-grey-500</code> for coloring foreground<br>
    <code>fl-bg-grey-500</code> for coloring background<br>
    <code>fl-border-grey-500</code> for coloring border<br>
  </p>
  <h5>Color utility vars</h5>
  <p class="mb-5">
    <code>var(--fl-color-grey-500)</code> in CSS<br>
  </p>

  <h5 class="my-3">Primary brand</h5>
  <div class="d-inline-block p-5 mb-5 border fl-border-grey-500">
    <div class="d-flex flex-wrap">
      <div class="color-circle fl-bg-brown-500 fl-fg-white">
        <h6>Brown 500</h6>
      </div>
      <div class="color-circle fl-bg-red-100 fl-fg-white">
        <h6>Red 100</h6>
      </div>
      <div class="color-circle fl-bg-red-500 fl-fg-white">
        <h6>Red 500</h6>
      </div>
      <div class="color-circle fl-bg-red-700 fl-fg-white">
        <h6>Red 700</h6>
      </div>
      <div class="color-circle fl-bg-pink-500">
        <h6>Pink 500</h6>
      </div>
      <div class="color-circle fl-bg-yellow-500">
        <h6>Yellow 500</h6>
      </div>
      <div class="color-circle fl-bg-beige-500 border fl-border-black">
        <h6>Beige 500</h6>
      </div>
    </div>
  </div>
    
  <h5 class="my-3">UI/Feedback</h5>
  <div class="d-inline-block p-5 mb-5 border fl-border-grey-500">
    <div class="d-flex flex-wrap">
      <div class="color-circle fl-bg-green-500">
        <h6>Green 500</h6>
      </div>
      <div class="color-circle border fl-bg-orange-500 fl-fg-white">
        <h6>Orange 500</h6>
      </div>
    </div>
  </div>

  <h5 class="my-3">Grey scale</h5>
  <div class="d-inline-block p-5 mb-5 border fl-border-grey-500">
    <div class="d-flex flex-wrap">
      <div class="color-circle border fl-border-black fl-bg-white">
        <h6>White</h6>
      </div>
      <div class="color-circle fl-bg-grey-100">
        <h6>Grey 100</h6>
      </div>
      <div class="color-circle fl-bg-grey-300">
        <h6>Grey 300</h6>
      </div>
      <div class="color-circle fl-bg-grey-500">
        <h6>Grey 500</h6>
      </div>
      <div class="color-circle fl-bg-grey-700 fl-fg-white">
        <h6>Grey 700</h6>
      </div>
      <div class="color-circle fl-bg-black fl-fg-white">
        <h6>Black</h6>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .color-circle {
    margin: 4px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
    border-radius: 50%; 
  }
  .color-circle h6 {
    margin: 0;
    padding: 0; 
  }
</style>
