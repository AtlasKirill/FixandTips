import React from 'react';
import Request from './Request.jsx';
import Grid from '@material-ui/core/Grid';

class StudentPage extends React.Component{
  
    render(){
        
        return( 
            <div>
                <h1> Student page</h1>
                <Grid container spacing={24}>
                    <Grid item xs={6}>
                        <Request/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default StudentPage;