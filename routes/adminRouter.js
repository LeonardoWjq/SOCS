//-----------------------------------------loading modules--------------------------------------//
const express = require('express')
const router = express.Router()
const User = require('../models/user')
const News = require('../models/news')
const Posting = require('../models/posting')
const Course = require('../models/course')
//-----------------------------------------helper functions------------------------------------//
const newsHelper = require('../utils/newsUtil');
const newsToRecord = newsHelper.toRecord;
const newsToResponse = newsHelper.toResponse;

const postingHelper = require('../utils/postingUtil');
const postingToRecord = postingHelper.toRecord;
const postingToResponse = postingHelper.toResponse;
//-------------------------------------------middleware-----------------------------------------//
const requireLogin = require('../utils/needValidateUtil')
router.use(requireLogin)

//-----------------------------------------admin main page routing--------------------------------------//
router.get('/',(req,res)=>{
    const {email} =  req.query
    res.render('./admin/center',{email})
})



//------------------------------------------manage news routing-----------------------------------------//

//manage news page
router.get('/news/manage',async (req,res)=>{
    const news = await News.findAll()
    res.render('admin/news/manageNews',{news})
})

//show add news view
router.get('/news/add',(req,res)=>{
    res.render('admin/news/add')
})

//add news to DB
router.post('/news/add',async(req,res)=>{
    const received = req.body
    const newNews = new News(newsToRecord(received))
    await newNews.save();
    res.redirect("/admin/news/manage")
})




//show detailed news page
router.get('/news/:id',async(req,res)=>{
    const {id} = req.params;
    const news = await News.findById(id);
    res.render('admin/news/internalShow',{news});
})




//show edit news view
router.get('/news/:id/edit',async (req,res)=>{
    const {id} = req.params;
    const foundNews = await News.findById(id);
    const news  = newsToResponse(foundNews)
    res.render('admin/news/edit',{news})
    
})

//save editted news to DB
router.put('/news/:id',async (req,res)=>{
    const {id} = req.params;
    const updated = newsToRecord(req.body);
    const newsUpdated = await News.findByIdAndUpdate(id,updated,{runValidators:true, new:true})
    res.redirect(`/admin/news/${newsUpdated._id}`)
})




//delete news
router.delete('/news/:id',async (req,res)=>{
    const {id} = req.params;
    const deleted = await News.findByIdAndDelete(id);
    res.redirect('/admin/news/manage');
})



//---------------------------------------------------manage posting routing-------------------------------------------//

//manage posting page
router.get('/posting/manage',async (req,res)=>{
    const postings = await Posting.findAll()
    res.render('admin/posting/managePosting',{postings})
})



//show add posting view
router.get('/posting/add',(req,res)=>{
    res.render('admin/posting/add')
})

//add posting to DB
router.post('/posting/add',async(req,res)=>{
    const received = req.body
    const newPosting = new Posting(postingToRecord(received))
    await newPosting.save();
    res.redirect("/admin/posting/manage")
})



//show detailed posting page
router.get('/posting/:id',async(req,res)=>{
    const {id} = req.params;
    const posting = await Posting.findById(id);
    res.render('admin/posting/internalShow',{posting});
})


//show edit posting view
router.get('/posting/:id/edit',async (req,res)=>{
    const {id} = req.params;
    const foundPosting = await Posting.findById(id);
    const posting  = postingToResponse(foundPosting)
    res.render('admin/posting/edit',{posting})
    
})

//save editted posting to DB
router.put('/posting/:id',async (req,res)=>{
    const {id} = req.params;
    const updated = postingToRecord(req.body);
    const postingUpdated = await Posting.findByIdAndUpdate(id,updated,{runValidators:true, new:true})
    res.redirect(`/admin/posting/${postingUpdated._id}`)
})

//delete posting
router.delete('/posting/:id',async (req,res)=>{
    const {id} = req.params;
    const deleted = await Posting.findByIdAndDelete(id);
    res.redirect('/admin/posting/manage');
})

//---------------------------------------------------manage course routing-------------------------------------------//


//manage course page
router.get('/course/manage',async (req,res)=>{
    const courses = await Course.findAll()
    res.render('admin/course/manageCourse',{courses})
})



//show add course view
router.get('/course/add',(req,res)=>{
    res.render('admin/course/add')
})

//add course to DB
router.post('/course/add',async(req,res)=>{
    const received = req.body
    const newCourse = new Course(received)
    await newCourse.save();
    res.redirect("/admin/course/manage")
})



//show detailed course page
router.get('/course/:id',async(req,res)=>{
    const {id} = req.params;
    const course = await Course.findById(id);
    res.render('admin/course/internalShow',{course});
})



//show edit course view
router.get('/course/:id/edit',async (req,res)=>{
    const {id} = req.params;
    const foundCourse = await Course.findById(id);
    res.render('admin/course/edit',{course:foundCourse});
})

//save editted course to DB
router.put('/course/:id',async (req,res)=>{
    const {id} = req.params;
    const updated = req.body;
    const courseUpdated = await Course.findByIdAndUpdate(id,updated,{runValidators:true, new:true})
    res.redirect(`/admin/course/${courseUpdated._id}`)
})



//delete course
router.delete('/course/:id',async (req,res)=>{
    const {id} = req.params;
    const deleted = await Course.findByIdAndDelete(id);
    res.redirect('/admin/course/manage');
})

//---------------------------------------------------manage register routing-------------------------------------------//
router.get('/register',(req,res)=>{
    res.render('admin/register/register')
})

router.post('/register',async (req,res)=>{
    const {email, password} = req.body;
    const user = new User({
        email,
        password
    });
    await user.save();
    req.session.user_id = user._id;
    res.redirect('/admin');
})


module.exports = router