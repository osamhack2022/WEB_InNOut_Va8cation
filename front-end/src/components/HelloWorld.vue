<template>
  <div id="app">
    <v-app id="inspire">
      <div>

        <v-app-bar color="blue" dense dark>
          <header class="Header js-details-container Details px-3 px-md-4 px-lg-5 flex-wrap flex-md-nowrap">
            <div class="Header-item mt-n1 mb-n1  d-none d-md-flex">
              <v-img src="@/assets/images/INNOUT_logo.svg" alt="In&Out Logo" contain height="32" width="32"></v-img>
            </div>


            <div class="Header-item">
              <a class="Header-link mt-md-n3 mb-md-n3 py-2 py-md-3 mr-0 mr-md-3 border-top border-md-top-0 border-white-fade">공지사항</a>
              <a class="Header-link mt-md-n3 mb-md-n3 py-2 py-md-3 mr-0 mr-md-3 border-top border-md-top-0 border-white-fade">용사출타현황</a>
              <a class="Header-link mt-md-n3 mb-md-n3 py-2 py-md-3 mr-0 mr-md-3 border-top border-md-top-0 border-white-fade">용사출타수정</a>
            </div>

            <span style="color:white; font-family:AppleSDGothicNeoEB">로그아웃</span>
          </header>

        </v-app-bar>
      </div>
    </v-app>
  </div>
</template>

<style>
@font-face {
  font-family: "AppleSDGothicNeoEB";
  src: url('@/assets/fonts/AppleSDGothicNeoEB.ttf') format('truetype');
  font-weight: 400;
}

.Header {
    z-index: 32;
    display: flex;
    padding: 16px;
    font-size: 14px;
    line-height: 1.5;
    color: var(--color-header-text);
    background-color: var(--color-header-bg);
    align-items: center;
    flex-wrap: nowrap;
}

.Header-item {
    display: flex;
    margin-right: 16px;
    align-self: stretch;
    align-items: center;
    flex-wrap: nowrap;
}

.Header-link {
    font-weight: 400;
    font-family: AppleSDGothicNeoEB;
    color: white;
    white-space: nowrap;
}
</style>

