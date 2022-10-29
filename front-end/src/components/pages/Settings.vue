<template>
  <div v-if="level=='soldier'"> <AppHeader-soldier /> </div>
  <div v-if="level=='admin'"> <AppHeader-admin /> </div>
  <div v-if="level=='officer'"> <AppHeader /> </div>
  <div class="container-fluid col-8">
    <main>
      <div class="headline p-4" v-if="level=='admin'">
        <h1>
          <b>환경설정</b>
        </h1>
      </div>
      <b-card class="shadow my-4">
        <div class="container-fluid p-0 d-flex justify-content-between">
          <table>
            <thead>
              <tr>
                <!-- <th class="index">순서</th> -->
                <th class="name">성명</th>
                <th class="number">군번</th>
                <th class="battalion">대대</th>
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
                  <input v-model="armynum" class="form-control form-control-sm" type="select" ref="armynum">
                </td>
                <td>
                  <input v-model="battalion" class="form-control form-control-sm" type="select" ref="battalion">
                </td>
                <td>
                  <button class="btn btn-primary btn-sm" v-on:click="inputsoldier"><b>추가</b></button>
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
  data() {
    return {
      rows: [
        {name: "", armynum: "", battalion: ""}
      ],
      level: '',
    }
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
    addRow: function (index) {
      try {
        this.rows.splice(index + 1, 0, {});
      } catch (e) {
        console.log(e);
      }
    },
    removeRow: function(index) {
      this.rows.splice(index,1)
    },
    
    inputsoldier() {
      if(!this.name) {
        alert("입력된 이름이 없습니다.");
        return;
      }
      if(!this.armynum) {
        alert("입력된 군번이 없습니다.");
        return;
      }
      if(!this.battalion) {
        alert("입력된 대대가 없습니다.");
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
        set(ref(getDatabase(), 'base/' + base + '/byuser/' + this.armynum + '/profile'), {
          name : this.name,
          armynum : this.armynum,
          battalion : this.battalion
        })
      })
      alert('장병 정보 입력 완료!')
      this.$router.go();

    }
  },
  components: { AppHeader }
};
</script>


<style scoped lang="scss">
.th {
  margin: 4px;
}

;

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