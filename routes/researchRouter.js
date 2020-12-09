//-----------------------------------------load modules--------------------------------------//
const express = require('express')
const router = express.Router()

//--------------------------------------------------research routing------------------------------------------//

//-------------------------------overview---------------------
router.get('/area',async (req,res)=>{
    res.render('research/area')
})

router.get('/reports',async (req,res)=>{
    res.render('research/reports')
})



//export router
module.exports = router