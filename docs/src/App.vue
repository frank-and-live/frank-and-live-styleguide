<template>
  <nav class="navbar navbar-expand-md p-3 px-5 fl-bg-white" style="z-index: 124">
    <div class="container-fluid">
      <div class="navbar-brand">
        <router-link class="d-block" to="/">
          <img
            class="w-auto"
            style="height: 30px"
            src="/src/assets/frank-and-live-styleguide/static/logos/logo_swifder.svg"
            alt="swifder"
          />
        </router-link>
      </div>
      <span class="flex-grow-1"></span>
      <button
        class="fl-btn fl-btn-link fl-fs-p d-md-none me-4 collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#sidebarMenu"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="show-collapsed"> Menu </span>
        <span class="hide-collapsed"> Close </span>
      </button>
    </div>
  </nav>
  <div class="container-fluid">
    <div class="row">
      <nav class="col-md-4 col-lg-3 col-xxl-2 collapse d-md-block fl-bg-white" id="sidebarMenu">
        <div class="pt-3 sidebar-sticky">
          <ul class="p-5 pt-3 fl-fs-p sidebar-menu">
            <li>
              <router-link to="/animations/">Animations</router-link>
            </li>
            <li>
              <router-link to="/badges/">Badges</router-link>
            </li>
            <li>
              <router-link to="/buttons/">Buttons</router-link>
            </li>
            <li>
              <router-link to="/checks/">Checks & radios</router-link>
            </li>
            <li>
              <router-link to="/colors/">Colors</router-link>
            </li>
            <li>
              <router-link to="/emailsignatures/">Email Signatures</router-link>
            </li>
            <li>
              <router-link to="/inputs/">Inputs</router-link>
            </li>
            <li>
              <router-link to="/logos/">Logos</router-link>
            </li>
            <li>
              <router-link to="/selects/">Selects</router-link>
            </li>
            <li>
              <router-link to="/shadows/">Shadows</router-link>
            </li>
            <li>
              <router-link to="/spacing/">Spacing</router-link>
            </li>
            <li>
              <router-link to="/tables/">Tables</router-link>
            </li>
            <li>
              <router-link to="/text/">Text</router-link>
            </li>
            <li>
              <router-link to="/textareas/">Textareas</router-link>
            </li>
          </ul>
        </div>
      </nav>
      <main class="col-md-8 col-lg-9 col-xxl-10 mt-5">
        <router-view />
      </main>
    </div>
  </div>
</template>

<style scoped>
.sidebar-sticky {
  position: sticky;
  top: 0;
  height: calc(100vh - 65px);
  overflow-x: hidden;
  overflow-y: auto;
}
ul.sidebar-menu {
  list-style: none;
}
ul.sidebar-menu li {
  position: relative;
  padding: 8px 0;
}
ul.sidebar-menu li a {
  text-decoration: none;
}
ul.sidebar-menu li a.active {
  color: var(--fl-color-green-500);
}
</style>
