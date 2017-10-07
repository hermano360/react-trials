import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/home/page';
import Login from '../pages/login/page';
import Register from '../pages/register/page';
import SmsVerification from '../pages/sms/page';
import BetaRegistration from '../pages/dispensary/page';
import ButtonSetup from '../pages/button/setup';
import ButtonRegistration from '../pages/button/registration';
import SetupSteps from '../pages/button/setupSteps';
import Preferences from '../pages/user/preferences';
import Reviews from '../pages/user/reviews';


const Main = (props) => (
  <main>  
    <Switch>
      <Route exact path='/' name="home" component={Home}/>
      <Route path='/login' name="login"  component={Login}/>
      <Route path='/register' name="register" component={Register}/>
      <Route path='/sms-verification' name="sms verification" component={SmsVerification}/>
      <Route path='/beta-registration' name="beta registration" component={BetaRegistration}/>
      <Route path='/button-setup' name="button setup" component={ButtonSetup}/>
      <Route path='/button-registration' name="button registration" component={ButtonRegistration}/>
      <Route path='/setup-steps' name="button setup step one" component={SetupSteps}/>
      <Route path='/preferences' name="preferences" component={Preferences}/>
      <Route path='/reviews' name="reviews" component={Reviews}/>
    </Switch>
  </main>
)

export default Main
