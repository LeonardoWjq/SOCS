//-----------------------------------------load modules--------------------------------------//
const express = require('express')
const router = express.Router()

//--------------------------------------------------contact routing------------------------------------------//

//-------------------------------contact---------------------
router.get('/',async (req,res)=>{
    res.render('contact/contact')
})


//export router
module.exports = router