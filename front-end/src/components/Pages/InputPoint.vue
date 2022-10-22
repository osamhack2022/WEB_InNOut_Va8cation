<template>
  <AppHeader />
  <div class="container-fluid col-8">
    <main>
      <div class="headline p-4">
        <h1>
          <b>상점추가</b>
        </h1>
      </div>
      <form class="add-form d-flex" v-on:submit.prevent="doAdd">
        <!-- 내용 입력 양식 -->
        일시 <input type="text" ref="date">
        기준 <input type="text" ref="rule">
        점수 <input type="number" ref="point">
        담당간부 <input type="review" ref="review">
        <!-- 추가 버튼 목업 -->
        <button type="submit">추가</button>
      </form>
      <b-card class="shadow my-4">
        <div class="container-fluid p-0 d-flex justify-content-between">
          <table>
            <thead>
              <tr>
                <th class="name">성명</th>
                <th class="rank">계급</th>
                <th class="number">군번</th>
                <th class="date">일시</th>
                <th class="rule">기준</th>
                <th class="point">점수</th>
                <th class="review">담당간부</th>
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
        // rows: []
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

.headline {
  text-align: center;
  // h3 > b {color: $color-secondary-orange;}
}
</style>