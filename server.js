// -------------------------------------------load packages------------------------------------------------
const express = require('express')
const path = require('path')
const ejsMate = require('ejs-mate')
const mongoose = require('mongoose');
const session = require("express-session")
const methodOverride = require('method-override')
const app = express()

//--------------------------------------connect to database--------------------------
mongoose.connect('mongodb://localhost:27017/socs',{useNewUrlParser: true, useUnifiedTopology:true,useCreateIndex:true})
.then(()=>{
    console.log("Connection to the socs database has been established successfully.")
})
.catch(err=>{
    console.log('An error occured while trying to connect to the socs database:')
    console.log(err)
})

//----------------------------------------configure server--------------------------
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'/views'))
app.engine('ejs',ejsMate)

//------------------------------------set up middlewares------------------------------
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use(session({secret:'comp307socsprojectsecret', resave: true, saveUninitialized:true}))
app.use(express.static(__dirname + '/public'))
//-----------------------------------------load router-------------------------------
const newsRouter = require('./routes/newsRouter')
const loginRouter = require('./routes/loginRouter')
const logoutRouter = require('./routes/logoutRouter')
const adminRouter = require('./routes/adminRouter')
const postingRouter = require('./routes/postingRouter')
const prospectiveRouter = require('./routes/prospectiveRouter')
const academicRouter = require('./routes/academicRouter')
const researchRouter = require('./routes/researchRouter')
const peopleRouter = require('./routes/peopleRouter')
const aboutRouter = require('./routes/aboutRouter')
const supportRouter = require('./routes/supportRouter')
const contactRouter = require('./routes/contactRouter')

//----------------------------------set up router middlewares------------------------
app.use('/news',newsRouter)
app.use('/login',loginRouter)
app.use('/logout',logoutRouter)
app.use('/admin',adminRouter)
app.use('/posting',postingRouter)
app.use('/prospective',prospectiveRouter)
app.use('/academic',academicRouter)
app.use('/research',researchRouter)
app.use('/people',peopleRouter)
app.use('/about',aboutRouter)
app.use('/support',supportRouter)
app.use('/contact',contactRouter)


//---------main page routing------------
app.get('/',(req,res)=>{
    res.render('main')
})


//------------------------------------posting--------------------
app.get('/posting',(req,res)=>{
    res.render('posting/posting')
})

app.get('/admin/posting/add',(req,res)=>{

})

//----------------------------------------listening to port------------------------------------------
app.listen(2000,(req,res)=>{
    console.log("Listening to port: 2000")
})


