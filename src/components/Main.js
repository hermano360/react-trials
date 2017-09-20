import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/home/page'
import Login from '../pages/login/page'
import Register from '../pages/register/page'
import SmsVerification from '../pages/sms/page'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' name="home" component={Home}/>
      <Route path='/login' name="login"  component={Login}/>
      <Route path='/register' name="register" component={Register}/>
      <Route path='/sms-verification' name="sms verification" component={SmsVerification}/>
    </Switch>
  </main>
)

export default Main
