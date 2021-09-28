import React,{FC} from 'react';
import loadable from '@loadable/component';
import {Switch,Route,Redirect} from 'react-router-dom';


const LogIn = loadable(()=>import('@pages/LogIn'));
const SignUp = loadable(()=>import('@pages/SignUp'));

const App : FC = () => {
    return (
        <Switch>
            <Redirect exact path='/' to = '/login'/>
            <Route path='/login' component = {LogIn}/>
            <Route path='/singup' component = {SignUp}/>
        </Switch>
    )
}

export default App;