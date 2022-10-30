<template>                                                                                                   <!-- 출타 정보 입력 페이지-->
  <div v-if="level=='soldier'"> <AppHeader-soldier /> </div>                                                <!-- 계정 레벨에 따른 상단 표시 헤더 상이를 위한 if 문-->
  <div v-if="level=='admin'"> <AppHeader-admin /> </div>
  <div v-if="level=='officer'"> <AppHeader /> </div>
  <div class="container-fluid col-8">
    <main>
      <div class="headline p-4">
        <h1>
          <b>출타입력</b>
        </h1>
      </div>
      <b-card class="shadow my-4" v-if="level=='admin' || level=='officer'" >                                 <!--계정 레벨이 인사간부 혹은 간부가 아니면 출타 입력을 막음-->
        <div class="container-fluid p-0 d-flex justify-content-between">
          <table>
            <thead>
              <tr>
                <!-- <th class="index">순서</th> -->                                                            <!-- 출타 입력에 필요한 정보들 기준-->
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
              <tr v-for="(row, index) in rows" :key="index">                                                      <!-- 출타 정보 입력 구간-->
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
                  <b-form-select v-model="outtype" :options="out_options" size="sm"></b-form-select>
                </td>
                <td>
                  <input v-model="outdate" class="form-control form-control-sm" type="date" ref="outdate">
                </td>
                <td>
                  <input v-model="indate" class="form-control form-control-sm" type="date" ref="indate">
                </td>
                <td>
                  <button class="btn btn-primary btn-sm" v-on:click="inputvacation"><b>추가</b></button>
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

        function to_date(date_str)                                              // yyyymmdd 형식을 date형식으로 변환
      {
        var yyyyMMdd = String(date_str);
        var sYear = yyyyMMdd.substring(0,4);
        var sMonth = yyyyMMdd.substring(4,6);
        var sDate = yyyyMMdd.substring(6,8);

        return new Date(Number(sYear), Number(sMonth)-1, Number(sDate));
      }

        function to_date2(date_str)                      // yyyy-mm-dd 형식을 date형식으로 변환
      {
        var yyyyMMdd = String(date_str);
        var sYear = yyyyMMdd.substring(0,4);
        var sMonth = yyyyMMdd.substring(5,7);
        var sDate = yyyyMMdd.substring(8,10);

        
        return new Date(Number(sYear), Number(sMonth)-1, Number(sDate));
      }
      function between_date(date1, date2)                                       // 입력된 두 date 값의 차이를 구함
      {   
        var y1970 = new Date(1970, 0, 1).getTime();
        var time1 = null;
        var time2 = null;

        if(date1.length > 8)
            time1 = to_date2(date1).getTime() - y1970;
        else
            time1 = to_date(date1).getTime() - y1970;
   
        if(date2.length > 8)
            time2 = to_date2(date2).getTime() - y1970;
        else
            time2 = to_date(date2).getTime() - y1970;

        var per_day = 1000 * 60 * 60 * 24;              

        return Math.floor(time1/per_day) - Math.floor(time2/per_day);
      }
      function get_date_str(date)                                             //date값을 yyyy-mm-dd로 변환
      {
        var sYear = date.getFullYear();
        var sMonth = date.getMonth() + 1;
        var sDate = date.getDate();

        sMonth = sMonth > 9 ? sMonth : "0" + sMonth;
        sDate  = sDate > 9 ? sDate : "0" + sDate;
        return sYear +'-'+ sMonth +'-'+ sDate;
      }
      function get_tomorrow(date, num)                                        //date 값의 내일 date값을 반환
      {
        var newdate = new Date(date.getFullYear(), date.getMonth(), date.getDate())
        newdate.setDate(newdate.getDate() + num)
        return newdate
      }  


export default {
  name: "InputPoint",
  data() {                                            // 해당페이지에 사용되는 변수들
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
      ],
      level: '',
    }
  },
  created(){
    var uid = (firebase.auth().currentUser.uid)
    
    async function getlevelpromise() {                     // 상단 헤더 표시 상이를 위한 계정 레벨 획득 메소드
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
    
    inputvacation() {                                               //휴가 입력 함수
      if(!this.name) {                                              //각 항목 중 입력되지 않은 항목이 있으면 휴가 입력 불가
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
      

      async function getpromise() {                                             // 사용자의 부대 db에 접근하기 위해 사용자의 부대 번호 조회
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
                                                                                    //출타 등록 현황을 개인 db에 저장
        set(ref(getDatabase(), 'base/' + base + '/byuser/' + this.armynum + '/outstatus/' + this.outdate + '~' + this.indate), {
          name : this.name,
          rank : this.rank,
          armynum : this.armynum,
          outtype : this.outtype,
          outdate : this.outdate,
          indate : this.indate
        })




 





        if(this.outtype == 'outing'){                                                                                         //각 출타 현황별로 각 일자의 db에 분류하여 저장
          set(ref(getDatabase(), 'base/' + base + '/dashboard/bydate/' + (this.outdate) +'/outing/' + this.armynum), {
          name : this.name,
          rank : this.rank
        })             
        }
        else if (this.outtype == 'stayovn'){
          set(ref(getDatabase(), 'base/' + base + '/dashboard/bydate/' + (this.outdate) +'/stayovn_start/' + this.armynum), {
          name : this.name,
          rank : this.rank
        })    
          set(ref(getDatabase(), 'base/' + base + '/dashboard/bydate/' + (this.indate) +'/stayovn_end/' + this.armynum), {
          name : this.name,
          rank : this.rank
        })           
        }
        else if (this.outtype == 'vacation'){
          set(ref(getDatabase(), 'base/' + base + '/dashboard/bydate/' + (this.outdate) +'/vacation_start/' + this.armynum), {
            name : this.name,
            rank : this.rank
            })
          
                   
          for(var i = 1; i < between_date(get_date_str(to_date2(this.indate)),get_date_str(to_date2(this.outdate))); i++){
            set(ref(getDatabase(), 'base/' + base + '/dashboard/bydate/' + get_date_str(get_tomorrow(to_date2(this.outdate), i)) +'/vacation_going/' + this.armynum), {
            name : this.name,
            rank : this.rank
            })          
          }
          set(ref(getDatabase(), 'base/' + base + '/dashboard/bydate/' + (this.indate) +'/vacation_end/' + this.armynum), {
            name : this.name,
            rank : this.rank
            })                      
        }
        else if (this.outtype == 'etc'){
          for(var i = 0; i <= between_date(get_date_str(to_date2(this.indate)),get_date_str(to_date2(this.outdate))); i++){
            set(ref(getDatabase(), 'base/' + base + '/dashboard/bydate/' + get_date_str(get_tomorrow(to_date2(this.outdate), i)) +'/etc/' + this.armynum), {
            name : this.name,
            rank : this.rank
            })          
          }        
        }

      })
      alert('출타 입력 완료!')
      this.$router.go();                                                                          //출타 입력이 완료되면 페이지를 리로드

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

.form-control {
  text-align: center
}

.form-select {
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