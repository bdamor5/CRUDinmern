import React from 'react'
import {AppBar,Toolbar,makeStyles,Typography} from '@material-ui/core'
import {NavLink} from 'react-router-dom'

const Navbar = () => {

    const useStyle = makeStyles({
        header:{
            background:'#171717'
        },
        tabs : {
            color:'white',
            textDecoration:'none',
            marginRight : '20px',
            fontSize : '20px'
        }
    })

    const classes = useStyle();

    return (
        <AppBar className={classes.header} position='static'>
          <Toolbar>            
                <NavLink  className={classes.tabs} exact to='/'>CRUD</NavLink> 
                
                <NavLink className={classes.tabs} exact to='/users'>All Users</NavLink>

                <NavLink className={classes.tabs} exact to='/users/add'>Add User</NavLink>
          </Toolbar>
        </AppBar>
    )
}

export default Navbar
