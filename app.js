var express = require('express');
var app = express();
var cors=require('cors')
require('dotenv').config()

const userRoutes=require('./router/user.js')

app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())


app.use('/users',userRoutes)

app.listen(3000,function(){
    console.log('listen at port 3000')
});
