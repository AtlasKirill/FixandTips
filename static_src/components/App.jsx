import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import StudentPage from './StudentPage.jsx';
import 'typeface-roboto';


class App extends React.Component{
   
    
    render(){
     
        return( 
            
            <div>
                
                <Switch>
                    <Route exact path="/main/student" component={ StudentPage }/>
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