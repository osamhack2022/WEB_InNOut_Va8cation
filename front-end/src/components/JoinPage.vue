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
          <b>약관 동의</b>
        </h4>
      </div>
      <div class="form mt-4 p-4">
        <form class>
          <div class="form-group mb-4">
            <label class="el-checkbox">
              <input type="checkbox" class="checkbox-inner" id="checkbox" v-model="checked" />
              <label for="checkbox">{{ checked }}</label>
              <label for="exampleInputEmail1">이용약관, 개인정보 수집 및 이용에 모두 동의합니다.</label>
            </label>
            <div class="el-input">
              <input type="email" class="form-control" id="exampleInputEmail1" placeholder="회원가입 시 등록한 이메일 주소">
            </div>
            <span class="text-muted"></span>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1"><b>인증번호</b></label>
            <div class = "el-input">
              <input type="password" class="form-control" id="exampleInputAuthnumber">
            </div>
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
  width: 544px;
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

.checkbox-inner {
  width: 16px;
  height: 16px;    
  margin: 0 8px 0 0;
  border-radius: 4px;
}

p {
  display: block;
}
</style>