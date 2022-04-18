// 1. <라이브러리>
// 1-(1) 서버 통신을 위한 필수 라이브러리
const express = require('express');
const path = require('path');
const app = express();

const http = require('http').createServer(app)
http.listen(3216, function(){
    console.log('listening on 3216')
});

// 1-(2) 파일 업로드를 위한 라이브러리
const fileupload = require("express-fileupload");
const cors = require("cors");

/**========================================================================== */

// 2. <미들웨어>
// 2-(1) React 라우팅을 위한 미들웨어 설정
app.use('/', express.static( path.join(__dirname, 'public')))
app.use('/react', express.static(path.join(__dirname, 'motd_react/build')))

// 2-(2) 파일 업로드를 위한 미들웨어
app.use(cors());
app.use(fileupload());
app.use(express.static("files"));

/**========================================================================== */
// 3. <요청 응답 로직>

// 3-(1) 기본
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'public/main.html'))
})

// 3-(2) React 라우팅 : react로 들어온 건 무조건 react로 뿌려준다?
app.get('/react', function(req, res){
    res.sendFile(path.join(__dirname, 'react-project/build/index.html'))
})

// 3-(3) 파일업로드 로직 : 일단은 성공
app.post("/fileUpload", (req, res) => {

    let saveFilepath = path.join( __dirname, "react-project", "build", "/");
    let file = req.files.file;  
    // 여기서 req.files까지가 전체 fromData인거지?
    // 그러니까 .file 찍어서, 파일 자체를 가지고 오는 거고.
    let fileName = file.name;
    // 그리고 그 파일의 이름을 추출
  
    file.mv(saveFilepath+fileName, (err) => {
      if (err) {
        res.status(500).send({ message: "파일 전송 실패", code: 200 });
      }
      res.status(200).send({ message: "파일 전송 성공", code: 200 });
    });
  });












// react router : 유저가 URL 아무거나 입력하면, React HTML을 보내라
// app.get('*', function(req, res){
//     // res.sendFile(path.join(__dirname, 'public/main.html'))
//     res.sendFile(path.join(__dirname, 'react-project/build/index.html'))
// })