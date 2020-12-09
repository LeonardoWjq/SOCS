//-----------------------------------------load modules--------------------------------------//
const express = require('express')
const router = express.Router()
const Posting = require('../models/posting')

//--------------------------------------------------posting routing------------------------------------------//

//show posting view
router.get('/',async (req,res)=>{
    const postings = await Posting.findAll()
    res.render('posting/posting',{postings})
})


//show detailed posting view
router.get('/:id',async (req,res)=>{
    const {id} = req.params;
    const posting = await Posting.findById(id);
    res.render('posting/show',{posting});
})


//export router
module.exports = router