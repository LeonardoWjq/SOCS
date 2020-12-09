//-----------------------------------------news routing--------------------------------------//
const express = require('express')
const router = express.Router()
const News = require('../models/news')

//--------------------------------------------------routing------------------------------------------//

//show news view
router.get('/',async (req,res)=>{
    const news = await News.findAll()
    res.render('./news/news',{news})
})


//show detailed news view
router.get('/:id',async (req,res)=>{
    const {id} = req.params;
    const news = await News.findById(id);
    res.render('./news/show',{news});
})


//export router
module.exports = router