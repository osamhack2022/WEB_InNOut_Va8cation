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
          <b>비밀번호 초기화</b>
        </h4>
      </div>
      <div class="form mt-4 p-4">
        <form class>
          <div class="form-group mb-4">
            <label for="exampleInputEmail1"><b>이메일</b></label>
            <div class="el-input">
              <input type="email" class="form-control" id="exampleInputEmail1" placeholder="회원가입 시 등록한 이메일 주소">
            </div>
            <span class="text-muted"></span>
            <button type="submit" class="btn btn-primary btn-block"><b>인증번호 받기</b></button>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1"><b>인증번호</b></label>
            <div class = "el-input">
              <input type="password" class="form-control" id="exampleInputAuthnumber">
            </div>
            <a href="#!" class="txt-btn">인증번호 확인</a>
          </div>
          <button type="submit" class="btn btn-primary btn-block"><b>비밀번호 초기화</b></button>
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

.btn-block {
  display: block;
  width: 100%;
}

p {
  display: block;
}
</style>