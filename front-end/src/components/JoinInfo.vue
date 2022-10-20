<template>
  <div class="text-center pt-5 pb-4">
    <a href="#">
      <img src="@/assets/images/logo_32_blue.svg" width="64" height="64" alt="">
    </a>
  </div>
  <div class="container-fluid col-8">
    <main>
      <div class="form-header">
        <h4>
          <b>온라인 출타장병현황 IN&OUT</b>
        </h4>
      </div>
      <div class="form mt-4 p-4">
        <form class>
          <div class="form-group">
            <label for="Inputid"><b>아이디</b></label>
            <input type="id" class="form-control" id="Inputid" aria-describedby="idhelp">
          </div>
          <div class="form-group">
            <label for="InputPassword"><b>비밀번호</b></label>
            <input type="password" class="form-control" id="InputPassword">
          </div>
          <div class="form-group">
            <label for="InputPassword2"><b>비밀번호 확인</b></label>
            <input type="password" class="form-control" id="InputPassword2">
          </div>
          <div class="form-group">
            <label for="InputName"><b>성명</b></label>
            <input type="name" class="form-control" id="InputName">
          </div>
          <div class="form-group">
            <label for="InputAuthcode"><b>확인코드</b></label>
            <input type="name" class="form-control" id="InputAuthcode">
          </div>
          <div class="form-group">
            <label for="InputEmail"><b>이메일</b></label>
            <input type="name" class="form-control" id="InputEmail">
          </div>
          <div class="d-flex">
            <!-- <button type="submit" class="btn btn-secondary btn-block"><b>취소</b></button> -->
            <router-link to="/join" class="btn btn-secondary btn-block"><b>취소</b></router-link>
            <button type="submit" class="btn btn-primary btn-block ms-2"><b>다음</b></button>
          </div>
        </form>
      </div>
    </main>
  </div>

</template>

<script>
export default {
  name: "PasswordReset",
  data() {
  }
};
</script>


<style scoped lang="scss">
body {
  height: 100vh;
  margin: 0;
  padding: 0px;
  width: 100%;
}

a {
  text-decoration: none;
}

.callout {
  width: 340px;
  margin: 0 auto;
  padding: 16px;
  border: 1px solid;
  border-radius: 6px;
  border-color: $color-border;
  text-align: center;
}

.txt-btn {
  display: block;
  position: absolute;
  text-align: right;
  top: 434px;
  right: 550px;
}

.el-checkbox {
  display: flex;
  align-items: flex-start;
}

.form-header {
  text-align: center;
  // h3 > b {color: $color-secondary-orange;}
}

.form {
  width: 340px;
  margin: 0 auto;
  padding: 16px;
  border: 1px solid;
  border-radius: 6px;
  border-color: $color-border;
}

.form label {
  margin-bottom: 8px;
}

.form input {
  margin-top: 4px;
  margin-bottom: 16px;
}

.btn-primary {
  background-color: $color-primiary-blue;
  border-color: $color-border;
}

.btn-secondary {
  color: black;
  background-color: $color-background;
  border-color: $color-border;
}

.btn-block {
  display: block;
  width: 100%;
}

.checkbox-inner {
  width: 16px;
  height: 16px;
  margin: 0 8px 0 0;
  border-radius: 4px;
}

.group {
  // margin: 30px 0 0 0;
  padding: 25px;
  border-radius: 10px;
  background-color: #f7f8fc;
}

.group-scroll {
  overflow: auto;
  height: 150px;
  margin: 15px 0;
  padding: 30px;
  border-radius: 10px;
  background-color: #e2e6ed;
}

p {
  display: block;
}
</style>