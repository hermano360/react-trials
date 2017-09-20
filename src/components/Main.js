import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/home/page'
import Login from '../pages/login/page'
import Register from '../pages/register/page'
import SmsVerification from '../pages/sms/page'
import BetaRegistration from '../pages/dispensary/page'
import ButtonRegistration from '../pages/button/registration'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' name="home" component={Home}/>
      <Route path='/login' name="login"  component={Login}/>
      <Route path='/register' name="register" component={Register}/>
      <Route path='/sms-verification' name="sms verification" component={SmsVerification}/>
      <Route path='/beta-registration' name="beta registration" component={BetaRegistration}/>
      <Route path='/button-registration' name="button registration" component={ButtonRegistration}/>
    </Switch>
  </main>
)

export default Main
