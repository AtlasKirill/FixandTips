import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainPage from './MainPage.jsx';
import Login from './LoginPage';
import NavBar from './NavBar.jsx';
import Profile from './Profile.jsx';
import Chart from './Chart.jsx';
import CommandantPage from './CommandantPage';
import 'typeface-roboto';
import { Provider, connect } from "react-redux";
import { loadUser } from '../actions/auth';
import Register from "./Register";


class App extends React.Component{

    // componentDidMount() {
    //     this.props.loadUser();
    // }

    PrivateRoute = ({component: ChildComponent, ...rest}) => {
        return <Route {...rest} render={props => {
          if (this.props.isLoading) {
            return <em>Loading...</em>;
          } else if (!this.props.isAuthenticated) {
            return <Redirect to="/login" />;
          } else {
            return <ChildComponent {...props} />
          }
        }} />
    }
    
    render(){
        let {PrivateRoute} = this;
        return(  
            <div>
                <NavBar/> 
                <Switch>
                    <Route path="/login" component={ Login }/>
                    <Route path="/register" component={ Register }/>
                    <Route path="/main" component={ MainPage }/>
                    <Route path="/profile" component={ Profile }/>
                    <Route path="/statistic" component={ Chart }/>
                </Switch> 
            </div>  
        );
    }
}

 
const mapStateToProps = ({ auth }) => {
    return {
        user: auth.user,
        isAuthenticated: auth.isAuthenticated,
        isLoading: auth.isLoading,
    }
}
const mapDispatchToProps = dispatch => {
    return {
      loadUser: () => {
        return dispatch(loadUser());
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;