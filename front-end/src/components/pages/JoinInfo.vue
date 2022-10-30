<template>                                                                                        <!--회원가입 정보 입력 페이지-->
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
        
          <div class="form-group">                                                                  <!-- 회원가입에 필요한 각각의 정보 입력 구간-->
            <label for="InputEmail"><b>이메일</b></label>
            <input type="text" v-model="email" class="form-control" id="InputEmail" placeholder="이메일 입력">
          </div>
          <div class="form-group">
            <label for="InputPassword"><b>비밀번호</b></label>
            <input type="password" v-model="password" class="form-control" id="InputPassword" placeholder="최소 6자리 이상 입력">
          </div>
          <div class="form-group">
            <label for="InputPassword2"><b>비밀번호 확인</b></label>
            <input type="password" v-model="confirm" class="form-control" id="InputPassword2" placeholder="최소 6자리 이상 입력">
          </div>
          <div class="form-group">
            <label for="InputName"><b>성명</b></label>
            <input type="name" v-model="name" class="form-control" id="InputName" placeholder="성명 입력">
          </div>
          <div class="form-group">
            <label for="InputName"><b>군번</b></label>
            <input type="name" v-model="solnum" class="form-control" id="InputName" placeholder="군번 입력">
          </div>
          <div class="form-group">
            <label for="InputAuthcode"><b>확인코드</b></label>
            <input type="name" v-model="code" class="form-control" id="InputAuthcode" placeholder="부대에서 발급받은 코드 입력">
          </div>


          <div class="d-flex">
            <!-- <button type="submit" class="btn btn-secondary btn-block"><b>취소</b></button> -->
            <router-link to="/join" class="btn btn-secondary btn-block"><b>취소</b></router-link>                 <!-- 취소하면 이전 약관동의 페이지로-->
            <button type="submit" v-on:click="signUp" class="btn btn-primary btn-block ms-2"><b>가입</b></button> <!-- 가입을 누르면 가입 함수 실행-->
          </div>
        
      </div>
    </main>
  </div>
</template>

<script>
import { addMapping } from '@jridgewell/gen-mapping';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getDatabase, set, ref } from "firebase/database"
import { get } from 'lodash';
export default {

  name: "signUp",
  data() {                                        //해당 페이지에 사용되는 변수
    return {
      email:'',
      password:'',
      confirm:'',  
      name:'',
      code:'',
      solnum:'',
    }
  },


methods: {
    signUp() {                                      //회원가입 함수
      console.log("Signup", this.email, this.password, this.confirm, this.code, this.name);

      if(!this.name) {                                                                          //회원가입에 필요한 정보들 중 어떠한 것이라도 누락되면 가입 불가 조치
        alert("입력된 이름이 없습니다.");
        return;
      }

      if(!this.code) {
        alert("입력된 코드가 없습니다.");
        return;
      }

      if(!this.email) {
        alert("입력된 email 주소가 없습니다.");
        return;
      }
 
      if(!this.password) {
        alert("입력된 비밀번호가 없습니다.");
        return;
      }
 
      if(!this.confirm) {
        alert("입력된 비밀번호 확인이 없습니다.");
        return;
      }

      if(!this.solnum) {
        alert("입력된 군번이 없습니다.");
        return;
      }
 
      if(this.password != this.confirm) {                                                               //비밀번호와 비밀번호 확인이 일치하지 않으면 함수 종료
        alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
        return;
      }
      var type = ''
      var base = ''
      var battalion = ''


      // 확인코드와 해당 코드에 할당되는 계정레벨, 부대번호, 대대번호를 하단에 if문으로 작성해주시면 됩니다.

      
        if(this.code == "5678admin%"){                                        //확인코드로 계정레벨, 부대번호, 대대번호를 정하는 구간
          alert("관리자 계정입니다.")
          type = 'admin'
          base = '5678'
          battalion = 'all'
        } 
        else if(this.code == "5678officer!1"){
          type = "officer"
          base ='5678'
          battalion = '1BN'
        } 
        else if(this.code == "5678officer!2"){
          type = "officer"
          base ='5678'
          battalion = '2BN'
        } 
        else if(this.code == "5678user@1"){
          type = "soldier"
          base = '5678'  
          battalion = '1BN'
        }
        else if(this.code == "5678user@2"){
          type = "soldier"
          base = '5678'
          battalion = '2BN'
        }
        else{
          alert("유효하지 않은 코드입니다.")                                        //유효하지 않은코드일 경우 가입 불가
          return;
        }      
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)   //파이어베이스에 이메일과 비밀번호로 가입정보를 저장하는 함수
      .then((userCredential)=> {
        const db = getDatabase()
        set(ref(db, 'user/'+ userCredential.user.uid), {                          //파이어베이스 실시간데이터베이스에 '부모값을 사용자의 uid, 자식값을 가입 필수 정보'를 등록
          name : this.name,
          email : this.email,
          base : base,
          battalion : battalion,
          num : this.solnum,
          level : type
        })

        alert('가입 완료');
        this.$router.push("/")                                                    //가입 완료 시 로그인 페이지로 이동
      })
      .catch((error)=> {                                                          //회원 가입 오류 처리
       // Handle Errors here.
       var errorCode = error.code;
       var errorMessage = error.message;
       if (errorCode == 'auth/weak-password') {
          alert('비밀번호는 최소 6자리 이상이어야 합니다.');
       }
       else {
         alert(errorMessage);
       }
       console.log(error);
       return;
      })

       
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