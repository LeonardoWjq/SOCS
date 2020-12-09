//load modules
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
//construct the course schema
const courseSchema = new mongoose.Schema({
    code:{
        type:String,
        required:[true,'Course code cannot be blank.']

    },
    title:{
        type:String,
        required:[true,'Course title is missing.']
    },
    credit:{
        type:Number,
        required:[true,'Course credit is missing.']
    },
    term:{
        type:String,
        required:[true,'Term offered is missing.']
    },
    instructor:{
        type: String,
        required:[true,'Instructor is missing.']
    },
    prerequisite:{
        type:String,
        required:[true,'Prerequisite is missing.']
    },
    availability:{
        type:String,
        enum:['available', 'unavailable'],
        required:true
    },
    restriction:{
        type:String
    },
    notes:{
        type:String
    },
    additional:{
        type:String
    }
});

courseSchema.statics.findAll = async function (){
    const courses = await this.find({});
    return courses;
}

module.exports = mongoose.model('Course',courseSchema);