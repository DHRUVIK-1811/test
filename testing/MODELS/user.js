const monogoose = require("mongoose")

const UserSchema = new monogoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    passwordHash:{type:String,required:true},
    phone:{type:Number,required:true},  
})

const user = monogoose.model("user",UserSchema);

module.exports=user;