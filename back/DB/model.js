import mongoose from "mongoose";

//schema
const userSchema = new mongoose.Schema({
    name : {
        type : String,
        trim : true, //any space before/after will be removed
        required : true,
    },
    email : {
        type : String,
        trim : true, 
        required : true,
        unique : true
    },
    phone : {
        type : Number,
        required : true,
    },
    age : {
        type : Number,
        required : true,
    }
},{
    timestamps : true //declaring timestamps like this
    //we will have 'created at' & 'updated at' fields
})

//model
const User = mongoose.model('User',userSchema)

export default User
