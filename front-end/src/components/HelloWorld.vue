<template>
  <header>
    <nav class="navbar navbar-expand navbar-dark bg-dark py-3 px-4">
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
  <div class="container-fluid col-8">
    <main>
      <div>
        <h1 class="mt-4">
          <b>5678부대</b>
        </h1>
        <h6 class="text-muted mb-4">
          2022년 10월 10일 월요일
        </h6>
        <b-card-group deck>
          <b-card class="shadow">
            <div class="container-fluid p-0 d-flex justify-content-between">
              <b-card-text class="m-0">총원</b-card-text>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-three-dots" viewBox="0 0 16 16">
                <path
                  d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
              </svg>
            </div>
            <b-card-text class="text-primary fs-3">
              <b>157</b>
            </b-card-text>
          </b-card>
          <b-card class="shadow">
            <div class="container-fluid p-0 d-flex justify-content-between">
              <b-card-text class="my-0">열외</b-card-text>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-three-dots" viewBox="0 0 16 16">
                <path
                  d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
              </svg>
            </div>
            <b-card-text class="text-danger fs-3">
              <b>23</b>
            </b-card-text>
          </b-card>
          <b-card class="shadow">
            <div class="container-fluid p-0 d-flex justify-content-between">
              <b-card-text class="my-0">현재원</b-card-text>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-three-dots" viewBox="0 0 16 16">
                <path
                  d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
              </svg>
            </div>

            <b-card-text class="text-success fs-3">
              <b>134</b>
            </b-card-text>
          </b-card>
          <b-card class="shadow">
            <div class="container-fluid p-0 d-flex justify-content-between">
              <b-card-text class="my-0">출타율</b-card-text>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-three-dots" viewBox="0 0 16 16">
                <path
                  d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
              </svg>
            </div>

            <b-card-text class="text-warning fs-3">
              <b>26%</b>
            </b-card-text>
          </b-card>
        </b-card-group>
        <div class="mt-3">
          <b-card class="shadow">
            <div class="container-fluid p-0 d-flex justify-content-between">
              <b-card-text class="my-0">열외내용</b-card-text>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-three-dots" viewBox="0 0 16 16">
                <path
                  d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
              </svg>
            </div>
            <b-card-text class="text-warning fs-3">
              <b>26%</b>
            </b-card-text>
          </b-card>
        </div>
      </div>
    </main>
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
