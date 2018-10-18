import React from 'react';
import Request from './Request.jsx';
import News from './News.jsx';
import User from './User.jsx';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper';


class FilterPaper extends React.Component{
  
    render(){
        
        return( 
            <div>
                <Paper>
                    <h1>Some Filters</h1>
                </Paper>
            </div>
        );
    }
}

export default FilterPaper;