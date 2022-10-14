<template>
  <header>
    <nav class="navbar navbar-expand navbar-dark bg-dark py-3 px-4">
      <a class="navbar-brand" href="#">
        <img src="@/assets/images/logo_32_white.svg" width="32" height="32" alt="">
      </a>
      <div class="container-fluid">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">홈<span class="sr-only"></span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">출타현황</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">휴가/상점입력</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">휴가/상점현황</a>
          </li>
        </ul>
        <div class="Header-item position-relative">
          <b-avatar variant="secondary" size="2rem"></b-avatar>
          <a :style="{color:'white'}" class="ps-2">간부</a>
        </div>
      </div>
    </nav>
  </header>
  <div class="container-fluid col-8">
    <main>
      <div>
        <div class="headline p-4">
          <h1>
            <b>5678부대</b>
          </h1>
          <h6 class="text-muted">
            2022년 10월 10일 월요일
          </h6>
        </div>

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
            <b-progress class="mt-2" :max="max">
              <b-progress-bar :style="{ 'background-color': '#FF7262' }" :value="value_vacation"></b-progress-bar>
              <b-progress-bar :style="{ 'background-color': '#A259FF' }" :value="value_stayovn"></b-progress-bar>
              <b-progress-bar :style="{ 'background-color': '#34AFF7' }" :value="value_outing"></b-progress-bar>
            </b-progress>
            <div class="px-0 pt-4 d-flex flex-column">
              <div class="mr-3">
                <svg :style="{'fill': '#FF7262'}" height="16" viewBox="0 0 16 16" width="16"
                  class="octicon octicon-dot-fill my-1 mr-2">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"></path>
                </svg>
                <span class=mx-2>휴가</span>
                <span>{{getValue(value_vacation)}}</span>
              </div>
              <div class="mr-3">
                <svg :style="{'fill': '#A259FF'}" height="16" viewBox="0 0 16 16" width="16"
                  class="octicon octicon-dot-fill my-1 mr-2">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"></path>
                </svg>
                <span class=mx-2>외박</span>
                <span>{{getValue(value_stayovn)}}</span>
              </div>
              <div class="mr-3">
                <svg :style="{'fill': '#34AFF7'}" height="16" viewBox="0 0 16 16" width="16"
                  class="octicon octicon-dot-fill my-1 mr-2">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"></path>
                </svg>
                <span class=mx-2>외출</span>
                <span>{{getValue(value_outing)}}</span>
              </div>
            </div>
          </b-card>
        </div>
      </div>
    </main>
  </div>
</template>


<script>
export default {
  name: "HomePage",
  data() {
    return {
      value_outing: 4,
      value_stayovn: 5,
      value_vacation: 14,
      max: 23
    }
  },
  props: {
    msg: String,
  },
  methods: {
    getValue: function (value) {
      return value
    }
  }
};
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
}

.headline {
  text-align: center;
  // h3 > b {color: $color-secondary-orange;}
}
</style>