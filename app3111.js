const express = require("express");
const app = express();
const port = 3111;

app.get("/", (req, res) =>{
    res.send("JW 홈페이지에 오신걸 환영합니다.!!")
})

app.listen(port,()=>{
    console.log(`서버가 실행됩니다. http://localhost:${port}`);
})
