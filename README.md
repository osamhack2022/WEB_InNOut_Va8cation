# IN&OUT
![Logo](https://user-images.githubusercontent.com/55483479/192314612-2734729e-9ff9-4002-927f-2aeb55418a77.png)

온라인 출타장병현황 IN&OUT

## 📣 프로젝트 소개
### 🎫 프로젝트 개발 동기
> **"국군 창군 74년 이래에 유동병력현황이 일치한 적이 없다"**
>> \- *인사실무자 사이에 떠도는 유서깊은 농담* \-

당직근무자의 주요 임무 중 하나는 총기, 탄약 그리고 **인원**을 파악하는 것입니다.

그러나 휴가를 종합하는 행정병부터 이를 유지하는 당직근무자까지 유동병력 파악에 어려움을 겪는 것을 자주 볼 수 있었습니다. 

여러 차례 장병들과 해당 문제를 논의하면서, 용사들의 상점과 유동병력현황이 일치하지 않는 원인을 크게 **세 가지**로 구분할 수 있었습니다.

1. 외출/외박/휴가 등 출타를 승인하고 종합하는 절차가 일원화되지 않고 유선으로 파악하는 경우가 많음
2. 유동병력이 종합된 문서가 가시성이 떨어져 당직근무자가 출타현황을 한눈에 파악하기 어려움
3. 수기로 작성된 상 전산화하는 과정에서 누락이 발생

위 문제를 해결하고자 팀 'Va8cation'을 형성하였고,
온라인 출타장병현황 ‘IN&OUT’를 기획하게 되었습니다.

### 🎯 프로젝트 개발 목표
팀 Va8cation의 프로젝트 IN&OUT의 개발목표는 다음과 같습니다.
1. 당직근무자가 부대의 출타현황을 한눈에 알아보기 쉬운 서비스를 제작.
2. 출타정보와 상점부여기록을 DB에 정교하게 저장하여 쉽게 조회할 수 있는 서비스를 제작.

## 🖥 지원 브라우저 안내 (Supproted Browsers)
- Internet Explorer 8 이상 버전(Internet Explorer 11 제외)
- ECMAScript5 지원 브라우저(ex. Firefox, Chrome, Safari)

## 📘 기술 스택 (Tech Stack) 

### DB
<img src="https://img.shields.io/badge/firebase-FFFFFF?style=for-the-badge&logo=firebase&logoColor=orange"/>

### Front-end
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white">

### Design
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

## 💾 설치 안내 (How to Install)
```
$ git clone https://github.com/osamhack2022-v2/WEB_InNOut_Va8cation.git
$ yarn or npm install
$ yarn run dev or npm run serve
```

## ✔ 기능 설명 및 프로젝트 사용법 (Project Guide)

### 📝 회원가입

-------------
> **IN&OUT서비스를 이용하기 위해 계정을 등록하는 페이지입니다.** 

 회원가입시 이메일, 비밀번호(최소 6자리 이상), 성명, 군번, 확인코드를 입력해야합니다.
 
_IN&OUT 서비스는 계정레벨, 부대번호, 대대번호를 식별하기 위한 확인코드를 사전에 JoinInfo.vue에 등록해야 합니다._

 계정레벨은 다음과 같으며 계정레벨별로 접근권한이 상이합니다.
 

#### 🛠 인사 간부 계정
- 부대 인원 리스트 관리 가능
- 외출/외박/휴가로 인한 출타 이력 등록
- 출타현황 대시보드 열람 가능
- 용사 상점 등록
#### 💂‍ 간부 계정
- 외출/외박/휴가로 인한 출타 이력 등록
- 출타현황 대시보드 열람 가능
- 용사 상점 등록
#### 💂‍♂️ 용사 계정
- 출타현황 대시보드 열람 가능
- 본인이 소유한 상점 획득 이력 열람


> **데모를 위한 테스트부대 코드는 다음과 같습니다.**
>> **5678부대 인사간부코드** 5678admin%
>> 
>> **5678부대 1대대 간부코드** 5678officer!1
>> 
>> **5678부대 2대대 간부코드** 5678officer!2
>> 
>> **5678부대 1대대 용사코드** 5678user@1
>> 
>> **5678부대 2대대 용사코드** 5678user@2

### 🔑 로그인

-------------
> **IN&OUT서비스를 이용하기 위해 로그인하는 페이지입니다.**
 
 로그인화면에서 회원가입시 입력한 이메일, 비밀번호를 사용하여 로그인할 수 있습니다.

### ✉ 비밀번호 초기화

-------------
> **분실한 비밀번호를 초기화할 수 있는 이메일을 발송합니다.**

 비밀번호 분실 시 비밀번호 초기화 화면에서 계정의 이메일 주소를 입력하면 이메일 주소로 비밀번호 초기화 메일이 발송됩니다.
 
 메일의 링크를 클릭하여 비밀번호 초기화를 진행할 수 있습니다.


### 🧾 출타현황(인사 간부, 간부, 용사)

-----------
> **서비스의 핵심 기능이자 부대의 출타현황을 한눈에 확인할 수 있는 페이지입니다.** 
>
 Datepicker를 활용하여 원하는 날짜를 선택하고, 날짜설정 버튼을 누르면 해당 날짜의 부대 출타현황이 조회됩니다.
 
 해당 날짜의 총원, 열외, 현재원을 확인할 수 있고 열외내용 별 인원수와 출타 장병의 계급과 성명까지 확인할 수 있습니다.

### ⌨ 출타입력(인사 간부, 간부)

-----------
> **장병의 승인된 출타 일정을 등록하기 위한 페이지입니다.**

 출타 인원의 성명, 계급, 군번, 출타종류(휴가, 외박, 외출, 기타), 출타시작일, 출타종료일을 입력한 뒤 추가버튼을 누르면 DB에 출타정보가 저장됩니다.

### ⌨ 상점입력/조회(인사 간부, 간부)**(용사는 조회만 가능)**

----------
> **용사에게 부여한 상점을 종합하기 위한 페이지입니다.**
 
 상점을 부여받는 용사의 성명, 계급, 군번, 상점부여일시, 상점부여기준, 점수, 담당간부성명을 입력한 뒤 추가버튼을 누르면 DB에 상점 정보가 저장됩니다.
 
 이후 하단에서 상점부여기록을 확인할 수 있습니다.
 
### ⚙ 환경설정(인사 간부)

-----------
> **해당 부대의 연명부를 관리하기 위한 페이지입니다.**
 
 장병 정보추가 란에서 추가하고 싶은 장병의 성명, 군번, 대대를 입력하고 추가버튼을 누르면 DB에 장병 정보가 추가됩니다.
 
## 👥 팀 정보 (Team Information)
### **Team 🏖Va8cation🏖**
### 👤 팀원 소개
#### 팀장 | Lee Dong Hyeop([labyrinth03](https://github.com/labyrinth03)) 
- Team leader, Front-end, DB
- Contact : (leedong1003@naver.com)
#### 팀원 | Moon Gyu Seong([Betadoggy](https://github.com/Betadoggy))
- Front-end, Design
- Contact : (mgs4786@naver.com)

## 📚저작권 및 사용권 정보 (Copyleft / End User License)
This project is licensed under the terms of the MIT license.
