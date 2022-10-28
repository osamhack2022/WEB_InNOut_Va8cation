<template>
  <AppHeader />
  <div class="container-fluid col-8">

    <main>
      <div>
        <div class="headline p-4">
          <h1>
            <Base v-model="basenum"></Base>
            <div class="result">
              <b>{{basenum}}</b>
            </div>
          </h1>

          <div>
            <!--<b-form-datepicker id="example-datepicker" v-model="ondate" class="mb-0"></b-form-datepicker>-->
            <button type="submit" v-on:click="showOutstatus" class="btn btn-primary btn-block ms-2"><b>TEST</b></button>
          </div>

          <div class="d-flex justify-content-center align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi bi-chevron-left me-4" viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
            </svg>
            <input class="form-control form-control" v-model='wishdate' type="date" ref="date">
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

        <b-card-group deck>
          <b-card class="shadow">
            <div class="container-fluid p-0 d-flex justify-content-between">
              <b-card-text class="m-0">총원</b-card-text>
            </div>
            <b-card-text class="text-primary fs-3">
              <b>{{total_num}}</b>
            </b-card-text>
          </b-card>
          <b-card class="shadow">
            <div class="container-fluid p-0 d-flex justify-content-between">
              <b-card-text class="my-0">열외</b-card-text>
            </div>
            <b-card-text class="text-danger fs-3">
              <b>{{out_num}}</b>
            </b-card-text>
          </b-card>
          <b-card class="shadow">
            <div class="container-fluid p-0 d-flex justify-content-between">
              <b-card-text class="my-0">현재원</b-card-text>
            </div> 
            <b-card-text class="text-success fs-3">
              <b>{{current_num}}</b>
            </b-card-text>
          </b-card>
        </b-card-group>

        <div class="mt-3">
          <b-card class="shadow">
            <div class="container-fluid p-0 d-flex justify-content-between">
              <b-card-text class="my-0">열외내용</b-card-text>
            </div>
            <b-progress class="mt-2" :max="max">
              <b-progress-bar :style="{ 'background-color': '#FF9754' }" :value="value_vacation_start">휴가복귀</b-progress-bar>
              <b-progress-bar :style="{ 'background-color': '#FF7262' }" :value="value_vacation_going">휴가 중</b-progress-bar>
              <b-progress-bar :style="{ 'background-color': '#E84D65' }" :value="value_vacation_end">휴가 복귀</b-progress-bar>
              <b-progress-bar :style="{ 'background-color': '#A259FF' }" :value="value_stayovn_start">외박출발</b-progress-bar>
              <b-progress-bar :style="{ 'background-color': '#6046E8' }" :value="value_stayovn_end">외박복귀</b-progress-bar>
              <b-progress-bar :style="{ 'background-color': '#0ACF83' }" :value="value_outing">외출</b-progress-bar>
              <b-progress-bar :style="{ 'background-color': '#57606A' }" :value="value_etc">기타</b-progress-bar>
            </b-progress>
            <div class="px-0 pt-4 d-flex flex-column">
              <div class="mr-3">
                <svg :style="{'fill': '#FF9754'}" height="16" viewBox="0 0 16 16" width="16"
                  class="octicon octicon-dot-fill my-1 mr-2">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"></path>
                </svg>
                <span style="display:inline-block; width:72px;" class=mx-2><b>휴가 출발</b></span>
                <span>{{getValue(value_vacation_start)}}</span>
                <span v-for="item in vacation_start_list" v-bind:key="item" class="text-muted ms-2">
                  <img :src="require(`@/assets/images/ranks/${item.rank}.svg`)" width="18" height="18" alt="">
                  {{' '+item.name}}
                </span>
              </div>
              <div class="mr-3">
                <svg :style="{'fill': '#FF7262'}" height="16" viewBox="0 0 16 16" width="16"
                  class="octicon octicon-dot-fill my-1 mr-2">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"></path>
                </svg>
                <span style="display:inline-block; width:72px;" class=mx-2><b>휴가 중</b></span>
                <span>{{getValue(value_vacation_going)}}</span>
                <span v-for="item in vacation_going_list" v-bind:key="item" class="text-muted ms-2">
                  <img :src="require(`@/assets/images/ranks/${item.rank}.svg`)" width="18" height="18" alt="">
                  {{' '+item.name}}
                </span>
              </div>
              <div class="mr-3">
                <svg :style="{'fill': '#E84D65'}" height="16" viewBox="0 0 16 16" width="16"
                  class="octicon octicon-dot-fill my-1 mr-2">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"></path>
                </svg>
                <span style="display:inline-block; width:72px;" class=mx-2><b>휴가 복귀</b></span>
                <span>{{getValue(value_vacation_end)}}</span>
                <span v-for="item in vacation_end_list" v-bind:key="item" class="text-muted ms-2">
                  <img :src="require(`@/assets/images/ranks/${item.rank}.svg`)" width="18" height="18" alt="">
                  {{' '+item.name}}
                </span>
              </div>
              <div class="mr-3">
                <svg :style="{'fill': '#A259FF'}" height="16" viewBox="0 0 16 16" width="16"
                  class="octicon octicon-dot-fill my-1 mr-2">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"></path>
                </svg>
                <span style="display:inline-block; width:72px;" class=mx-2><b>외박 출발</b></span>
                <span>{{getValue(value_stayovn_start)}}</span>
                <span v-for="item in stayovn_start_list" v-bind:key="item" class="text-muted ms-2">
                  <img :src="require(`@/assets/images/ranks/${item.rank}.svg`)" width="18" height="18" alt="">
                  {{' '+item.name}}
                </span>
              </div>
              <div class="mr-3">
                <svg :style="{'fill': '#6046E8'}" height="16" viewBox="0 0 16 16" width="16"
                  class="octicon octicon-dot-fill my-1 mr-2">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"></path>
                </svg>
                <span style="display:inline-block; width:72px;" class=mx-2><b>외박 복귀</b></span>
                <span>{{getValue(value_stayovn_end)}}</span>
                <span v-for="item in stayovn_end_list" v-bind:key="item" class="text-muted ms-2">
                  <img :src="require(`@/assets/images/ranks/${item.rank}.svg`)" width="18" height="18" alt="">
                  {{' '+item.name}}
                </span>
              </div>
              <div class="mr-3">
                <svg :style="{'fill': '#0ACF83'}" height="16" viewBox="0 0 16 16" width="16"
                  class="octicon octicon-dot-fill my-1 mr-2">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"></path>
                </svg>
                <span style="display:inline-block; width:72px;" class=mx-2><b>외출</b></span>
                <span>{{getValue(value_outing)}}</span>
                <span v-for="item in outing_list" v-bind:key="item" class="text-muted ms-2">
                  <img :src="require(`@/assets/images/ranks/${item.rank}.svg`)" width="18" height="18" alt="">
                  {{' '+item.name}}</span>
              </div>
              <div class="mr-3">
                <svg :style="{'fill': '#57606A'}" height="16" viewBox="0 0 16 16" width="16"
                  class="octicon octicon-dot-fill my-1 mr-2">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"></path>
                </svg>
                <span style="display:inline-block; width:72px;" class=mx-2><b>기타</b></span>
                <span>{{getValue(value_etc)}}</span>
                <span v-for="item in etc_list" v-bind:key="item" class="text-muted ms-2">
                  <img :src="require(`@/assets/images/ranks/${item.rank}.svg`)" width="18" height="18" alt="">
                  {{' '+item.name}}
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
  components:{ 
    AppHeader,
  },
  data() {
    return {
      wishdate: '',
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
      max: '',
      basenum: '',
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
    };
  },
  mounted() {
      var uid = (firebase.auth().currentUser.uid)
      
      async function getpromise() {
        try{
          const db = ref(getDatabase())
          const snapshot = await get(child(db, `user/${uid}/base`));
          if (snapshot.exists()) {
            console.log(snapshot.val());
            const base = snapshot.val()
            return base;
          }
          else {
            console.log("No data available");
          }
        }catch(error) {
          console.error(error);
        }
      }

      getpromise().then((base) => {
        console.log("base : " + base)
        this.basenum= base+'부대'
    })

  },

  props: {
    msg: String,
  },

  methods: {   
    getValue: function (value) {
      return value;
    },

    setDate(){
      var uid = (firebase.auth().currentUser.uid)
      var todate = this.wishdate
      async function getbase() {
        try{
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
        }catch(error) {
          console.error(error);
        }
      }
////////////////////////////////////////////////////////////
      async function get_wishdate_vacstart(base=getbase()) {
        try{
          const db = ref(getDatabase())
          const snapshot = await get(child(db, `base/${base}/dashboard/bydate/${todate}/vacation_start/`));
          console.log("vacation start")
          if (snapshot.exists()) {
            //console.log(snapshot.val());
            const arr = snapshot.val()
            return arr;
          }
          else {
            console.log("No data available");
          }
        }catch(error) {
          console.error(error);
        }
      }

      getbase().then((base) => {
        get_wishdate_vacstart(base).then((arr) => {
          //console.log(arr)
          if(arr != null){
            var vacstart = Object.values(arr)
          } 
          else{
            var vacstart = []
          }
          console.log("arr")
          console.log(vacstart)
          this.vacation_start_list = vacstart
          this.value_vacation_start = vacstart.length
        })
      }) 
////////////////////////////////////////////////////////////
      async function get_wishdate_vacgoing(base = getbase()) {
        try{
          const db = ref(getDatabase())
          const snapshot = await get(child(db, `base/${base}/dashboard/bydate/${todate}/vacation_going/`));
          console.log("vacation going")
          if (snapshot.exists()) {
            //console.log(snapshot.val());
            const arr = snapshot.val()
            return arr;
          }
          else {
            console.log("No data available");
          }
        }catch(error) {
          console.error(error);
        }
      }

      getbase().then((base) => {
        get_wishdate_vacgoing(base).then((arr) => {
          //console.log(arr)
          if(arr != null){
            var vacgoing = Object.values(arr)
          } 
          else{
            var vacgoing = []
          }
          console.log("arr")
          console.log(vacgoing)
          this.vacation_going_list = vacgoing
          this.value_vacation_going = vacgoing.length
        })
      })  
////////////////////////////////////////////////////////////
      async function get_wishdate_vacend(base=getbase()) {
        try{
          const db = ref(getDatabase())
          const snapshot = await get(child(db, `base/${base}/dashboard/bydate/${todate}/vacation_end/`));
          console.log("vacation end")
          if (snapshot.exists()) {
            //console.log(snapshot.val());
            const arr = snapshot.val()
            return arr;
          }
          else {
            console.log("No data available");
          }
        }catch(error) {
          console.error(error);
        }
      }

      getbase().then((base) => {
        get_wishdate_vacend(base).then((arr) => {
          //console.log(arr)
          if(arr != null){
            var vacend = Object.values(arr)
          } 
          else{
            var vacend = []
          }

          console.log("arr")
          console.log(vacend)
          this.vacation_end_list = vacend
          this.value_vacation_end = vacend.length
        })
      })  
////////////////////////////////////////////////////////////
async function get_wishdate_outing(base=getbase()) {
        try{
          const db = ref(getDatabase())
          const snapshot = await get(child(db, `base/${base}/dashboard/bydate/${todate}/outing/`));
          console.log("outing")
          if (snapshot.exists()) {
            //console.log(snapshot.val());
            const arr = snapshot.val()
            return arr;
          }
          else {
            console.log("No data available");
          }
        }catch(error) {
          console.error(error);
        }
      }

      getbase().then((base) => {
        get_wishdate_outing(base).then((arr) => {
          //console.log(arr)
          if(arr != null){
            var outing = Object.values(arr)
          } 
          else{
            var outing = []
          }
          
          console.log("arr")
          console.log(outing)
          this.outing_list = outing
          this.value_outing = outing.length
        })
      })  
////////////////////////////////////////////////////////////
async function get_wishdate_staystart(base=getbase()) {
        try{
          const db = ref(getDatabase())
          const snapshot = await get(child(db, `base/${base}/dashboard/bydate/${todate}/stayovn_start/`));
          console.log("stayovn start")
          if (snapshot.exists()) {
            //console.log(snapshot.val());
            const arr = snapshot.val()
            return arr;
          }
          else {
            console.log("No data available");
          }
        }catch(error) {
          console.error(error);
        }
      }

      getbase().then((base) => {
        get_wishdate_staystart(base).then((arr) => {
          //console.log(arr)
          if(arr != null){
            var staystart = Object.values(arr)
          } 
          else{
            var staystart = []
          }

          console.log("arr")
          console.log(staystart)
          this.stayovn_start_list = staystart
          this.value_stayovn_start = staystart.length
        })
      })  
////////////////////////////////////////////////////////////
async function get_wishdate_stayend(base=getbase()) {
        try{
          const db = ref(getDatabase())
          const snapshot = await get(child(db, `base/${base}/dashboard/bydate/${todate}/stayovn_end/`));
          console.log("stayovn end")
          if (snapshot.exists()) {
            //console.log(snapshot.val());
            const arr = snapshot.val()
            return arr;
          }
          else {
            console.log("No data available");
          }
        }catch(error) {
          console.error(error);
        }
      }

      getbase().then((base) => {
        get_wishdate_stayend(base).then((arr) => {
          //console.log(arr)
          if(arr != null){
            var stayend = Object.values(arr)
          } 
          else{
            var stayend = []
          }
          
          console.log("arr")
          console.log(stayend)
          this.stayovn_end_list = stayend
          this.value_stayovn_end = stayend.length
        })
      })  
////////////////////////////////////////////////////////////
async function get_wishdate_etc(base=getbase()) {
        try{
          const db = ref(getDatabase())
          const snapshot = await get(child(db, `base/${base}/dashboard/bydate/${todate}/etc/`));
          console.log("etc")
          if (snapshot.exists()) {
            //console.log(snapshot.val());
            const arr = snapshot.val()
            return arr;
          }
          else {
            console.log("No data available");
          }
        }catch(error) {
          console.error(error);
        }
      }

      getbase().then((base) => {
        get_wishdate_etc(base).then((arr) => {
          //console.log(arr)
          if(arr != null){
            var etc = Object.values(arr)
          } 
          else{
            var etc = []
          }
          console.log("arr")
          console.log(etc)
          this.etc_list = etc
          this.value_etc = etc.length
        })
      })  
////////////////////////////////////////////////////////////
async function get_totalnum(base=getbase()) {
        try{
          const db = ref(getDatabase())
          const snapshot = await get(child(db, `base/${base}/byuser/`));
          console.log("etc")
          if (snapshot.exists()) {
            //console.log(snapshot.val());
            const arr = snapshot.val()
            return arr;
          }
          else {
            console.log("No data available");
          }
        }catch(error) {
          console.error(error);
        }
      }

      getbase().then((base) => {
        get_totalnum(base).then((arr) => {
          //console.log(arr)
          if(arr != null){
            var total = Object.values(arr)
          } 
          else{
            var total = []
          }
          console.log("arr")
          console.log(total)
          this.total_num = total.length
        })
      }) 
      setTimeout(() => this.out_num = this.value_outing + this.value_stayovn_start + this.value_stayovn_end +
      this.value_vacation_start + this.value_vacation_going + this.value_vacation_end + this.value_etc, 400)
      setTimeout(() => this.current_num = this.total_num - this.out_num, 410)


    },




    onContext(ctx) {
      this.context = ctx
    },



    showOutstatus(){
      var uid = (firebase.auth().currentUser.uid)

      /*async function getlevelpromise() {
        try{
          const db = ref(getDatabase())
          const snapshot = await get(child(db, `user/${uid}/level`));
          if (snapshot.exists()) {
            console.log(snapshot.val());
            const level = snapshot.val()
            return level;
          }
          else {
            console.log("No data available");
          }
        }catch(error) {
          console.error(error);
        }
      }
      getlevelpromise().then((level) => {
        console.log("user level : " + level)
      })*/

      async function getbasepromise() {
        try{
          const db = ref(getDatabase())
          const snapshot = await get(child(db, `user/${uid}/base`));
          if (snapshot.exists()) {
            console.log(snapshot.val());
            const base = snapshot.val()
            return base;
          }
          else {
            console.log("No data available");
          }
        }catch(error) {
          console.error(error);
        }
      }

      async function getsoliderpromise(base = getbasepromise()) {
        try{
          const db = ref(getDatabase())
          const snapshot = await get(child(db, `base/${base}/byuser/`));
          if (snapshot.exists()) {
            console.log(snapshot.val())
            const soliderarr = snapshot.val()
            console.log(soliderarr)
            return soliderarr;
          }
          else {
            console.log("No data available");
          }
        }catch(error) {
          console.error(error);
        }
      }

      getbasepromise().then((base) => {
        getsoliderpromise(base).then((soliderarr) => {
          console.log(soliderarr)
          var total = Object.keys(soliderarr).length
          console.log("total : " + total)
          var member = []
          for(var temp of Object.keys(soliderarr)){
            console.log(temp)
            member.push(temp)
          }
          for(var temp of member){
            console.log(Object.values(soliderarr))
          }
        })
      })


    }
  }
};
</script>

<style scoped lang="scss">




a {
  text-decoration: none;
}

.form-control {
  width: 16rem;
}

.headline {
  text-align: center;
  // h3 > b {color: $color-secondary-orange;}
}
</style>