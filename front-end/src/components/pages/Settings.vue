<template>                                                            <!--인사간부 계정 부대 환경설정 페이지-->
  <div v-if="level == 'soldier'">                                     <!--계정 레벨 별 출력 헤더 상이를 위한 if문-->
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
      <div class="headline p-4" v-if="level == 'admin'">
        <h1>
          <b>환경설정</b>
        </h1>
      </div>
      <b-card class="shadow my-4">
        <div class="container-fluid p-0 d-flex justify-content-center mb-2">
          <h5><b>장병 정보추가</b></h5>
        </div>
        <div class="container-fluid p-0 d-flex justify-content-between">
          <table>
            <thead>
              <tr>
                <!-- <th class="index">순서</th> -->                  <!--장병 정보 추가를 위한 입력값 기준-->
                <th class="name">성명</th>
                <th class="number">군번</th>
                <th class="battalion">대대</th>
                <th style="width: 48px;"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, index) in rows" :key="index">                  <!--장병 정보 추가를 위한 입력 창-->
                <!-- <td>
                  {{index+1}}
                </td> -->
                <td>
                  <input class="form-control form-control-sm" v-model="name" type="text" ref="name">
                </td>
                <td>
                  <input v-model="armynum" class="form-control form-control-sm" type="select" ref="armynum">
                </td>
                <td>
                  <input v-model="battalion" class="form-control form-control-sm" type="select" ref="battalion">
                </td>
                <td>
                  <button class="btn btn-primary btn-sm" v-on:click="inputsoldier"><b>추가</b></button>   <!--장병 정보 추가 함수-->
                  <!-- <button class="btn btn-primary btn-sm" v-on:click="inputvacation" @click="addRow($index)"><b>추가</b></button> -->
                  <!-- <button class="btn btn-danger btn-sm" @click="removeRow($index)"><b>제거</b></button> -->
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </b-card>
    </main>
  </div>
</template>


<script>
import AppHeader from '../AppHeader.vue';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getDatabase, set, ref, get, child, onValue } from "firebase/database"



export default {
  name: "Settings",
  data() {                                              //환경설정에 사용되는 변수
    return {
      rows: [
        { name: "", armynum: "", battalion: "" }
      ],
      level: '',
    }
  },
  created() {
    var uid = (firebase.auth().currentUser.uid)

    async function getlevelpromise() {                  //계정 레벨 조회
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
  methods: {
    addRow: function (index) {                        //입력 창 열 추가(추후 구현 예정)
      try {
        this.rows.splice(index + 1, 0, {});
      } catch (e) {
        console.log(e);
      }
    },
    removeRow: function (index) {                     //입력 창 열 제거(추후 구현 예정)
      this.rows.splice(index, 1)
    },

    inputsoldier() {                                  //장병 추가 함수
      if (!this.name) {                               //입력되지 않은 값이 존재할 경우 함수 return
        alert("입력된 이름이 없습니다.");
        return;
      }
      if (!this.armynum) {
        alert("입력된 군번이 없습니다.");
        return;
      }
      if (!this.battalion) {
        alert("입력된 대대가 없습니다.");
        return;
      }

      var date = new Date()

      var uid = (firebase.auth().currentUser.uid)


      async function getpromise() {                   //현재접속 계정 부대번호 조회
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
        
        set(ref(getDatabase(), 'base/' + base + '/byuser/' + this.armynum + '/profile'), {        //해당 부대의 db에 장병 정보 추가
          name: this.name,
          armynum: this.armynum,
          battalion: this.battalion
        })
      })
      alert('장병 정보 입력 완료!')
      this.$router.go();                                                                          //정보 입력 성공시 페이지 리로드

    }
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
</style>