//-----------------------------------------import moduls--------------------------------------//
const express = require('express')
const router = express.Router()
const User = require('../models/user')

//---------------------------------------login routing----------------------------
router.get('/',(req,res)=>{
    if (req.session.user_id){
        res.redirect('/admin')
    }else{
        res.render('login/login')
    }
})

router.post('/',async (req,res)=>{
    const{email, password} = req.body
    const foundUser = await User.findAndValidate(email,password)
    if (foundUser){
        req.session.user_id = foundUser._id;
        res.redirect('/admin')
    }else{
        res.redirect('/login')
    }
})

module.exports = router
