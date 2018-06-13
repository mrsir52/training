import React from 'react';
import {Redirect, Route, Router} from 'react-router-dom';
import App from './App';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';
import Teamdata from './Pages/Teamdata'
import Getplayer from './Pages/Getplayer'
import Createplayer from './Pages/Createplayer'
import Admin from './Pages/Admin'
import Updateplayer from './Pages/Updateplayer'

// import App from './Notauthenticated';






const auth = new Auth();

const handleAuthentication = ({location}) => {
    if (/access_token|id_token|error/.test(location.hash)) {
        auth.handleAuthentication();
    }
}

export default () => (

    <Router history={history}>
        <div>
            <Route path="/" render={(props) => <App auth={auth} {...props} />}/>
            <Route path="/home" render={(props) => <Home auth={auth} {...props} />}/>
            <Route path="/Getplayer" render={(props) => <Getplayer auth={auth} {...props} />}/>
            <Route path="/Createplayer" render={(props) => <Createplayer auth={auth} {...props} />}/>
            <Route path="/Teamdata" render={(props) => <Teamdata auth={auth} {...props} />}/>
            <Route path="/Admin" render={(props) => <Admin auth={auth} {...props} />}/>
            <Route path="/Updateplayer/:id" render={(props) => <Updateplayer auth={auth} {...props} />}/>
            <Route path="/profile" render={(props) => (
                !auth.isAuthenticated() ? (
                    <Redirect to="/home"/>
                ) : (
                    <Profile auth={auth} {...props} />
                )
            )}/>
            <Route path="/callback" render={(props) => {
                handleAuthentication(props);
                return <Callback {...props} />
            }}/>
        </div>
    </Router>
);

