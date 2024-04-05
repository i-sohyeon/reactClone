npm i --save-dev @types/react-router-dom react-query
npm i react-router-dom@5.3.0
Nested Router 중첩된 라우터

## 컴포넌트 생성
src/routes/Coin.tsx
src/routes/Coins.tsx
src/Router.tsx -> App.tsx에 import

### Switch : 한번에 하나의 Route를 렌더링
### URL의 파라미터 부분을 잡아내고 싶을 때, useParams 또는 훅 사용

-------

# css 셋업
## 방법1 $npm i styled-reset
  import { Reset } from 'styled-reset'

## 방법2 styled component 적용
https://github.com/zacanger/styled-reset/blob/master/src/index.ts

createGlobalStyle


# a 태그를 사용하면 페이지가 새로고침 되기 때문에  react-router-dom을 사용한 link component 사용


# API로 부터 데이터 가져오기 fetch
typescript는 interface를 통해서 데이터가 어떻게 생겼는지 그려줘야 함.

# useEffect : useEffect function은 어떻게 코드를 실행 시킬지 설정할 수 있음.
### component가 생성 될때 코드를 한번만 실행

#### async
function 앞에 async를 붙이면 해당 함수는 항상 프라미스를 반환.
프라미스가 아닌것은 프라미스로 감싸서 반환

#### await
await는 async함수 안에서만 동작.
promise.then보다 간단하게 쓸수 있는 문법


https://cryptoicon-api.vercel.app/api/icon/btc


Object.keys(temp1)
Object.keys(temp1).join()

Object.values(temp1)
Object.values(temp1).map(v => typeof v)

route는 path를 가져야 함.

alt + shift + i 라인 맨끝에 커서

# hook
useRouteMatch

# react Query
npm install react-query
npm i @tanstack/react-query (자동 완성 안되는 에러날 때 새로 설치하는 방법)

react query를 사용하기 위해선 fetcher 함수 생성 필요

src/api.ts -> fetcher 함수를 만들 파일
fetcher함수는 fetch promise를 꼭 return 해줘야 함.

npm install --save-dev eslint-plugin-react

## APEXCHART
docs -> intergrations -> react
npm install --save react-apexcharts apexcharts
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script src="https://cdn.jsdelivr.net/npm/react-apexcharts"></script>


darkmode
isdark: App -> router -> Coin -> Chart

# recoil
npm install recoil

1. index.tsx : index를 RecoilRoot로 감싸기
2. atom으로 오는 진짜 value로 기존 코드 수정
3. atoms.ts : 새로운 파일 생성
  - atom은 두가지를 요구
  - 첫번째로 key => 유일해야함
  - 기본값
4. App.tsx useRecoilValue

const isDark = useRecoilValue(isDarkAtom)
App.tsx에서 이 component를 isDarkAtom의 value로 연결

어떤 컴포넌트에 대해서도 atom은 독립적
atom의 값을 수정하려면 modifier 함수 사용

npx create-react-app myApp --template typescript
npm i --save-dev @types/styled-components
npm i styled-components
npm i recoil

npm install react-hook-form
react-hook-form을 사용하지 않으면 코드가 길어짐
form에 많은 state를 등록해야함
사용하기 위해선 useForm 이라는 hook을 import해야한다.

useForm 작업할 땐, handle submit 받아오기