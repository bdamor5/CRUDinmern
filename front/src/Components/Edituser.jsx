import react, { useState,useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import { useParams } from 'react-router-dom';

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const Edituser = () => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        age:'',
        phone: ''
    });

    const {id} = useParams()

    const getUserById = async() =>{
        const userinfo = await axios.get(`http://localhost:8000/users/${id}`)
        console.log(userinfo.data)
        setUser(userinfo.data)
    }

    useEffect(()=>{
        getUserById()
    },[])

    
    const { name, email, age,phone } = user;
    const classes = useStyles();
    let history = useHistory();

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    const editUserDetails = async() => {
            await axios.put(`http://localhost:8000/users/update/${id}`, user);
            history.push('/users');        
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Edit User</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input required onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input required onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Age</InputLabel>
                <Input required onChange={(e) => onValueChange(e)} name='age' value={age} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input required onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editUserDetails()}>Edit User</Button>
            </FormControl>
        </FormGroup>
    )
}

export default Edituser;