import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import StudentPage from './StudentPage.jsx';
import LoginPage from './LoginPage';
import NavBar from './NavBar.jsx';
import Profile from './Profile.jsx';
import Chart from './Chart.jsx';
import CommandantPage from './CommandantPage';
import 'typeface-roboto';


class App extends React.Component{
   
    
    render(){
     
        return( 
            
            <div>
                <NavBar/> 
                <Switch>
                    <Route path="/student" component={ StudentPage }/>
                    <Route path="/login" component={ LoginPage }/>
                    <Route path="/profile" component={ Profile }/>
                    <Route path="/statistic" component={ Chart }/>
                    <Route path="/commandant" component={ CommandantPage }/>
                </Switch> 
            </div>  
        );
    }
}
export default App;