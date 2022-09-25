<template>
  <div id="app">
    <v-app id="inspire">
      <div>

        <v-app-bar color="blue" dense dark>

          <v-container>
              <div class="d-flex align-center">
                <v-img src="@/assets/images/INNOUT_logo.svg" alt="In&Out Logo" contain height="32" width="32"></v-img>
                <span style="color:white; font-family:AppleSDGothicNeoEB">공지사항</span>
                <span style="color:white; font-family:AppleSDGothicNeoEB">용사출타현황</span>
                <span style="color:white; font-family:AppleSDGothicNeoEB">용사출타변경</span>
                <v-spacer></v-spacer>
                <span style="color:white; font-family:AppleSDGothicNeoEB">로그아웃</span>
              </div>
          </v-container>

        </v-app-bar>
      </div>
    </v-app>
  </div>
</template>

<style>
@font-face {
  font-family: "AppleSDGothicNeoEB";
  src: url('../assets/fonts/AppleSDGothicNeoEB.ttf') format('truetype');
  font-weight: 400;
}
</style>

