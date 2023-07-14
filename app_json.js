const express = require("express");
const app = express();
const port = 3000;
const testJson = require("./test.json")

app.get("/",(req, res) =>{
    res.send(JSON.stringify(testJson));
})

app.listen(port, ()=>{
    console.log(`서버가 실행됩니다. http://localhost:${port}`)
})