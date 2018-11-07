import React from 'react';
import CommandantRequestList from './CommandantRequestList.jsx';
import CommandantNewsList from './CommandantNewsList.jsx';
import StudentRequestList from './StudentRequestList.jsx';
import StudentNewsList from './StudentNewsList.jsx';
import CommandantPage from './CommandantPage';
import StudentPage from './StudentPage';
import CreationModal from './CreationModal';
import Grid from '@material-ui/core/Grid';
import NewsCreationModal from './NewsCreationModal'
import Filter from './Filter';
import {withStyles} from "@material-ui/core";
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography/Typography";
import GetPrintAndStatistics from './GetPrintAndStatistic';
import { connect } from 'react-redux';
import Redirect from 'react-router-dom/es/Redirect';
import NavBar from './NavBar.jsx';

const styles = theme => ({
    root: {
        padding: 20,
    },
    headline: {
        margin: 20,
    },
});

class MainPage extends React.Component{
  
    render(){
        let page;
        const {classes} = this.props;
        if(this.props.isLoading)
        {
            return(<div>Loading...</div>);
        }
        if(!this.props.isAuthenticated)
        {
            return <Redirect push to='/login'/>
        }
        else if(this.props.user.role == 4){
        page =  
        <Grid container spacing={10}>
            <Grid item md={6}>
                <Typography variant="h5" gutterBottom className={classes.headline}>
                    Заявки(Коменда)
                </Typography>
                <Filter/> 
            </Grid>
            <Grid item md={6}>
                <Typography variant="h5" gutterBottom className={classes.headline}>
                    Объявления общежития
                </Typography>
                <NewsCreationModal/>
                    
            </Grid>
            <Grid item md={6} >
                <CommandantRequestList/>
            </Grid>
            <Grid item md={6} >
                <CommandantNewsList/>
            </Grid>
        </Grid>
        }

        else if(this.props.user.role == 2){
            page =
                <Grid container spacing={10} justify="center">
                    <Grid item md={6}>
                        <Typography variant="h5" gutterBottom className={classes.headline}>
                            Мои запросы(Студент)
                        </Typography>
                        <CreationModal/>
                    </Grid>
                    <Grid item md={6}>
                        <Typography variant="h5" gutterBottom className={classes.headline}>
                            Объявления общежития
                        </Typography>
                    </Grid>
                    <Grid item md={6}>
                        <StudentRequestList/>
                    </Grid>
                    <Grid item md={6}>
                        <StudentNewsList/>
                    </Grid>
                </Grid>
        }

      
        return( 
            <div>
                <NavBar/>
                { page }
            </div>
        );
    }
}
MainPage.propTypes = {
    classes: PropTypes.object.isRequired,
};
 
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

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(MainPage));