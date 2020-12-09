//load modules
const mongoose = require('mongoose');
const Course = require('./models/course')

// connect to database
mongoose.connect('mongodb://localhost:27017/socs',{useNewUrlParser: true, useUnifiedTopology:true,useCreateIndex:true})
.then(()=>{
    console.log("Connection to the socs database has been established successfully.")
})
.catch(err=>{
    console.log('An error occured while trying to connect to the socs database:')
    console.log(err)
})

const comp202 = new Course({
    code:"COMP 202",
    title:"Foundations of Programming",
    credit:3,
    term:"Winder 2020",
    instructor:"Giulia",
    prerequisite:"None",
    availability:"available",
    restriction:"No restriction",
    notes:"Welcome to COMP 202",
    additional:"hello this is COMP 202"

})

const comp206 = new Course({
    code:"COMP 206",
    title:"Intro to Software System",
    credit:3,
    term:"Winder 2020",
    instructor:"David",
    prerequisite:"COMP 202",
    availability:"available",
    restriction:"No restriction",
    notes:"Welcome to COMP 206",
    additional:"hello this is COMP 206"

})


const seedCourses = [comp202,comp206];

Course.insertMany(seedCourses)
.then(res=>{
    console.log(res)
})
.catch(err=>{
    console.log(err)
})
