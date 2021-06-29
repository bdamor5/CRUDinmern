import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import Allusers from './Components/Allusers'
import Home from './Components/Home'
import Adduser from './Components/Adduser'
import Navbar from './Components/Navbar'
import Edituser from './Components/Edituser'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/users' component={Allusers}/>
        <Route exact path='/users/add' component={Adduser}/>
        <Route exact path='/users/update/:id' component={Edituser}/>
        <Redirect to='/'/>
      </Switch>
      
    </div>
  )
}

export default App
