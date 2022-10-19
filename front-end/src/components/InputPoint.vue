<template>
  <div>
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
    <h6><b>상점 추가</b></h6>
    <form class="add-form" v-on:submit.prevent="doAdd">
      <!-- 내용 입력 양식 -->
      일시 <input type="text" ref="date">
      기준 <input type="text" ref="rule">
      점수 <input type="number" ref="point">
      담당간부 <input type="review" ref="review">
      <!-- 추가 버튼 목업 -->
      <button type="submit">추가</button>
    </form>
  </div>
</template>


<script>
export default {
  name: "OutStatus",
  data() {
    // rows: []
  },
  methods: {
    doAdd: function () {
      var date = this.$refs.text
      var rule = this.$refs.text
      var point = this.$refs.text
      var review = this.$refs.text
      // 입력이 없다면 아무 것도 하지 않음 return
      if (!date.value.length || !rule.value.length || !point.value.length || !review.value.length) {
        return
      }
      this.rows.push({
        date: date.value,
        rule: rule.value,
        point: point.value,
        review: review.value
      })
      // 입력 양식의 내용 제거하기
      date.value = '',
      rule.value = '',
      point.value = '',
      review.value = ''
    }
  }
};
</script>


<style scoped lang="scss">

</style>