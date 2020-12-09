//load modules
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

//construct the user schema
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required: [true,'Email cannot be blank.'],
        unique:[true,'Email already exists.']
    },
    password:{
        type:String,
        required: [true,'Password cannot be blank.']
    }
});

//static method that validate the password
userSchema.statics.findAndValidate = async function (email, password){
    const foundUser = await this.findOne({email})
    if (!foundUser){
        return false;
    }
    const isValid = await bcrypt.compare(password,foundUser.password)
    return isValid ? foundUser: false
}

//pre-save method that hash the password
userSchema.pre('save',async function(next){
    if (!this.isModified('password')) return next();
    
    this.password = await bcrypt.hash(this.password,12);
    next();
})

module.exports = mongoose.model('User',userSchema);