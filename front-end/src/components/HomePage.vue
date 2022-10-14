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
          <div class="d-flex justify-content-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left"
              viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
            </svg>
            <h6 class="text-muted m-0 px-3">
              2022년 10월 10일 월요일
            </h6>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right"
              viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </div>
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
              <b-progress-bar :style="{ 'background-color': '#FF9754' }" :value="value_vacation_start"></b-progress-bar>
              <b-progress-bar :style="{ 'background-color': '#FF7262' }" :value="value_vacation_going"></b-progress-bar>
              <b-progress-bar :style="{ 'background-color': '#E84D65' }" :value="value_vacation_end"></b-progress-bar>
              <b-progress-bar :style="{ 'background-color': '#A259FF' }" :value="value_stayovn_start"></b-progress-bar>
              <b-progress-bar :style="{ 'background-color': '#6046E8' }" :value="value_stayovn_end"></b-progress-bar>
              <b-progress-bar :style="{ 'background-color': '#0ACF83' }" :value="value_outing"></b-progress-bar>
              <b-progress-bar :style="{ 'background-color': '#57606A' }" :value="value_etc"></b-progress-bar>
            </b-progress>
            <div class="px-0 pt-4 d-flex flex-column">
              <div class="mr-3">
                <svg :style="{'fill': '#FF9754'}" height="16" viewBox="0 0 16 16" width="16"
                  class="octicon octicon-dot-fill my-1 mr-2">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"></path>
                </svg>
                <span style="display:inline-block; width:72px;" class=mx-2><b>휴가 출발</b></span>
                <span>{{getValue(value_vacation_start)}}</span>
                <span v-for="item in vacation_start_list" v-bind:key="item" class="text-muted ms-2">{{item.rank+' '+item.name}}</span>
              </div>
              <div class="mr-3">
                <svg :style="{'fill': '#FF7262'}" height="16" viewBox="0 0 16 16" width="16"
                  class="octicon octicon-dot-fill my-1 mr-2">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"></path>
                </svg>
                <span style="display:inline-block; width:72px;" class=mx-2><b>휴가 중</b></span>
                <span>{{getValue(value_vacation_going)}}</span>
                <span v-for="item in vacation_going_list" v-bind:key="item" class="text-muted ms-2">{{item.rank+' '+item.name}}</span>
              </div>
              <div class="mr-3">
                <svg :style="{'fill': '#E84D65'}" height="16" viewBox="0 0 16 16" width="16"
                  class="octicon octicon-dot-fill my-1 mr-2">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"></path>
                </svg>
                <span style="display:inline-block; width:72px;" class=mx-2><b>휴가 복귀</b></span>
                <span>{{getValue(value_vacation_end)}}</span>
                <span v-for="item in vacation_end_list" v-bind:key="item" class="text-muted ms-2">{{item.rank+' '+item.name}}</span>
              </div>
              <div class="mr-3">
                <svg :style="{'fill': '#A259FF'}" height="16" viewBox="0 0 16 16" width="16"
                  class="octicon octicon-dot-fill my-1 mr-2">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"></path>
                </svg>
                <span style="display:inline-block; width:72px;" class=mx-2><b>외박 출발</b></span>
                <span>{{getValue(value_stayovn_start)}}</span>
                <span v-for="item in stayovn_start_list" v-bind:key="item" class="text-muted ms-2">{{item.rank+' '+item.name}}</span>
              </div>
              <div class="mr-3">
                <svg :style="{'fill': '#6046E8'}" height="16" viewBox="0 0 16 16" width="16"
                  class="octicon octicon-dot-fill my-1 mr-2">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"></path>
                </svg>
                <span style="display:inline-block; width:72px;" class=mx-2><b>외박 복귀</b></span>
                <span>{{getValue(value_stayovn_end)}}</span>
                <span v-for="item in stayovn_end_list" v-bind:key="item" class="text-muted ms-2">{{item.rank+' '+item.name}}</span>
              </div>
              <div class="mr-3">
                <svg :style="{'fill': '#0ACF83'}" height="16" viewBox="0 0 16 16" width="16"
                  class="octicon octicon-dot-fill my-1 mr-2">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"></path>
                </svg>
                <span style="display:inline-block; width:72px;" class=mx-2><b>외출</b></span>
                <span>{{getValue(value_outing)}}</span>
                <span v-for="item in outing_list" v-bind:key="item" class="text-muted ms-2">{{item.rank+' '+item.name}}</span>
              </div>
              <div class="mr-3">
                <svg :style="{'fill': '#57606A'}" height="16" viewBox="0 0 16 16" width="16"
                  class="octicon octicon-dot-fill my-1 mr-2">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"></path>
                </svg>
                <span style="display:inline-block; width:72px;" class=mx-2><b>기타</b></span>
                <span>{{getValue(value_etc)}}</span>
                <span v-for="item in etc_list" v-bind:key="item" class="text-muted ms-2">{{item.rank+' '+item.name}}</span>
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
      value_stayovn_start: 3,
      value_stayovn_end: 2,
      value_vacation_start: 5,
      value_vacation_going: 6,
      value_vacation_end: 3,
      value_etc: 2,
      max: 23,

      // 휴가 출발
      vacation_start_list: [
        { rank: '중위', name: '문선재' },
        { rank: '병장', name: '추시경' },
        { rank: '상병', name: '송우민' },
        { rank: '일병', name: '류서준' },
        { rank: '이병', name: '김지용' }
      ],

      // 휴가 중
      vacation_going_list: [
        { rank: '대위', name: '정선우' },
        { rank: '하사', name: '황현철' },
        { rank: '상병', name: '장주환' },
        { rank: '상병', name: '손원주' },
        { rank: '일병', name: '윤성호' },
        { rank: '이병', name: '신종현' }
      ],

      // 휴가 복귀
      vacation_end_list: [
        {rank: '소령', name: '김규연'},
        {rank: '소위', name: '고철순'},
        {rank: '병장', name: '박남규'},
      ],

      // 외박 출발
      stayovn_start_list: [
        {rank: '병장', name: '이동건'},
        {rank: '상병', name: '최장규'},
        {rank: '일병', name: '김민겸'},
      ],

      // 외박 복귀
      stayovn_end_list: [
        {rank: '병장', name: '김남우'},
        {rank: '일병', name: '정철민'},
        {rank: '일병', name: '민규성'},
      ],

      // 외출 
      outing_list:[
        {rank: '상병', name: '김노을'},
        {rank: '상병', name: '최장규'},
        {rank: '일병', name: '정찬민'},
        {rank: '이병', name: '이정호'}
      ],

      // 기타
      etc_list: [
        {rank: '상병', name: '류민철'},
        {rank: '일병', name: '강건호'}
      ],
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