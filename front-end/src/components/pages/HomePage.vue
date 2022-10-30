<template>                                                        <!--홈페이지(출타현황조회)-->
  <div v-if="level == 'soldier'">
    <AppHeader-soldier />
  </div>
  <div v-if="level == 'admin'">
    <AppHeader-admin />
  </div>
  <div v-if="level == 'officer'">
    <AppHeader />
  </div>
  <div class="container-fluid col-8">

    <main>
      <div>
        <div class="headline p-4">
          <h1 :key="date_component_key">
            <Base v-model="basenum">                                <!-- 부대 번호 출력 -->
            </Base>
            <div class="result">
              <b>{{ basenum }}</b>
            </div>
            <Base v-model="changed_date" :key="date_component_key"> <!-- 현재 조회하고 있는 날짜 출력-->
            </Base>
            <div class="result text-muted mt-4">
              <h4>{{ changed_date }}</h4>                           
            </div>            
          </h1>

          <div class="d-flex justify-content-center align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi bi-chevron-left me-4" viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
            </svg>
            <input class="form-control form-control" v-model='wishdate' type="date" ref="date">                         <!-- 조회하고자 하는 날짜 데이트피커 설정 -->
            <button type="submit" v-on:click="setDate" class="btn btn-primary btn-block ms-2"><b>날짜설정</b></button>
            <!--<h6 class="text-muted m-0 px-3">
              {{ondate}}
            </h6>-->
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi bi-chevron-right ms-4" viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </div>
        </div>

        <b-card-group deck>                                                     <!-- 총원, 열외, 현재원 명수 출력-->
          <b-card class="shadow">
            <div class="container-fluid p-0 d-flex justify-content-between">
              <b-card-text class="m-0">총원</b-card-text>
            </div>
            <b-card-text class="text-primary fs-3">
              <b>{{ total_num }}</b>
            </b-card-text>
          </b-card>
          <b-card class="shadow">
            <div class="container-fluid p-0 d-flex justify-content-between">
              <b-card-text class="my-0">열외</b-card-text>
            </div>
            <b-card-text class="text-danger fs-3">
              <b>{{ out_num }}</b>
            </b-card-text>
          </b-card>
          <b-card class="shadow">
            <div class="container-fluid p-0 d-flex justify-content-between">
              <b-card-text class="my-0">현재원</b-card-text>
            </div>
            <b-card-text class="text-success fs-3">
              <b>{{ current_num }}</b>
            </b-card-text>
          </b-card>
        </b-card-group>

        <div class="mt-3">
          <b-card class="shadow">
            <div class="container-fluid p-0 d-flex justify-content-between">
              <b-card-text class="my-0">열외내용</b-card-text>
            </div>
            <b-progress class="mt-2" :max=out_num :key="max_component_key">                                       <!--열외내용 디자인 폼-->
              <b-progress-bar :style="{ 'background-color': '#FF9754' }" :value="value_vacation_start">휴가복귀
              </b-progress-bar>
              <b-progress-bar :style="{ 'background-color': '#FF7262' }" :value="value_vacation_going">휴가 중
              </b-progress-bar>
              <b-progress-bar :style="{ 'background-color': '#E84D65' }" :value="value_vacation_end">휴가 복귀
              </b-progress-bar>
              <b-progress-bar :style="{ 'background-color': '#A259FF' }" :value="value_stayovn_start">외박출발
              </b-progress-bar>
              <b-progress-bar :style="{ 'background-color': '#6046E8' }" :value="value_stayovn_end">외박복귀
              </b-progress-bar>
              <b-progress-bar :style="{ 'background-color': '#0ACF83' }" :value="value_outing">외출
              </b-progress-bar>
              <b-progress-bar :style="{ 'background-color': '#57606A' }" :value="value_etc">기타
              </b-progress-bar>
            </b-progress>
            <div class="px-0 pt-4 d-flex flex-column">                                                            <!--각 열외내용 인원 계급 성명 출력-->
              <div class="mr-3">
                <svg :style="{ 'fill': '#FF9754' }" height="16" viewBox="0 0 16 16" width="16"
                  class="octicon octicon-dot-fill my-1 mr-2">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"></path>
                </svg>
                <span style="display:inline-block; width:72px;" class=mx-2><b>휴가 출발</b></span>
                <span>{{ getValue(value_vacation_start) }}</span>
                <span v-for="item in vacation_start_list" v-bind:key="item" class="text-muted ms-2">
                  <img :src="require(`@/assets/images/ranks/${item.rank}.svg`)" width="18" height="18" alt="">
                  {{ ' ' + item.name }}
                </span>
              </div>
              <div class="mr-3">
                <svg :style="{ 'fill': '#FF7262' }" height="16" viewBox="0 0 16 16" width="16"
                  class="octicon octicon-dot-fill my-1 mr-2">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"></path>
                </svg>
                <span style="display:inline-block; width:72px;" class=mx-2><b>휴가 중</b></span>
                <span>{{ getValue(value_vacation_going) }}</span>
                <span v-for="item in vacation_going_list" v-bind:key="item" class="text-muted ms-2">
                  <img :src="require(`@/assets/images/ranks/${item.rank}.svg`)" width="18" height="18" alt="">
                  {{ ' ' + item.name }}
                </span>
              </div>
              <div class="mr-3">
                <svg :style="{ 'fill': '#E84D65' }" height="16" viewBox="0 0 16 16" width="16"
                  class="octicon octicon-dot-fill my-1 mr-2">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"></path>
                </svg>
                <span style="display:inline-block; width:72px;" class=mx-2><b>휴가 복귀</b></span>
                <span>{{ getValue(value_vacation_end) }}</span>
                <span v-for="item in vacation_end_list" v-bind:key="item" class="text-muted ms-2">
                  <img :src="require(`@/assets/images/ranks/${item.rank}.svg`)" width="18" height="18" alt="">
                  {{ ' ' + item.name }}
                </span>
              </div>
              <div class="mr-3">
                <svg :style="{ 'fill': '#A259FF' }" height="16" viewBox="0 0 16 16" width="16"
                  class="octicon octicon-dot-fill my-1 mr-2">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"></path>
                </svg>
                <span style="display:inline-block; width:72px;" class=mx-2><b>외박 출발</b></span>
                <span>{{ getValue(value_stayovn_start) }}</span>
                <span v-for="item in stayovn_start_list" v-bind:key="item" class="text-muted ms-2">
                  <img :src="require(`@/assets/images/ranks/${item.rank}.svg`)" width="18" height="18" alt="">
                  {{ ' ' + item.name }}
                </span>
              </div>
              <div class="mr-3">
                <svg :style="{ 'fill': '#6046E8' }" height="16" viewBox="0 0 16 16" width="16"
                  class="octicon octicon-dot-fill my-1 mr-2">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"></path>
                </svg>
                <span style="display:inline-block; width:72px;" class=mx-2><b>외박 복귀</b></span>
                <span>{{ getValue(value_stayovn_end) }}</span>
                <span v-for="item in stayovn_end_list" v-bind:key="item" class="text-muted ms-2">
                  <img :src="require(`@/assets/images/ranks/${item.rank}.svg`)" width="18" height="18" alt="">
                  {{ ' ' + item.name }}
                </span>
              </div>
              <div class="mr-3">
                <svg :style="{ 'fill': '#0ACF83' }" height="16" viewBox="0 0 16 16" width="16"
                  class="octicon octicon-dot-fill my-1 mr-2">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"></path>
                </svg>
                <span style="display:inline-block; width:72px;" class=mx-2><b>외출</b></span>
                <span>{{ getValue(value_outing) }}</span>
                <span v-for="item in outing_list" v-bind:key="item" class="text-muted ms-2">
                  <img :src="require(`@/assets/images/ranks/${item.rank}.svg`)" width="18" height="18" alt="">
                  {{ ' ' + item.name }}</span>
              </div>
              <div class="mr-3">
                <svg :style="{ 'fill': '#57606A' }" height="16" viewBox="0 0 16 16" width="16"
                  class="octicon octicon-dot-fill my-1 mr-2">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"></path>
                </svg>
                <span style="display:inline-block; width:72px;" class=mx-2><b>기타</b></span>
                <span>{{ getValue(value_etc) }}</span>
                <span v-for="item in etc_list" v-bind:key="item" class="text-muted ms-2">
                  <img :src="require(`@/assets/images/ranks/${item.rank}.svg`)" width="18" height="18" alt="">
                  {{ ' ' + item.name }}
                </span>
              </div>
            </div>
          </b-card>
        </div>
      </div>
    </main>
  </div>
</template>


<script>

//import { ref } from 'vue'
import AppHeader from '@/components/AppHeader';
// eslint-disable-next-line no-unused-vars
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getDatabase, set, ref, get, child, onValue } from "firebase/database"


export default {
  name: "HomePage",
  components: {
    AppHeader,
  },
  data() {                                            // 사용되는 변수들
    return {
      wishdate: null,
      value_outing: 0,
      value_stayovn_start: 0,
      value_stayovn_end: 0,
      value_vacation_start: 0,
      value_vacation_going: 0,
      value_vacation_end: 0,
      value_etc: 0,
      total_num: 0,
      out_num: 0,
      current_num: 0,
      max: 0,
      basenum: '',
      sum_value: 0,
      max_component_key: 0,
      /* 계급 (영문명)
      이병 : PVT, 일병 : PFC, 상병 : CPL, 병장 : SGT
      하사 : SSG, 중사 : SFC, 상사 : FSG, 원사 : SGM
      소위 : 2LT, 중위 : 1LT, 대위 : CPT
      소령 : MAJ, 중령 : LCL, 대령 : COL
      */
      // 휴가 출발
      vacation_start_list: [],
      // 휴가 중
      vacation_going_list: [],
      // 휴가 복귀
      vacation_end_list: [],
      // 외박 출발
      stayovn_start_list: [],
      // 외박 복귀
      stayovn_end_list: [],
      // 외출 
      outing_list: [],
      // 기타
      etc_list: [],
      todate: '',
      date_component_key: 0,
      changed_date: '',
    };
  },
  created() {
    var uid = (firebase.auth().currentUser.uid)

    async function getlevelpromise() {                              //계정레벨에 따른 헤더 출력 변화를 위한 계정레벨 획득 부분
      try {
        const db = ref(getDatabase())
        const snapshot = await get(child(db, `user/${uid}/level`));
        if (snapshot.exists()) {
          
          const level = snapshot.val()
          return level;
        }
        else {
          console.log("No data available");
        }
      } catch (error) {
        console.error(error);
      }
    }

    getlevelpromise().then((level) => {
      
      this.level = level
    })


  



  },
  mounted() {
    var uid = (firebase.auth().currentUser.uid)

    async function getpromise() {                                   // 부대번호 획득 부분
      try {
        const db = ref(getDatabase())
        const snapshot = await get(child(db, `user/${uid}/base`));
        if (snapshot.exists()) {
          
          const base = snapshot.val()
          return base;
        }
        else {
          console.log("No data available");
        }
      } catch (error) {
        console.error(error);
      }
    }

    getpromise().then((base) => {
      this.basenum = base + '부대'
    })


    //오늘날짜 구하는 메소드
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var date = today.getDate();

    var wishdate = year + '-' + month + '-' + date
    

    async function getbase() {
      try {
        const db = ref(getDatabase())
        const snapshot = await get(child(db, `user/${uid}/base`));
        if (snapshot.exists()) {
          //console.log(snapshot.val());
          const base = snapshot.val()
          return base;
        }
        else {
          console.log("No data available");
        }
      } catch (error) {
        console.error(error);
      }
    }





    async function get_wishdate_vacstart(base = getbase()) {                                      //휴가 시작 인원 배열 획득
        try {
          const db = ref(getDatabase())
          const snapshot = await get(child(db, `base/${base}/dashboard/bydate/${wishdate}/vacation_start/`));
          
          if (snapshot.exists()) {
            //console.log(snapshot.val());
            const arr = snapshot.val()
            return arr;
          }
          else {
            console.log("No data available");
          }
        } catch (error) {
          console.error(error);
        }
      }

      getbase().then((base) => {                                                                  //비동기 처리로 얻은 배열 인원수 획득 및 리스트 획득
        get_wishdate_vacstart(base).then((arr) => {
          //console.log(arr)
          if (arr != null) {
            var vacstart = Object.values(arr)
          }
          else {
            var vacstart = []
          }
          
          this.vacation_start_list = vacstart
          this.value_vacation_start = vacstart.length
          this.sum_value += vacstart.length
        })
      })
      ////////////////////////////////////////////////////////////
      async function get_wishdate_vacgoing(base = getbase()) {                                    //휴가 중 인원 배열 획득
        try {
          const db = ref(getDatabase())
          const snapshot = await get(child(db, `base/${base}/dashboard/bydate/${wishdate}/vacation_going/`));
          
          if (snapshot.exists()) {
            //console.log(snapshot.val());
            const arr = snapshot.val()
            return arr;
          }
          else {
            console.log("No data available");
          }
        } catch (error) {
          console.error(error);
        }
      }

      getbase().then((base) => {
        get_wishdate_vacgoing(base).then((arr) => {
          //console.log(arr)
          if (arr != null) {
            var vacgoing = Object.values(arr)
          }
          else {
            var vacgoing = []
          }
          
          this.vacation_going_list = vacgoing
          this.value_vacation_going = vacgoing.length
          this.sum_value += vacgoing.length
        })
      })
      ////////////////////////////////////////////////////////////
      async function get_wishdate_vacend(base = getbase()) {                                      //휴가 종료 인원 배열 획득
        try {
          const db = ref(getDatabase())
          const snapshot = await get(child(db, `base/${base}/dashboard/bydate/${wishdate}/vacation_end/`));
          
          if (snapshot.exists()) {
            //console.log(snapshot.val());
            const arr = snapshot.val()
            return arr;
          }
          else {
            console.log("No data available");
          }
        } catch (error) {
          console.error(error);
        }
      }

      getbase().then((base) => {
        get_wishdate_vacend(base).then((arr) => {
          //console.log(arr)
          if (arr != null) {
            var vacend = Object.values(arr)
          }
          else {
            var vacend = []
          }

          
          this.vacation_end_list = vacend
          this.value_vacation_end = vacend.length
          this.sum_value += vacend.length
        })
      })
      ////////////////////////////////////////////////////////////
      async function get_wishdate_outing(base = getbase()) {                              //외출 인원 배열 획득
        try {
          const db = ref(getDatabase())
          const snapshot = await get(child(db, `base/${base}/dashboard/bydate/${wishdate}/outing/`));
          
          if (snapshot.exists()) {
            //console.log(snapshot.val());
            const arr = snapshot.val()
            return arr;
          }
          else {
            console.log("No data available");
          }
        } catch (error) {
          console.error(error);
        }
      }

      getbase().then((base) => {
        get_wishdate_outing(base).then((arr) => {
          //console.log(arr)
          if (arr != null) {
            var outing = Object.values(arr)
          }
          else {
            var outing = []
          }

          
          this.outing_list = outing
          this.value_outing = outing.length
          this.sum_value += outing.length
        })
      })
      ////////////////////////////////////////////////////////////
      async function get_wishdate_staystart(base = getbase()) {                             //외박 시작 인원 배열 획득
        try {
          const db = ref(getDatabase())
          const snapshot = await get(child(db, `base/${base}/dashboard/bydate/${wishdate}/stayovn_start/`));
          
          if (snapshot.exists()) {
            //console.log(snapshot.val());
            const arr = snapshot.val()
            return arr;
          }
          else {
            console.log("No data available");
          }
        } catch (error) {
          console.error(error);
        }
      }

      getbase().then((base) => {
        get_wishdate_staystart(base).then((arr) => {
          //console.log(arr)
          if (arr != null) {
            var staystart = Object.values(arr)
          }
          else {
            var staystart = []
          }

          
          this.stayovn_start_list = staystart
          this.value_stayovn_start = staystart.length
          this.sum_value += staystart.length
        })
      })
      ////////////////////////////////////////////////////////////
      async function get_wishdate_stayend(base = getbase()) {                               //외박 종료 인원 배열 획득
        try {
          const db = ref(getDatabase())
          const snapshot = await get(child(db, `base/${base}/dashboard/bydate/${wishdate}/stayovn_end/`));
          
          if (snapshot.exists()) {
            //console.log(snapshot.val());
            const arr = snapshot.val()
            return arr;
          }
          else {
            console.log("No data available");
          }
        } catch (error) {
          console.error(error);
        }
      }

      getbase().then((base) => {
        get_wishdate_stayend(base).then((arr) => {
          //console.log(arr)
          if (arr != null) {
            var stayend = Object.values(arr)
          }
          else {
            var stayend = []
          }

          
          this.stayovn_end_list = stayend
          this.value_stayovn_end = stayend.length
          this.sum_value += stayend.length
        })
      })
      ////////////////////////////////////////////////////////////
      async function get_wishdate_etc(base = getbase()) {                             //기타 출타 인원 배열 획득
        try {
          const db = ref(getDatabase())
          const snapshot = await get(child(db, `base/${base}/dashboard/bydate/${wishdate}/etc/`));
          
          if (snapshot.exists()) {
            //console.log(snapshot.val());
            const arr = snapshot.val()
            return arr;
          }
          else {
            console.log("No data available");
          }
        } catch (error) {
          console.error(error);
        }
      }

      getbase().then((base) => {
        get_wishdate_etc(base).then((arr) => {
          //console.log(arr)
          if (arr != null) {
            var etc = Object.values(arr)
            
          }
          else {
            var etc = []
          }
          
          this.etc_list = etc
          this.value_etc = etc.length
          this.sum_value += etc.length
        })
      })
      ////////////////////////////////////////////////////////////
      async function get_totalnum(base = getbase()) {                             //총원 수 획득
        try {
          const db = ref(getDatabase())
          const snapshot = await get(child(db, `base/${base}/byuser/`));
          
          if (snapshot.exists()) {
            //console.log(snapshot.val());
            const arr = snapshot.val()
            return arr;
          }
          else {
            console.log("No data available");
          }
        } catch (error) {
          console.error(error);
        }
      }

      getbase().then((base) => {
        get_totalnum(base).then((arr) => {
          //console.log(arr)
          if (arr != null) {
            var total = Object.values(arr)
            
          }
          else {
            var total = []
          }
          
          this.total_num = total.length
        })
      })
                                                                                                                    //열외, 총원, 상단 표시 날짜 변경을 위한 시간 지연 메소드
      setTimeout(() => this.out_num = this.value_outing + this.value_stayovn_start + this.value_stayovn_end +                       
        this.value_vacation_start + this.value_vacation_going + this.value_vacation_end + this.value_etc, 900)
      setTimeout(() => console.log("열외" + this.out_num), 910 )
      setTimeout(() => this.current_num = this.total_num - this.out_num, 910)
      setTimeout(() => console.log("현재원" + this.current_num), 920 )
      setTimeout(() => this.max_component_key += 1, 920)
      setTimeout(() => this.date_component_key += 1, 970)
      setTimeout(() => this.changed_date = wishdate, 1000)
  },

  props: {
    msg: String,
  },

  methods: {
    getValue: function (value) {
      return value;
    },

    setDate() {                                                                     //데이트 피커로 얻은 날짜로 해당 날짜의 출타 인원 조회하는 메소드
      var uid = (firebase.auth().currentUser.uid)
      var todate = this.wishdate
      async function getbase() {
        try {
          const db = ref(getDatabase())
          const snapshot = await get(child(db, `user/${uid}/base`));
          if (snapshot.exists()) {
            //console.log(snapshot.val());
            const base = snapshot.val()
            return base;
          }
          else {
            console.log("No data available");
          }
        } catch (error) {
          console.error(error);
        }
      }
      ////////////////////////////////////////////////////////////
      async function get_wishdate_vacstart(base = getbase()) {                    //휴가 시작 인원 배열 획득
        try {
          const db = ref(getDatabase())
          const snapshot = await get(child(db, `base/${base}/dashboard/bydate/${todate}/vacation_start/`));
          
          if (snapshot.exists()) {
            //console.log(snapshot.val());
            const arr = snapshot.val()
            return arr;
          }
          else {
            console.log("No data available");
          }
        } catch (error) {
          console.error(error);
        }
      }

      getbase().then((base) => {
        get_wishdate_vacstart(base).then((arr) => {
          //console.log(arr)
          if (arr != null) {
            var vacstart = Object.values(arr)
          }
          else {
            var vacstart = []
          }
          
          this.vacation_start_list = vacstart
          this.value_vacation_start = vacstart.length
          this.sum_value += vacstart.length
        })
      })
      ////////////////////////////////////////////////////////////
      async function get_wishdate_vacgoing(base = getbase()) {                            //휴가 중 인원 배열 획득
        try {
          const db = ref(getDatabase())
          const snapshot = await get(child(db, `base/${base}/dashboard/bydate/${todate}/vacation_going/`));
          
          if (snapshot.exists()) {
            //console.log(snapshot.val());
            const arr = snapshot.val()
            return arr;
          }
          else {
            console.log("No data available");
          }
        } catch (error) {
          console.error(error);
        }
      }

      getbase().then((base) => {
        get_wishdate_vacgoing(base).then((arr) => {
          //console.log(arr)
          if (arr != null) {
            var vacgoing = Object.values(arr)
          }
          else {
            var vacgoing = []
          }
          
          this.vacation_going_list = vacgoing
          this.value_vacation_going = vacgoing.length
          this.sum_value += vacgoing.length
        })
      })
      ////////////////////////////////////////////////////////////
      async function get_wishdate_vacend(base = getbase()) {                  //휴가 복귀 인원 배열 획득
        try {
          const db = ref(getDatabase())
          const snapshot = await get(child(db, `base/${base}/dashboard/bydate/${todate}/vacation_end/`));
          
          if (snapshot.exists()) {
            //console.log(snapshot.val());
            const arr = snapshot.val()
            return arr;
          }
          else {
            console.log("No data available");
          }
        } catch (error) {
          console.error(error);
        }
      }

      getbase().then((base) => {
        get_wishdate_vacend(base).then((arr) => {
          //console.log(arr)
          if (arr != null) {
            var vacend = Object.values(arr)
          }
          else {
            var vacend = []
          }

          
          this.vacation_end_list = vacend
          this.value_vacation_end = vacend.length
          this.sum_value += vacend.length
        })
      })
      ////////////////////////////////////////////////////////////
      async function get_wishdate_outing(base = getbase()) {                //외출 인원 배열 획득
        try {
          const db = ref(getDatabase())
          const snapshot = await get(child(db, `base/${base}/dashboard/bydate/${todate}/outing/`));
          
          if (snapshot.exists()) {
            //console.log(snapshot.val());
            const arr = snapshot.val()
            return arr;
          }
          else {
            console.log("No data available");
          }
        } catch (error) {
          console.error(error);
        }
      }

      getbase().then((base) => {
        get_wishdate_outing(base).then((arr) => {
          //console.log(arr)
          if (arr != null) {
            var outing = Object.values(arr)
          }
          else {
            var outing = []
          }

          
          this.outing_list = outing
          this.value_outing = outing.length
          this.sum_value += outing.length
        })
      })
      ////////////////////////////////////////////////////////////
      async function get_wishdate_staystart(base = getbase()) {               //외박 출발 인원 배열 획득
        try {
          const db = ref(getDatabase())
          const snapshot = await get(child(db, `base/${base}/dashboard/bydate/${todate}/stayovn_start/`));
          
          if (snapshot.exists()) {
            //console.log(snapshot.val());
            const arr = snapshot.val()
            return arr;
          }
          else {
            console.log("No data available");
          }
        } catch (error) {
          console.error(error);
        }
      }

      getbase().then((base) => {
        get_wishdate_staystart(base).then((arr) => {
          //console.log(arr)
          if (arr != null) {
            var staystart = Object.values(arr)
          }
          else {
            var staystart = []
          }

          
          this.stayovn_start_list = staystart
          this.value_stayovn_start = staystart.length
          this.sum_value += staystart.length
        })
      })
      ////////////////////////////////////////////////////////////
      async function get_wishdate_stayend(base = getbase()) {             //외박 복귀 인원 배열 획득
        try {
          const db = ref(getDatabase())
          const snapshot = await get(child(db, `base/${base}/dashboard/bydate/${todate}/stayovn_end/`));
          
          if (snapshot.exists()) {
            //console.log(snapshot.val());
            const arr = snapshot.val()
            return arr;
          }
          else {
            console.log("No data available");
          }
        } catch (error) {
          console.error(error);
        }
      }

      getbase().then((base) => {
        get_wishdate_stayend(base).then((arr) => {
          //console.log(arr)
          if (arr != null) {
            var stayend = Object.values(arr)
          }
          else {
            var stayend = []
          }

          
          this.stayovn_end_list = stayend
          this.value_stayovn_end = stayend.length
          this.sum_value += stayend.length
        })
      })
      ////////////////////////////////////////////////////////////
      async function get_wishdate_etc(base = getbase()) {                   //기타 출타 인원 배열 획득
        try {
          const db = ref(getDatabase())
          const snapshot = await get(child(db, `base/${base}/dashboard/bydate/${todate}/etc/`));
          
          if (snapshot.exists()) {
            //console.log(snapshot.val());
            const arr = snapshot.val()
            return arr;
          }
          else {
            console.log("No data available");
          }
        } catch (error) {
          console.error(error);
        }
      }

      getbase().then((base) => {
        get_wishdate_etc(base).then((arr) => {
          //console.log(arr)
          if (arr != null) {
            var etc = Object.values(arr)
          }
          else {
            var etc = []
          }
          
          this.etc_list = etc
          this.value_etc = etc.length
          this.sum_value += etc.length
        })
      })
      ////////////////////////////////////////////////////////////
      async function get_totalnum(base = getbase()) {                   //총원 수 획득
        try {
          const db = ref(getDatabase())
          const snapshot = await get(child(db, `base/${base}/byuser/`));
          
          if (snapshot.exists()) {
            //console.log(snapshot.val());
            const arr = snapshot.val()
            return arr;
          }
          else {
            console.log("No data available");
          }
        } catch (error) {
          console.error(error);
        }
      }

      getbase().then((base) => {
        get_totalnum(base).then((arr) => {
          //console.log(arr)
          if (arr != null) {
            var total = Object.values(arr)
          }
          else {
            var total = []
          }
          
          this.total_num = total.length
        })
      })                                                                                                        //열외, 총원, 상단 조회 날짜 출력을 위한 작동지연함수
      setTimeout(() => this.out_num = this.value_outing + this.value_stayovn_start + this.value_stayovn_end +
        this.value_vacation_start + this.value_vacation_going + this.value_vacation_end + this.value_etc, 400)
      setTimeout(() => this.current_num = this.total_num - this.out_num, 410)
      setTimeout(() => this.max_component_key += 1, 420)
      setTimeout(() => this.date_component_key += 1, 420)
      setTimeout(() => this.changed_date = this.wishdate, 440)
    },

    onContext(ctx) {
      this.context = ctx
    },
  }
};
</script>

<style scoped lang="scss">
.form-control {
  width: 16rem;
}

.headline {
  text-align: center;
}

.btn-primary {
  --bs-btn-color: #fff;
  --bs-btn-bg: #1291E6;
  --bs-btn-border-color: #1291E6;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #0872FC;
  --bs-btn-hover-border-color: #0872FC;
  --bs-btn-focus-shadow-rgb: 49, 132, 253;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #0872FC;
  --bs-btn-active-border-color: #0872FC;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #fff;
  --bs-btn-disabled-bg: #08C3FC;
  --bs-btn-disabled-border-color: #08C3FC;
}
</style>