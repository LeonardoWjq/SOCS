//-----------------------------------------loading modules--------------------------------------//
const express = require('express')
const router = express.Router()


//-----------------------------------------logout routing--------------------------------------//
router.post('/',(req,res)=>{
    req.session.destroy();
    res.redirect('/login')
})

module.exports = router