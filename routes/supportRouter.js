//-----------------------------------------load modules--------------------------------------//
const express = require('express')
const router = express.Router()

//--------------------------------------------------support routing------------------------------------------//

//-------------------------------account---------------------
router.get('/account',async (req,res)=>{
    res.render('support/account')
})


//export router
module.exports = router