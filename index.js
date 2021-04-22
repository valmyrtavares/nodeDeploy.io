const express = require('express')
const app = express();

app.get("/", (req, res)=>{
    res.send("Rolando muito bem")
})


app.listen(8000, ()=>{
    console.log("Estamos na prta 8000")
})