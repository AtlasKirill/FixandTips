import React from 'react';
import Request from './Request.jsx';
import News from './News.jsx';
import Grid from '@material-ui/core/Grid';
import User from './User.jsx';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

class StudentPage extends React.Component{
  
    render(){
        
        return( 
            <div>
                <Grid container spacing={24}>

                    <Grid item md={12}>
                        <User/>
                    </Grid>
        
                </Grid>
            </div>
        );
    }
}

export default StudentPage;