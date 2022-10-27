<template>
  <AppHeader />
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
                  <input class="form-control form-control-sm" v-model="row.name" type="text" ref="name">
                </td>
                <td>
                  <b-form-select v-model="row.rank" :options="rank_options" size="sm"></b-form-select>
                </td>
                <td>
                  <input v-model="row.armynum" class="form-control form-control-sm" type="select" ref="armynum">
                </td>
                <td>
                  <input v-model="row.date" class="form-control form-control-sm" type="date" ref="date">
                </td>
                <td>
                  <b-form-select v-model="row.rule" :options="rules" size="sm"></b-form-select>
                </td>
                <td>
                  <input v-model="row.point" class="form-control form-control-sm" type="number" ref="point">
                </td>
                <td>
                  <input v-model="row.manager" class="form-control form-control-sm" type="text" ref="manager">
                </td>
                <td>
                  <button class="btn btn-primary btn-sm"><b>추가</b></button>
                  <!-- <button class="btn btn-primary btn-sm" @click="addRow(index)"><b>추가</b></button> -->
                  <!-- <button class="btn btn-danger btn-sm" @click="removeRow(index)"><b>제거</b></button> -->
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
import AppHeader from '../AppHeader.vue';
export default {
  name: "InputPoint",
  data() {
    return {
      rows: [
        { name: "굳건이", rank: "SGT", armynum: "21-1234567", date: "2022-10-28", rule: "1-1", point: 3, manager: "문규성" }
      ],
      rank: null, outtype: null,
      rank_options: [
        { value: "PVT", text: '이병' }, { value: "PFC", text: '일병' }, { value: "CPL", text: '상병' }, { value: "SGT", text: '병장' },
      ],
      rules: [
        { value: "1-1", text: '생활관 정리정돈 우수' },
        { value: "1-2", text: '머시기 우수' },
        { value: "2-1", text: '근무 태도 우수' },
        { value: "3-1", text: '어쩌구 저쩌구 우수' },
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
    removeRow: function (index) {
      this.rows.splice(index, 1)
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