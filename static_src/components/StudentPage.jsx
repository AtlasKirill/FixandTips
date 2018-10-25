import React from 'react';
import RequestList from './RequestList.jsx';
import NewsList from './NewsList.jsx';
import User from './User.jsx';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RequestCreationModal from './CreationModal'

class StudentPage extends React.Component{
  
    render(){
        
        return( 
            <div>
                <Grid container spacing={24}>
                    <Grid item md={12} >
                        <RequestCreationModal/>   
                    </Grid>
                    <Grid item md={6}>
                        <RequestList/>
                    </Grid>

                    <Grid item md={6}>
                        <NewsList/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default StudentPage;