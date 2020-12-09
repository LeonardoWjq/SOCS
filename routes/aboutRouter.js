//-----------------------------------------load modules--------------------------------------//
const express = require('express')
const router = express.Router()

//--------------------------------------------------about routing------------------------------------------//

//-------------------------------donate--------------------
router.get('/donate',async (req,res)=>{
    res.render('about/donate')
})



//export router
module.exports = router