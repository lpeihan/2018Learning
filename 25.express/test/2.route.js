const express = require('../lib/express')
const app = express()


app.get('/',function(req,res,next) {
    console.log(1)
    next()
})
app.get('/2',function(req,res,next) {
    console.log(2)
    next()
})
app.get('/', function (req, res, next) {
    console.log(3)
    res.end('ok')
})
app.listen(3000)