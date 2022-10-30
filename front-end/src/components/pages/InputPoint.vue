<template>                                                                                                <!-- 용사 상점 등록 페이지 -->
  <div v-if="level=='soldier'"> <AppHeader-soldier /> </div>                                              <!--계정레벨마다 헤더를 상이하게 보이기 위한 if문-->
  <div v-if="level=='admin'"> <AppHeader-admin /> </div>
  <div v-if="level=='officer'"> <AppHeader /> </div>
  <div class="container-fluid col-8">
    <main>
      <div class="headline p-4">
        <h1>
          <b>상점입력/조회</b>
        </h1>
      </div>
      <b-card class="shadow my-4">
        <div class="container-fluid p-0 d-flex justify-content-between">
          <table>
            <thead>
              <tr>
                <!-- <th class="index">순서</th> -->                                                        <!--상점 입력 창의 상단 기준-->
                <th>성명</th>
                <th class="rank">계급</th>
                <th class="number">군번</th>
                <th class="date">일시</th>
                <th class="rule">기준</th>
                <th class="point">점수</th>
                <th class="manager">담당간부</th>
                <th style="width: 48px;"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, index) in rows" :key="index" v-if="level=='admin' || level=='officer'">    <!--계정레벨 인사간부, 간부만 입력할 수 있게 하는 if문-->
                <!-- <td>
                  {{index+1}}
                </td> -->
                <th>
                  <input class="form-control form-control-sm" v-model="name" type="text" ref="name">       <!-- 상점 추가에 필요한 정보들을 입력-->
                </th>
                <th>
                  <b-form-select v-model="rank" :options="rank_options" size="sm"></b-form-select>
                </th>
                <th>
                  <input v-model="armynum" class="form-control form-control-sm" type="select" ref="armynum">
                </th>
                <th>
                  <input v-model="date" class="form-control form-control-sm" type="date" ref="date">
                </th>
                <th>
                  <b-form-select v-model="rule" :options="rules" size="sm"></b-form-select>
                </th>
                <th>
                  <input v-model="point" class="form-control form-control-sm" type="number" ref="point">
                </th>
                <th>
                  <input v-model="manager" class="form-control form-control-sm" type="text" ref="manager">
                </th>
                <th>
                  <button v-on:click="inputpoint" class="btn btn-primary btn-sm"><b>추가</b></button>
                  <!-- <button class="btn btn-primary btn-sm" @click="addRow(index)"><b>추가</b></button> -->
                  <!-- <button class="btn btn-danger btn-sm" @click="removeRow(index)"><b>제거</b></button> -->
                </th>

              </tr>
              <tr v-for="item in point_list" v-bind:key="item" class="text-muted ms-2">                       <!-- 입력 창 하단에 표시되는 추가된 목록들-->
                <td>
                  <c>{{item.name}}</c>
                </td>
                <td>
                  <c>{{item.rank}}</c>
                </td>
                <td>
                  <c>{{item.armynum}}</c>
                </td>
                <td>
                  <c>{{item.date}}</c>
                </td>
                <td>
                  <c>{{item.rule}}</c>
                </td>
                <td>
                  <c>{{item.point}}</c>
                </td>
                <td>
                  <c>{{item.manager}}</c>
                </td>
              </tr>
            </tbody>
            <!-- <tbody>
              <tr v-for="row in rows" v-bind:key="row.number">
                <td>
                  <textarea class="form-control" v-model="row.name"></textarea>
                </td>
                <td>{{ item.number }}</td>
                <td>{{ item.date }}</td>
                <td>{{ item.rule }}</td>
                <td>{{ item.point }}</td>
                <td class="button">
                  <button>제거</button>
                </td>
              </tr>
            </tbody> -->
          </table>
        </div>




      </b-card>
    </main>
  </div>
</template>


<script>
import AppHeader from '@/components/AppHeader';
// eslint-disable-next-line no-unused-vars
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getDatabase, set, ref, get, child, onValue } from "firebase/database"
export default {
  name: "InputPoint",
  data() {                                                                                  // 상점입력페이지에 사용되는 변수들
    return {
      rows: [
        { name: "", rank: "", armynum: "", date: "", rule: "", point: 0, manager: "" }
      ],
      rank: null, outtype: null,
      rank_options: [
        //{ value: "PVT", text: '이병' }, { value: "PFC", text: '일병' }, { value: "CPL", text: '상병' }, { value: "SGT", text: '병장' },
        { value: "이병", text: '이병' }, { value: "일병", text: '일병' }, { value: "상병", text: '상병' }, { value: "병장", text: '병장' },
      ],
      rules: [
        { value: "생활관 정리정돈 우수", text: '생활관 정리정돈 우수' },
        { value: "모범사례 식별", text: '모범사례 식별' },
        { value: "근무 태도 우수", text: '근무 태도 우수' }, 
        { value: "휴대폰 부정 사용 보고", text: '휴대폰 부정 사용 보고' },
        { value: "임무 수행 중 상황조치 우수", text: '임무 수행 중 상황조치 우수' },
        { value: "대리 근무 실시", text: '대리 근무 실시' },
        { value: "적극적인 교육 태도 우수", text: '적극적인 교육 태도 우수' },
        { value: "위험 상황 인지로 사고 예방", text: '위험 상황 인지로 사고 예방' },
      ],
      level: '',
      point_list: [],
      value_point : '',
    }
  },
  mounted(){

    var uid = (firebase.auth().currentUser.uid)
      

      async function getpromise() {                                                       //상점을 입력받는 용사가 속한 부대의 번호를 조회
        try{
          const db = ref(getDatabase())
          const snapshot = await get(child(db, `user/${uid}/base`));
          if (snapshot.exists()) {
            
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


    async function get_pointarr(base = getpromise()) {                                      //해당 부대에서 입력된 상점 추가 목록(배열)을 불러옴
        try{
          const db = ref(getDatabase())
          const snapshot = await get(child(db, `base/${base}/dashboard/bypoint/`));
          
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

      getpromise().then((base) => {
        get_pointarr(base).then((arr) => {
          //console.log(arr)
          if(arr != null){
            var point = Object.values(arr)
          } 
          else{
            var point = []
          }
          
          this.point_list = point
          this.value_point = point.length
        })
      })  
  },
  created(){
    var uid = (firebase.auth().currentUser.uid)
    
    async function getlevelpromise() {                                                            //계정 레벨에 따른 상단 헤더 표시 상이를 위한 계정 레벨 조회
        try{
          const db = ref(getDatabase())
          const snapshot = await get(child(db, `user/${uid}/level`));
          if (snapshot.exists()) {
            
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
        
        this.level= level
    })

  },
  methods: {
    getValue: function (value) {
      return value;
    },
    
    addRow: function (index) {
      try {
        this.rows.splice(index + 1, 0, {});
      } catch (e) {
        console.log(e);
      }
    },



    removeRow: function (index) {
      this.rows.splice(index, 1)
    },


    inputpoint() {                                                                            //상점 추가 함수
      if(!this.name) {                                                                        //각 정보들이 입력되지 않으면 상점 추가를 금지
        alert("입력된 이름이 없습니다.");
        return;
      }
      if(!this.rank) {
        alert("입력된 계급이 없습니다.");
        return;
      }
      if(!this.armynum) {
        alert("입력된 군번이 없습니다.");
        return;
      }
      if(!this.date) {
        alert("입력된 일시가 없습니다.");
        return;
      }
      if(!this.rule) {
        alert("입력된 기준이 없습니다.");
        return;
      }
      if(!this.manager) {
        alert("입력된 담당간부가 없습니다.");
        return;
      }
      var date = new Date()
      
      var uid = (firebase.auth().currentUser.uid)
      

      async function getpromise() {                                                   // 사용자의 부대 번호를 조회
        try{
          const db = ref(getDatabase())
          const snapshot = await get(child(db, `user/${uid}/base`));
          if (snapshot.exists()) {
            
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
        
        var today = new Date();                                     

        set(ref(getDatabase(), 'base/' + base + '/dashboard/bypoint/' + 
        date.getFullYear() + ':' + (date.getMonth() + 1) + ':' + date.getDate() + 
        '-' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()), {
          name : this.name,
          rank : this.rank,
          armynum : this.armynum,
          date : this.date,
          rule : this.rule,
          point : this.point,
          manager : this.manager,
        })                                                                                    //입력된 상점 이력을 부대 상점 부여 이력에 저장

        set(ref(getDatabase(), 'base/' + base + '/byuser/' + this.armynum + '/point/' + 
        date.getFullYear() + ':' + (date.getMonth() + 1) + ':' + date.getDate() + 
        '-' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()), {
          name : this.name,
          rank : this.rank,
          armynum : this.armynum,
          date : this.date,
          rule : this.rule,
          point : this.point,
          manager : this.manager,
        })                                                                                    //입력된 상점 이력을 개인 상점 부여 이력에 저장


      })
      alert('상점 입력 완료!')
      this.$router.go();                                                                      //성공적으로 상점을 입력하면 페이지 리로드

    },



  },

  components: { AppHeader }
};
</script>


<style scoped lang="scss">
th {
  margin: 4px;
  text-align: center;
}

td {
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

.form-control {
  text-align: center
}

table {
  width: 100%;
}

.input-name {
  width: 8rem;
}

.input-rank {
  width: 6rem;
}

.input-armynum {
  width: 12rem;
}

.input-point {
  width: 4rem;
}

.headline {
  text-align: center;
  // h3 > b {color: $color-secondary-orange;}
}

.middle {
  display: flex;
  align-items: center;
  height: 100px;
}

c {
  color:black;
  font-weight: "normal";
}
</style>