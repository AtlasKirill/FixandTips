import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import StudentPage from './StudentPage.jsx';
import Login from './Login';
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
                    <Route exact path="/main/student" component={ StudentPage }/>
                    <Route path="/login" component={ Login }/>
                    <Route path="/profile" component={ Profile }/>
                    <Route path="/statistic" component={ Chart }/>
                    <Route path="/main/commandant" component={ CommandantPage }/>
                    {/* <Route exact path="/chat_list" component={ ChatList }/>
                    <Route exact path="/user_list/" component={ UserList }/>
                    <Route exact path="/post_list/" component={ PostList }/>
                    <Route path="/profile" component={ MyAccount }/>
                    <Route path="/login1" component={ Login }/>
                    <Route exact path="/notifications/" component={ PostList }/>  */}
                </Switch> 
                {/* <StudentPage />  */}
            </div>  
        );
    }
}
export default App;