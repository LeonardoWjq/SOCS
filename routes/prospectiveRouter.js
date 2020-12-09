//-----------------------------------------load modules--------------------------------------//
const express = require('express')
const router = express.Router()

//--------------------------------------------------prospective routing------------------------------------------//

//-------------------------------overview---------------------
router.get('/overview',async (req,res)=>{
    res.render('prospective/overview')
})

router.get('/cegep',async (req,res)=>{
    res.render('prospective/cegep')
})

router.get('/chooseAMajor',async (req,res)=>{
    res.render('prospective/chooseAMajor')
})

router.get('/combine',async (req,res)=>{
    res.render('prospective/combine')
})

router.get('/freshman',async (req,res)=>{
    res.render('prospective/freshman')
})






//export router
module.exports = router