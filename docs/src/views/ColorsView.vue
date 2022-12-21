<template>
  <h5>Color utility classes</h5>
  <p class="mb-5">
    <code>mf-fg-grey-500</code> for coloring foreground<br>
    <code>mf-bg-grey-500</code> for coloring background<br>
    <code>mf-border-grey-500</code> for coloring border<br>
  </p>
  <h5>Color utility vars</h5>
  <p class="mb-5">
    <code>var(--mf-color-grey-500)</code> in CSS<br>
  </p>

  <h5 class="my-3">Primary brand</h5>
  <div class="d-inline-block p-5 mb-5 border mf-border-grey-500">
    <div class="d-flex flex-wrap">
      <div class="color-circle mf-bg-money-blue-500 mf-fg-white">
        <h6>Money-blue 500</h6>
      </div>
      <div class="color-circle mf-bg-blue-light-500 mf-fg-white">
        <h6>Blue-light 500</h6>
      </div>
      <div class="color-circle mf-bg-turqouise-500">
        <h6>Turqouise 500</h6>
      </div>
      <div class="color-circle mf-bg-tangerine-500">
        <h6>Tangerine 500</h6>
      </div>
      <div class="color-circle mf-bg-beige-500">
        <h6>Beige 500</h6>
      </div>
      <div class="color-circle mf-bg-yellow-500">
        <h6>Yellow 500</h6>
      </div>
    </div>
  </div>

  <h5 class="my-3">Grey scale</h5>
  <div class="d-inline-block p-5 mb-5 border mf-border-grey-500">
    <div class="d-flex flex-wrap">
      <div class="color-circle border mf-border-black mf-bg-white">
        <h6>White</h6>
      </div>
      <div class="color-circle mf-bg-grey-100">
        <h6>Grey 100</h6>
      </div>
      <div class="color-circle mf-bg-grey-300">
        <h6>Grey 300</h6>
      </div>
      <div class="color-circle mf-bg-grey-500">
        <h6>Grey 500</h6>
      </div>
      <div class="color-circle mf-bg-grey-700 mf-fg-white">
        <h6>Grey 700</h6>
      </div>
      <div class="color-circle mf-bg-black mf-fg-white">
        <h6>Black</h6>
      </div>
    </div>
  </div>
  
  <h5 class="my-3">UI/Feedback</h5>
  <div class="d-inline-block p-5 mb-5 border mf-border-grey-500">
    <div class="d-flex flex-wrap">
      <div class="color-circle border mf-bg-green-300 mf-fg-white">
        <h6>Green 300</h6>
      </div>
      <div class="color-circle border mf-bg-green-700 mf-fg-white">
        <h6>Green 700</h6>
      </div>
      <div class="color-circle border mf-bg-orange-300 mf-fg-white">
        <h6>Orange 300</h6>
      </div>
      <div class="color-circle border mf-bg-orange-500 mf-fg-white">
        <h6>Orange 500</h6>
      </div>
      <div class="color-circle border mf-bg-orange-700 mf-fg-white">
        <h6>Orange 700</h6>
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
