import mongoose from 'mongoose'

const connection = () =>{
    mongoose.connect(process.env.DB , {
        useNewUrlParser : true,
        useCreateIndex : true,
        useUnifiedTopology : true,
        useFindAndModify : false
    })
    .then(() => console.log('Connection to DB is successful'))
    .catch(() => console.log('Connection to Db failed'))
}

export default connection