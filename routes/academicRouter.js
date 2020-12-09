//-----------------------------------------load modules--------------------------------------//
const express = require('express')
const router = express.Router()
const Course = require('../models/course')
//--------------------------------------------------academic routing------------------------------------------//

//-------------------------------overview---------------------
router.get('/undergraduate',async (req,res)=>{
    res.render('academic/undergraduate/undergraduateOverview')
})
//-------------------------------incoming---------------------
router.get('/undergraduate/incoming',async (req,res)=>{
    res.render('academic/undergraduate/undergraduateIncoming')
})

//-------------------------------advising---------------------
router.get('/undergraduate/advising',async (req,res)=>{
    res.render('academic/undergraduate/advising')
})

router.get('/graduate',async (req,res)=>{
    res.render('academic/graduate/gradOverview')
})


//show course view
router.get('/course',async (req,res)=>{
    const courses = await Course.findAll()
    res.render('academic/course/course',{courses})
})


//show detailed course view
router.get('/course/:id',async (req,res)=>{
    const {id} = req.params;
    const course = await Course.findById(id);
    res.render('academic/course/show',{course});
})

//export router
module.exports = router