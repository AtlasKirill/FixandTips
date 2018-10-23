import React from 'react';
import Request from './Request.jsx';
import News from './News.jsx';
import User from './User.jsx';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import NewsCreationModal from './NewsCreationModal'
import Filters from './Filter';

class CommandantPage extends React.Component{
  
    render(){
        
        return( 
            <div>
                <Grid container spacing={24}>
                    <Grid item md={6}>
                        <Filters/>
                    </Grid>
                    <Grid item md={6}>
                      
                            <NewsCreationModal/>
                            
                       
                    </Grid>
                    <Grid item md={6}>
                        <Request/>
                    </Grid>
                    <Grid item md={6}>
                        <News/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default CommandantPage;