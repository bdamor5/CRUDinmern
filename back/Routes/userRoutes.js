import express from 'express'
import { addUser, deleteUser, getAllUsers, getUser, updateUser } from '../Controllers/userController.js'
const router = express.Router()

//create a user
router.post('/add', addUser)

//read all users
router.get('/', getAllUsers)

//read a user from it's id
router.get('/:id', getUser)

//update a user from it's id
router.put('/update/:id', updateUser)

//delete a user from it's id
router.delete('/delete/:id', deleteUser)

export default router