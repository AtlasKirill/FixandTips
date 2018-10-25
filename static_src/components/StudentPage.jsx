import React from 'react';
import Request from './Request.jsx';
import News from './News.jsx';
import User from './User.jsx';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RequestCreationModal from './CreationModal'
import Typography from '@material-ui/core/Typography';


class StudentPage extends React.Component{
  
    render(){
        
        return( 
            <div>
                <Grid container spacing={10}>
                    <Grid item md={6} justify="center" >
                        <RequestCreationModal/>   
                    </Grid>
                    <Grid item md={6}>
                        <Typography  variant="h4" gutterBottom align={"center"}>
                            НОВОСТИ
                        </Typography>
                        <Typography  variant="h5" gutterBottom align={"center"}>
                            Объявления общежития
                        </Typography>
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

export default StudentPage;