//-----------------------------------------load modules--------------------------------------//
const express = require('express')
const router = express.Router()

//--------------------------------------------------people routing------------------------------------------//

//-------------------------------overview---------------------
router.get('/faculty',async (req,res)=>{
    res.render('people/faculty')
})

router.get('/staff',async (req,res)=>{
    res.render('people/staff')
})



//export router
module.exports = router