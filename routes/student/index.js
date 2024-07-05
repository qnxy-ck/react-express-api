const express = require('express');
const route = express.Router();

route.use((req, res, next) => {
    console.log("有人请求服务器");
    next()
})

const index = [
    {id: "001", name: "tom", age: 18},
    {id: "002", name: "jerry", age: 19},
    {id: "003", name: "tony", age: 120},
]

route.get("/", (req, res) => {
    res.send(index)
})

module.exports = route;