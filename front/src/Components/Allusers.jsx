import React,{useEffect,useState} from 'react'
import { Button,Table,TableHead,TableRow,TableCell,TableBody,makeStyles } from '@material-ui/core'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Allusers = () => {

    const [users,setUsers] = useState([])

    const getAllUsers = async() =>{
        const allusers = await axios.get('http://localhost:8000/users');
        console.log(allusers.data)
        setUsers(allusers.data)
    }

    useEffect( () =>{
        getAllUsers()
    },[])   

    const useStyle = makeStyles({
        table:{
            width:'90%',
            margin:'50px 0 0 50px'
        },
        thead:{
            '& > *' :{
                background : '#171717',
                color : 'white',
                fontSize : '20'
            } 
        },
        row : {
            '& > *' :{
                fontSize : '20'
            }
        }
    })

    const classes = useStyle()

    const deleteUserData = async(id) =>{
        await axios.delete(`http://localhost:8000/users/delete/${id}`);
        getAllUsers()
    }

    return (
        <div className='main'>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow className={classes.thead}>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {
                        users.map((curr,i) =>{
                            return <TableRow key={i} className={classes.row}>
                                    <TableCell>{i+1}</TableCell>
                                    <TableCell>{curr.name}</TableCell>
                                    <TableCell>{curr.email}</TableCell>
                                    <TableCell>{curr.age}</TableCell>
                                    <TableCell>{curr.phone}</TableCell>                                    
                                    <TableCell><Button variant='contained' color='primary' style={{marginRight:'10px'}} component={Link} to={`/users/update/${curr._id}`}>Edit</Button></TableCell>
                                    <TableCell><Button variant='contained' color='secondary' onClick={() => deleteUserData(curr._id)}>Delete</Button></TableCell>
                                </TableRow>
                        })
                    }                         
                </TableBody>
            </Table>
        </div>
    )
}

export default Allusers
