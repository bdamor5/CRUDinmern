import User from '../DB/model.js'

export const addUser = async(req,res)=>{
    try{
        //destructuring from req.body
        const {name,email,phone,age} = req.body

        //storing in DB
        const storeUser = new User({name,email,phone,age})
        
        //saving the changes made
        await storeUser.save()        

        //sending the response to the frontend
        res.status(201).json(req.body)

    }catch(err){
        console.log(err)
        res.status(400).json({message : 'Email Already exists!'})
    }
}

export const getAllUsers = async(req,res)=>{
    try{
        //getting all the records from our DB
        const allUsers = await User.find()

        //sending all the users as response to the frontend
        res.status(200).json(allUsers)

    }catch(err){
        console.log(err)
        res.status(404).json({error : 'Server Error'})
    }
}

export const getUser = async(req,res) =>{
    try{
        //using findById method we can search for id 
        const singleUser = await User.findById(req.params.id);

        res.status(200).json(singleUser);
    }catch(error){
        res.status(404).json({ error: 'No User found' })
    }
}

export const updateUser = async(req,res) =>{
    try{
        const updatedUser = req.body
        
        const newUpdatedUser = await User.findByIdAndUpdate(req.params.id,updatedUser,{
            new:true
        })

        res.status(201).json(newUpdatedUser)

    }catch(err){
        res.status(404).json({error : err.message})
    }
}

export const deleteUser = async(req,res) =>{
    try{
        
        const deletedUser = await User.findByIdAndDelete(req.params.id)

        res.status(201).json(deletedUser)

    }catch(err){
        res.status(404).json({error : 'User not found'})
    }
}