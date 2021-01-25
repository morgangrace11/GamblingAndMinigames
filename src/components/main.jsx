import React from 'react';
import Home from './home.jsx';
import Minigames from './minigames.jsx';
import SignIn from './signin.jsx';
import CreateAccount from './createaccount.jsx';
import NavBar from './navbar.jsx';
import { Switch, Route } from 'react-router-dom';

 const Main = () =>  {
    return (
        <div>
            <NavBar />
            <nav>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/minigames" component={Minigames} />
                    <Route exact path="/signin" component={SignIn} />
                    <Route path="/createaccount" component={CreateAccount} />
                </Switch>
            </nav>
        </div>
    )
}

export default Main;
