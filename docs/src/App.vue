<script setup lang="ts">

// import 'bootstrap/js/dist/offcanvas.js'
// import 'bootstrap/js/dist/dropdown.js'

</script>

<template>
  <div class="d-flex flex-column min-vh-100;">
    <header class="d-flex align-items-center p-3 px-5 fl-bg-white">
      <router-link class="d-block" to="/">
        <img
          class="w-auto"
          style="height: 30px"
          src="/src/assets/frank-and-live-styleguide/dist/static/logos/logo.svg"
          alt="FRANK & LIVE"
        />
      </router-link>
      <p class="m-0 ms-3">
        Styleguide
      </p>
    </header>
    <div class="row flex-grow-1 p-5">
      <aside class="col-3">
        <nav>
          <ul class="docs-menu">
            <li class="mb-2">
              <router-link to="/animations/">Animations</router-link>
            </li>
            <li class="mb-2">
              <router-link to="/badges/">Badges</router-link>
            </li>
            <li class="mb-2">
              <router-link to="/buttons/">Buttons</router-link>
            </li>
            <li class="mb-2">
              <router-link to="/checks/">Checks & radios</router-link>
            </li>
            <li class="mb-2">
              <router-link to="/colors/">Colors</router-link>
            </li>
            <li class="mb-2">
              <router-link to="/inputs/">Inputs</router-link>
            </li>
            <li class="mb-2">
              <router-link to="/logos/">Logos</router-link>
            </li>
            <li class="mb-2">
              <router-link to="/selects/">Selects</router-link>
            </li>
            <li class="mb-2">
              <router-link to="/shadows/">Shadows</router-link>
            </li>
            <li class="mb-2">
              <router-link to="/spacing/">Spacing</router-link>
            </li>
            <li class="mb-2">
              <router-link to="/tables/">Tables</router-link>
            </li>
            <li class="mb-2">
              <router-link to="/text/">Text</router-link>
            </li>
            <li class="mb-2">
              <router-link to="/textareas/">Textareas</router-link>
            </li>
          </ul>
          <div class="flex-fill"></div>
          <div class="dropdown text-end">
            <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle">
            </a>
            <ul class="dropdown-menu text-small" style="">
              <li><a class="dropdown-item" href="#">New project...</a></li>
              <li><a class="dropdown-item" href="#">Settings</a></li>
              <li><a class="dropdown-item" href="#">Profile</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Sign out</a></li>
            </ul>
          </div>
        </nav>
      </aside>
      <main class="col-9 col-xxl-8"><router-view /></main>
    </div>
  </div>
</template>

<style scoped>
.docs-menu {
  list-style: none;
  margin: 0;
  padding: 0;
}
.docs-menu a {
  font-size: 24px;
  text-decoration: none;
}

.docs-menu a.active {
  color: var(--fl-color-green-500);
}
</style>
