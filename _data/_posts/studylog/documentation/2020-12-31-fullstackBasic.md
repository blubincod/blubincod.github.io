---
layout: page
title: "풀스택 맛보기1-기본 요소"
author: author1
comments: true
description: > 
    안녕하세요
hide_description: false
sitemap: true
---

* this unordered seed list will be replaced by toc as unordered list 
{:toc}

# 풀스택 맛보기

## 용어 설명

Node.js 
- 바깥에서도 JS를 이용하게 해주는 프로그램

package.json
- 정보(dependencies, bugs, author 등)를 담고 있다.

Dependencies
- 프로젝트에 필요한 것

devDependencies
- 개발자에게 필요한 것

package-lock.json
- 패키지들을 안전하게 지켜준다.

// npm install 할 때 package.json을 꼭 닫고 실행하자(오류 가능성 없애기 위해)


### npm

`npm i express`
- dependencies도 같이 다운로드 됨

`node_modules `
- npm으로 설치한 모든 패키지가 저장

# babel
babeljs.io

```
npm install @babel/core @babel/cli @babel/node -D
```

최신 자바스크립트를 컴파일
- NodeJS가 자바스크립트를 문제없이 이해할 수 있도록 변환

@babel/preset-env
```
npm i @babel/preset-env -D
```

babel을 직접 사용하지 않고 script를 통해서 실행하게 한다.

"scripts": {
    "dev": "babel-node index.js"
  },
  
nodemon
- Node 서버를 이용하면서 파일이 수정됨을 감지하고 자동으로 서버를 재시작해준다.

```
{
  "exec": "babel-node src/server.js"
}

```
`src/server.js`에 대해 babel-node 명령문을 실행시킴

서버 만들기
express - 서버를 쉽게 만들 수 있도록 도와주는 프레임워크

callback

GET - http method

express 사용하기
```JS
import express from "express";
const app = express();

app.listen(3000);

```

## PUG

- 템플릿 엔진
- View를 만드는 것을 도와줌
일일히 코드를 복붙하지 않고 

express 구성 예시
```js
import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("Home"));

const handleListen = () => console.log(`🚀Listening on http://localhost:3000🚀`);
app.listen(3000, handleListen);
```

## get request & post request

[get]
- 검색할 떄 사용
```js
    h4 수정하기
    form(action="/save-changes", method="GET")
        input(name="title" placeholder="게시글 제목" value=post.title, required)
        input(value="저장" type="submit")
```
http://localhost:4000/save-changes?title=abc

=> 위 URL로 GET을 함

💡 `method="get"`은 default이다.

[post]
- 파일을 보내거나 DB에 있는 값을 바꾸는 무언가를 보낼 때 사용.
```js
    h4 수정하기
    form(method="POST")
        input(name="title" placeholder="게시글 제목" value=post.title, required)
        input(value="저장" type="submit")
```
http://localhost:4000/save-changes


=> get과 달리 URL에 title은 표시되지 않는다.

💡 GET & POST 코드정리
변경 전
```js
postRouter.get("/:id(\\d+)/edit", getEdit);
postRouter.post("/:id(\\d+)/edit", postEdit);
```
변경 후 
```js
postRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
```
# MVP CSS
- 직접 css를 구성하기 전 자동으로 css를 적용해줌
<a target="_blank" href="https://andybrewer.github.io/mvp/">MVP CSS 홈페이지</a>

html or pug에 적용
[html]
`<link rel="stylesheet" href="https://unpkg.com/mvp.css">`
[pug]
`link(rel="stylesheet" href="https://unpkg.com/mvp.css")`

## preventDefault
submit을 눌렀을 때 창이 새로고침 되는 것을 방지

## Object <=> String

`stringify`
object -> string

`JOSN.parse()`
string -> object


# 라우터
공통 시작부분을 기반으로 url을 정리해주는 기법


## Export
export default // 한가지만 가능
	import 할 떄 이름 다르게 상관없음
export const fadskljf // 각각 export 가능
	import 할 때 이름을 같게

*** cwd - Current Working Directory

### Conditional

### Iteration
element의 list를 보여준다.


### Mixin
데이터를 받는 partial 일종의 HTML Block

### relative & absolute URL

현재 위치: http://localhost:4000/posts/1

relative
```js
a(href="abc")
```
=> http://localhost:4000/posts/abc
- 페이지 이동 시 현재 위치 대신 abc 페이지를 보여줌

absolute
```js
a(href="/abc")
```
=> http://localhost:4000/edit
- 페이지 이동 시 최상위 폴더의 abc 페이지를 보여줌

URL의 id(=1)를 살리면서 이동 하는 법

```js
a(href=`${post.id}/abc`)
```
=> 현재 위치/abc로 이동하게 된다.

### req
#### req.params
url
#### req.body
form
#### req.query
url
```js
    form(method="GET")
        input(placeholder="제목 입력..." name="keyword" type="text")
        input(value="검색" type="submit")
```
💡 form에 name이 있어야 req.query로 값을 받아올 수 있다.

```js
export const search = (req, res) => {
  console.log(req.query);
  return res.render("Search", { pageTitle: "검색" });
};
```

### ternary operate

*** default로 method="GET"


### app.use(express.urlencoded({ extended: true }));
HTML을 통역 해준다.

# Chocolatey 
Linux에서의 apt(apt-get), yum이나 macOS에서의 Homebrew처럼 패키지를 설치/업데이트/제거 등 관리하는 데에 사용하는 Windows용 프로그램입니다.

# MongoDB
Mongoose // Node.js와의 다리역할 , mongoDB에게 데이터를 전해줌 

## 정규표현식
### hexadeciaml String
[0-9a-f]{24} // 0부터 9 그리고 a부터 f로 구성된 24자리 문자열

### array -> string

### 배열 split
"a,b,c,d".split(",");

결과 ["a","b","c","d"]

### map

```js
"a,b,c,d".split(",").map(word => `#${word}`);
```

결과 ["#a","#b","#c","#d"]

### regex(레직스)

i: 대소문자 구분 X
예시. search
```js
if (keyword) {
    posts = await Post.find({
      title: {
        $regex: new RegExp(keyword, "i"),
      },
    });
  }
```
<hr>

# Schemas
몽구스의 모든 것은 스키마로 시작합니다.
각 스키마는 MongoDB 컬렉션에 매핑되고 해당 컬렉션 내 문서의 모양을 정의합니다.

# Models
mongoose.model(modelName, schema):
모델은 스키마 정의에서 컴파일된 멋진 생성자입니다. 모델의 인스턴스를 document라고 합니다. 
모델은 기본 MongoDB 데이터베이스에서 문서를 만들고 읽습니다.
<hr>

# Callback & Promise

## callback
callback - 기다림

## Promise

try {
	// await이 있는 곳에 에러가 존재한다면 바로 catch를 실행한다.
} catch {
}


middleware in Mongoose
pre 

hook


req.params // url id 
req.body // form에서 input으로 받은 내용
req.query // url data

hashing

bcrypt
-
- rainbow table을 막아준다.

saltRound
- 반복해서 hashing

세션 - 브라우저와 백엔드 사이의 memory, history
- 세션, 세션id는 브라우저를 기억하는 방식 중 하나이다.

sudo mongod --dbpath ~/data/db
<hr>
...
<hr>

# webpack

npm i webpack-cli
webpack.js.org 참고
entry - 소스코드

# WebSocket
실시간 채팅을 위한 프로토콜

HTTP      => stateless
WebSocket => 양방향(bi-directionl) 연결 

* stateless: server는 유저가 누군지 잊어버림

## ws
WebSocket for Node.js

설치
`npm install ws`

* socket: 브라우저와 user(Server)의 연결

### Port 공유
2개의 프로토콜(http와 ws)을 같은 port로 공유하기
```js
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
```

### socket.io
ws(websocket)를 이용한 FrameWork
모든 browser와 device에서 사용이 가능하다.

<a href="https://socket.io/" target=_blank>socket.io 홈페이지</a>

프론트엔드에 설치를 위해 socket.io는 URL을 준다. (websocket의 부가기능이 아니기 때문)
`http://localhost:3000/socket.io/socket.io.js`

io
- 자동으로 back-end socket.io와 연결 해주는 함수이다.


# Adapter
다른 서버들 사이에 실시간 어플리케이션을 동기화
### count

### socket.io Admin UI
참고 <a href="https://socket.io/docs/v4/admin-ui/#current-features" target=_blank>socket.io doc</a>
설치 `npm install @socket.io/admin-ui`

사용 `import { instrument } from "@socket.io/admin-ui";`

### webRTC(Web Real Time Communication)
서버를 거치지 않고 실시간 커뮤니케이션을 가능하게 해줌(Peer to Peer)

signaling을 통해서 브라우저를 확인하고 실시간으로 연결해준다.

1. 처음 방을 만든 곳이 peer A
2. peer A가 초대장을 만듦

※ Web RTC 보류 ※
Windows OS 에서 동일한 기기는 두 개 이상의 리소스에서 접근 불가
Mac OS 에서는 두 개 이상의 리소스 접근 가능 

#### 비교
WebSocket
```js
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const onSocketClose = () => console.log("💧 Disconnected from the Browser 💧");

const backSockets = [];

wss.on("connection", (backSocket) => {
  backSockets.push(backSocket);
  backSocket["nickname"] = "Anonymous";
  console.log("🔥 Connected to Browser 🔥");
  backSocket.on("close", onSocketClose);
  backSocket.on("message", (msg) => {
    const message = JSON.parse(msg);
    switch (message.type) {
      case "new_message":
        backSockets.forEach((aSocket) => aSocket.send(`${backSocket.nickname}: ${message.payload}`));
        break;
      case "nickname":
        backSocket["nickname"] = message.payload;
        break;
    }
  }); 
});
```
socket.io
```js
const httpServer = http.createServer(app);
const wsServer = new Server(httpServer);

wsServer.on("connection", (socket) => {
  socket["nickname"] = "Anonymous";
  socket.onAny((event) => {
    console.log(`Socket Event: ${event}`);
  });
  socket.on("enter_room", (roomName, done) => {
    socket.join(roomName);
    done();
    socket.to(roomName).emit("welcome", socket.nickname);
  });
  socket.on("disconnecting", () => {
    socket.rooms.forEach((room) => socket.to(room).emit("bye", socket.nickname));
  });
  socket.on("new_message", (msg, room, done) => {
    socket.to(room).emit("new_message", `${socket.nickname}: ${msg}`);
    done();
  });
  socket.on("nickname", (nickname) => (socket["nickname"] = nickname));
});
```

# gh-pages를 이용한 배포

npm i gh-pages
build
script 생성
```js
"scripts": {
    "deploy": "gh-pages -d [폴더명]"
  },
```
package.json에 추가
```js
"homepage": "https://[깃허브 명].github.io/[레포지토리 명]"
```
script 실행
`npm run deploy`

<hr>
**참고** 
<li><a target="_blank" href="https://nomadcoders.co/?gclid=CjwKCAjw2f-VBhAsEiwAO4lNeGxUb10hQEsnXWufl6NE_TMbZVomtR59HvzfaaYKAIONyRIsWAW8QxoCRK0QAvD_BwE">Nomad Coders</a></li>

Continue with [express 서버 만들기](2021-01-01-express.md){:.heading.flip-title}
{:.read-more}
