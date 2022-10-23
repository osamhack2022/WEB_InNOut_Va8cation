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
                <th class="name">성명</th>
                <th class="rank">계급</th>
                <th class="number">군번</th>
                <th class="outtype">출타종류</th>
                <th class="outdate">출타시작일</th>
                <th class="indate">출타종료일</th>
                <th style="width: 48px;"></th>
              </tr>
              <tr>
                <td>
                  <input class="form-control form-control-sm" type="text" ref="name">
                </td>
                <td>
                  <b-form-select v-model="rank" :options="rank_options" size="sm"></b-form-select>
                </td>
                <td>
                  <input class="form-control form-control-sm" type="select" ref="armynum">
                </td>
                <td>
                  <b-form-select v-model="outtype" :options="out_options" size="sm"></b-form-select>
                </td>
                <td>
                  <input class="form-control form-control-sm" type="date" ref="outdate">
                </td>
                <td>
                  <input class="form-control form-control-sm" type="date" ref="indate">
                </td>
                <td>
                  <button class="btn btn-primary btn-sm"><b>추가</b></button>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in todos" v-bind:key="item.id">
                <th>{{ item.name }}</th>
                <td>{{ item.rank }}</td>
                <td>{{ item.number }}</td>
                <td>{{ item.date }}</td>
                <td>{{ item.rule }}</td>
                <td>{{ item.point }}</td>
                <td class="button">
                  <!-- 제거 버튼 목업 -->
                  <button>제거</button>
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
export default {
  name: "InputPoint",
  data() {
    return {
        rank: null, outtype: null,
        rank_options: [
          { value: "PVT", text: '이병' },{ value: "PFC", text: '일병' },{ value: "CPL", text: '상병' },{ value: "SGT", text: '병장' },
          { value: "SSG", text: '하사' },{ value: "SFC", text: '중사' },{ value: "FSG", text: '상사' },{ value: "SGM", text: '원사' },
          { value: "2LT", text: '소위' },{ value: "1LT", text: '중위' },{ value: "CPT", text: '대위' },
          { value: "MAJ", text: '소령' },{ value: "LCL", text: '중령' },{ value: "COL", text: '대령' },
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
    doAdd: function () {
      var date = this.$refs.text;
      var rule = this.$refs.text;
      var point = this.$refs.text;
      var review = this.$refs.text;
      // 입력이 없다면 아무 것도 하지 않음 return
      if (!date.value.length || !rule.value.length || !point.value.length || !review.value.length) {
        return;
      }
      this.rows.push({
        date: date.value,
        rule: rule.value,
        point: point.value,
        review: review.value
      });
      // 입력 양식의 내용 제거하기
      date.value = "",
        rule.value = "",
        point.value = "",
        review.value = "";
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