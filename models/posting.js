//load modules
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
//construct the posting schema
const postingSchema = new mongoose.Schema({
    position:{
        type:String,
        required:[true,'Position cannot be blank.']

    },
    startDate:{
        type:String,
        required:[true,'Start date is missing.']
    },
    endDate:{
        type:String
    },
    type:{
        type: String,
        enum:['Faculty','Course Lecturer','Research','Student'],
        required:true
    },
    logistics:{
        type:String
    },
    description:{
        type:String
    }
});

postingSchema.statics.findAll = async function (){
    const postings = await this.find({});
    return postings;
}

module.exports = mongoose.model('Posting',postingSchema);