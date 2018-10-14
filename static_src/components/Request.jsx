import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

class Request extends React.Component{
   
    render(){
       
        return( 
            <div>
            
                        <Card >
                            <Grid container spacing={24}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="Recipe">
                                        R
                                    </Avatar>
                                }
                                action={
                                    <IconButton>
                                        <DeleteIcon />
                                    </IconButton>
                                }
                                title="Елизавета Носкова"
                                subheader="September 14, 2016"
                            />
                            <CardContent>
                                <Typography component="p">
                                    Сломался кран, заливаю соседей, спасите
                                </Typography>
                            </CardContent>
                            <CardActions  disableActionSpacing>
                                <Grid item xs={6}>
                                    <Button variant="contained" color="secondary">
                                        Secondary
                                    </Button>
                                </Grid>
                            </CardActions>   
                            </Grid>
                            
                        </Card>
                   
        </div>
    );
  }
}

export default Request;