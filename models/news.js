//load modules
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
//construct the news schema
const newsSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Title cannot be blank.']

    },
    date:{
        type:String,
        required:[true,'Date is missing.']
    },
    time:{
        type:String
    },
    type:{
        type: String,
        enum:['Announcement','Award'],
        required:true
    },
    logistics:{
        type:String
    },
    description:{
        type:String
    }
});

newsSchema.statics.findAll = async function (){
    const news = await this.find({});
    return news;
}

module.exports = mongoose.model('News',newsSchema);