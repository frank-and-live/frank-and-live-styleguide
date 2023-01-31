<template>
  <h5>Auto play</h5>
  <div class="d-inline-block mb-5 border fl-border-grey-500 fl-bg-white overflow-hidden position-relative">
    
    <lottie-player
      preserveAspectRatio="xMidYMid slice"
      autoplay
      loop
      src="https://style.moneyflow.dev/dist/static/animations/success-confetti.json"
      class="position-absolute"
      >
    </lottie-player>

    <div class="p-5 position-relative">
      <h4>Success</h4>
      <p>New frontend skill unlocked!</p>
      <button class="fl-btn fl-btn-sm fl-btn-filled-blue float-end mb-5">Affirmative</button>
    </div>

  </div>

  <h5>Interactivity</h5>
  <div class="d-inline-block mb-5 border fl-border-grey-500">
    <div class="d-flex align-items-center">
      <div class="p-5">
        <p>Hover the eye</p>
      </div>
      <div class="p-5">
        <lottie-player id="eye-opening"
          ref="lottie"
          src="/src/assets/frank-and-live-styleguide/dist/static/animations/eye-opening.json"
          style="width: 320px; height: 200px;"
        >
        </lottie-player>
      </div>
    </div>
  </div>

  <h5>GIF animations</h5>
  <div class="d-inline-block mb-5 border fl-border-grey-500">
    <div class="d-flex align-items-center">
      <img src="/src/assets/frank-and-live-styleguide/dist/static/animations/big-spinner.gif" />
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import * as LottiePlayer from '@lottiefiles/lottie-player'
  import { create } from '@lottiefiles/lottie-interactivity'

  const lottie = ref(null)
  
  onMounted(() => {
    lottie.value.addEventListener('load', function() {
      create({
        player: '#eye-opening',
        mode: "cursor",
        actions: [
          {
            type: "hover",
            forceFlag: false
          }
        ],
      })
    })
  })
</script>