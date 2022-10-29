<template>
  <div v-if="level=='soldier'"> <AppHeader-soldier /> </div>
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
        <div class="container-fluid p-0 d-flex justify-content-between" v-if="level=='admin' || level=='officer'">
          <table>
            <thead>
              <tr>
                <!-- <th class="index">순서</th> -->
                <th class="name">성명</th>
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
              <tr v-for="(row, index) in rows" :key="index">
                <!-- <td>
                  {{index+1}}
                </td> -->
                <td>
                  <input class="form-control form-control-sm" v-model="name" type="text" ref="name">
                </td>
                <td>
                  <b-form-select v-model="rank" :options="rank_options" size="sm"></b-form-select>
                </td>
                <td>
                  <input v-model="armynum" class="form-control form-control-sm" type="select" ref="armynum">
                </td>
                <td>
                  <input v-model="date" class="form-control form-control-sm" type="date" ref="date">
                </td>
                <td>
                  <b-form-select v-model="rule" :options="rules" size="sm"></b-form-select>
                </td>
                <td>
                  <input v-model="point" class="form-control form-control-sm" type="number" ref="point">
                </td>
                <td>
                  <input v-model="manager" class="form-control form-control-sm" type="text" ref="manager">
                </td>
                <td>
                  <button v-on:click="inputpoint" class="btn btn-primary btn-sm"><b>추가</b></button>
                  <!-- <button class="btn btn-primary btn-sm" @click="addRow(index)"><b>추가</b></button> -->
                  <!-- <button class="btn btn-danger btn-sm" @click="removeRow(index)"><b>제거</b></button> -->
                </td>

              </tr>
              <tr v-for="item in point_list" v-bind:key="item" class="text-muted ms-2">
                <td>
                  <span v-html="item.name"></span>
                </td>
                <td>
                  <span v-html="item.rank"></span>
                </td>
                <td>
                  <span v-html="item.armynum"></span>
                </td>
                <td>
                  <span v-html="item.date"></span>
                </td>
                <td>
                  <span v-html="item.rule"></span>
                </td>
                <td>
                  <span v-html="item.point"></span>
                </td>
                <td>
                  <span v-html="item.manager"></span>
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
  data() {
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
        //{ value: "1-1", text: '생활관 정리정돈 우수' }, 
        //{ value: "1-2", text: '머시기 우수' },
        //{ value: "2-1", text: '근무 태도 우수' },
        //{ value: "3-1", text: '어쩌구 저쩌구 우수' },
        { value: "생활관 정리정돈 우수", text: '생활관 정리정돈 우수' },
        { value: "모범사례 식별", text: '모범사례 식별' },
        { value: "근무 태도 우수", text: '근무 태도 우수' }, 
        { value: "휴대폰 부정 사용 보고", text: '휴대폰 부정 사용 보고' },
      ],
      level: '',
      point_list: [],
      value_point : '',
    }
  },
  mounted(){

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


    async function get_pointarr(base = getpromise()) {
        try{
          const db = ref(getDatabase())
          const snapshot = await get(child(db, `base/${base}/dashboard/bypoint/`));
          console.log("point arr")
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
          console.log("arr")
          console.log(point)
          this.point_list = point
          this.value_point = point.length
        })
      })  
  },
  created(){
    var uid = (firebase.auth().currentUser.uid)
    
    async function getlevelpromise() {
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
        console.log("level : " + level)
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


    inputpoint() {
      if(!this.name) {
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
        })

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
        })


      })
      alert('상점 입력 완료!')
      this.$router.go();

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
</style>