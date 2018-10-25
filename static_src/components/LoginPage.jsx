import React from 'react';
import NewsList from './NewsList.jsx';
import Login from './Login.jsx';
import Grid from '@material-ui/core/Grid';


class LoginPage extends React.Component{
  
    render(){
        
        return( 
            <div>
                <Grid container spacing={24}>
                    <Grid item md={12} justify="center" alignItems="center" >
                        <Login/> 
                    </Grid>
                    <Grid item md={12}>
                        <NewsList/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default LoginPage;