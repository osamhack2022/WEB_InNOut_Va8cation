<template>
  <header>
    <nav class="navbar navbar-expand navbar-dark bg-dark py-3 px-4">
      <a class="navbar-brand" href="#">
        <img src="@/assets/images/logo_32_white.svg" width="32" height="32" alt="">
      </a>
      <div class="container-fluid">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/home" class="a nav-link">출타현황</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">휴가조회</a>
          </li>
          <li class="nav-item">
            <router-link to="/inputpoint" class="a nav-link">상점조회</router-link>
          </li>
        </ul>
        <div class="Header-item position-relative">
          <b-avatar class="me-2" variant="secondary" size="2rem"></b-avatar>
          <b-badge variant="secondary">용사</b-badge>       
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'AppHeader-soldier',
  };
</script>

<style scoped lang="scss">
</style>