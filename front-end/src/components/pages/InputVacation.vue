<template>
  <AppHeader />
  <div class="container-fluid col-8">
    <main>
      <div class="headline p-4">
        <h1>
          <b>휴가입력/조회</b>
        </h1>
      </div>
      <b-card class="shadow my-4">
        <div class="container-fluid p-0 d-flex justify-content-between">
          <table>
            <thead>
              <tr>
                <th class="index">순서</th>
                <th class="name">성명</th>
                <th class="rank">계급</th>
                <th class="number">군번</th>
                <th class="outtype">출타종류</th>
                <th class="outdate">출타시작일</th>
                <th class="indate">출타종료일</th>
                <th style="width: 48px;"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, index) in rows" :key="index">
                <td>
                  {{index+1}}
                </td>
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
                  <b-form-select v-model="outtype" :options="out_options" size="sm"></b-form-select>
                </td>
                <td>
                  <input v-model="outdate" class="form-control form-control-sm" type="date" ref="outdate">
                </td>
                <td>
                  <input v-model="indate" class="form-control form-control-sm" type="date" ref="indate">
                </td>
                <td>
                  <button class="btn btn-primary btn-sm" v-on:click="inputvacation" @click="addRow($index)"><b>추가</b></button>
                  <button class="btn btn-danger btn-sm" @click="removeRow($index)"><b>제거</b></button>
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
  name: "InputPoint",
  data() {
    return {
      rows: [
        {name: "", rank: "", armynum: "", outtype: "", outdate: "", indate: ""}
      ],
      rank: null, outtype: null,
      rank_options: [
        { value: "PVT", text: '이병' }, { value: "PFC", text: '일병' }, { value: "CPL", text: '상병' }, { value: "SGT", text: '병장' },
        { value: "SSG", text: '하사' }, { value: "SFC", text: '중사' }, { value: "FSG", text: '상사' }, { value: "SGM", text: '원사' },
        { value: "2LT", text: '소위' }, { value: "1LT", text: '중위' }, { value: "CPT", text: '대위' },
        { value: "MAJ", text: '소령' }, { value: "LCL", text: '중령' }, { value: "COL", text: '대령' },
      ],
      out_options: [
        { value: "vacation", text: '휴가' },
        { value: "stayovn", text: '외박' },
        { value: "outing", text: '외출' },
        { value: "etc", text: '기타' },
      ]
    }
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
    inputvacation() {
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
      if(!this.outdate) {
        alert("입력된 출타시작일이 없습니다.");
        return;
      }
      if(!this.indate) {
        alert("입력된 출타종료일이 없습니다.");
        return;
      }
      if(!this.outtype) {
        alert("입력된 출타종료가 없습니다.");
        return;
      }
      var date = new Date()
      
      var uid = (firebase.auth().currentUser.uid)
      var abase = ''
      const dbRef = getDatabase()
      async function inputvac() {
        try{
          const snapshot = await get(child(this.dbRef), `user/admin/${uid}/base`);
          if (snapshot.exists()) {
            console.log(snapshot.val());
            const base = snapshot.val()
            set(ref(getDatabase(), 'base/' + base + '/outstatus/' +date.getFullYear() + ":" 
          + date.getMonth() + ":" + date.getDate() + "_" + date.getHours() +":" + date.getMinutes()
          + ":" + date.getSeconds()), {
            name : this.name,
            rank : this.rank,
            armynum : this.armynum,
            outtype : this.outtype,
            outdate : this.outdate,
            indate : this.indate
            })
            return base;
          }
          else {
            console.log("No data available");
          }
        }catch(e) {
          console.error(e);
        }
      } 
      async function getbase() {
        var base = ''
        base = await inputvac()
        alert(base)
        return base
      }  
      set(ref(getDatabase(), 'base/' + getbase() + '/outstatus/' +date.getFullYear() + ":" 
          + date.getMonth() + ":" + date.getDate() + "_" + date.getHours() +":" + date.getMinutes()
          + ":" + date.getSeconds()), {
          name : this.name,
          rank : this.rank,
          armynum : this.armynum,
          outtype : this.outtype,
          outdate : this.outdate,
          indate : this.indate
          })
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