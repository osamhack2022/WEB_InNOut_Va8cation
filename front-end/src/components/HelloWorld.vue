
<template>
  <header>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
    <a class="navbar-brand" href="#">
      <img src="@/assets/images/logo_32_white.svg" width="32" height="32" alt="">
    </a>
    <div class="container-fluid">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">메인<span class="sr-only"></span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">용사출타현황</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">용사출타수정</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">기본설정</a>
        </li>
      </ul>
      <b-avatar variant="secondary" size="2rem"></b-avatar>
    </div>
  </nav>
  </header>
  <div>
    <b-card title="Card title" sub-title="Card subtitle">
      <b-card-text>
        Some quick example text to build on the <em>card title</em> and make up the bulk of the card's
        content.
      </b-card-text>

      <b-card-text>A second paragraph of text in the card.</b-card-text>

      <a href="#" class="card-link">Card link</a>
      <b-link href="#" class="card-link">Another link</b-link>
    </b-card>
  </div>
</template>


<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>
