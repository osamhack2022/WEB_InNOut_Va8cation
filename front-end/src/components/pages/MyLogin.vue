<template>                                                                          <!-- 로그인 페이지-->
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
            <label for="exampleInputEmail1"><b>아이디</b></label>
            <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
              placeholder="e-mail">                                                                                       <!--아이디(이메일) 입력-->
          </div>
          <div class="form-group">
            <div class="d-flex justify-content-between">
              <label for="exampleInputPassword1"><b>비밀번호</b></label>                                                  <!--비밀번호 입력-->
              <router-link to="/passwordreset" class="a">비밀번호 초기화</router-link>                                     <!--비밀번호 초기화면 페이지 이동-->
            </div>
            <input type="password" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="password">
          </div>
          <router-link to="/" v-on:click="signIn" class="btn btn-primary btn-block">로그인</router-link>                      <!--로그인 함수-->
        </form>
      </div>
      <div class="callout mt-3 p-4">
        처음이신가요?
      <router-link to="/join" class="a">계정 만들기</router-link>                                                         <!--회원가입 페이지 이동-->
      </div>
    </main>
  </div>

</template>

<script>
    import firebase from 'firebase/compat/app';
    import 'firebase/compat/auth';
    import 'firebase/compat/firestore';
    
    export default {
      name: 'signIn',
      data() {                                                                //로그인에 사용되는 변수
        return{
          email: '',
          password: ''
        }
      },
      methods: {
      goUrl() {                                                                 //리로드 함수
        this.$router.push("")
      },
      signIn() {                                                                //회원가입 함수

          firebase.auth().signInWithEmailAndPassword(this.email, this.password) //파이어베이스 authentication 이메일과 비밀번호로 로그인 함수
          .then(function(firebaseUser){                                         //로그인 성공
            loginSuccess(firebaseUser)
          })
          .catch(function(error) {                                              //로그인 실패 오류 처리
            // Handle Errors here.
            
            var errorCode = error.code;
            var errorMessage = error.message;

            if (errorCode === 'auth/wrong-password') {
              alert('비밀번호가 일치하지 않습니다.');
              
            } 
            alert(errorMessage);
            console.log(error);
            
          })
          function loginSuccess(firebaseUser){                                  //로그인 성공시 홈화면으로 이동
            //this.$router.push("/home")
            window.location.href = "/home"
          }

          
                        
        },
      }
    }
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