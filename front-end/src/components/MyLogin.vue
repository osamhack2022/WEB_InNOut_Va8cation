<template>
  <div class="text-center pt-5 pb-4">
    <a href="#">
      <img src="@/assets/images/logo_32_blue.svg" width="64" height="64" alt="">
    </a>
  </div>
  <div class="container-fluid col-8">
    <main>
      <div class="auth-form-header">
        <h3>
          <b>온라인 출타장병현황 IN&OUT</b>
        </h3>
      </div>
      <div class="auth-form mt-3">
        <form class>
          <div class="form-group">
            <label for="exampleInputEmail1">아이디</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
              placeholder="username">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">비밀번호</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="password">
          </div>
          <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" class="btn btn-primary">로그인</button>
        </form>
      </div>
    </main>
  </div>

</template>

<script>
export default {
  name: "MyLogin",
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

.auth-form-header {
  text-align: center;
  h3>b{
    color: $color-secondary-orange;
  }
}

.auth-form {
  width: 340px;
  margin: 0 auto;
  padding: 16px;
  border: 1px solid;
  border-radius: 6px;
}

.auth-form label {
  margin-bottom: 8px
}

.auth-form input {
  margin-top: 4px;
  margin-bottom: 16px;
}
</style>