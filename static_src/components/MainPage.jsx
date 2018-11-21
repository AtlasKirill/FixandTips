import React from 'react';
import CommandantRequestList from './CommandantRequestList.jsx';
import CommandantNewsList from './CommandantNewsList.jsx';
import StudentRequestList from './StudentRequestList.jsx';
import StudentNewsList from './StudentNewsList.jsx';
import CreationModal from './CreationModal';
import Grid from '@material-ui/core/Grid';
import NewsCreationModal from './NewsCreationModal'
import Filter from './Filter';
import {withStyles} from "@material-ui/core";
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography/Typography";
import {connect} from 'react-redux';
import Redirect from 'react-router-dom/es/Redirect';
import NavBar from './NavBar.jsx';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
    root: {
        padding: 20,
    },
    headline: {
        marginTop:0,
        margin: 20,
        fontSize: 'xx-large',
    },
    headAndButton: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        flexWrap: 'wrap',
        maxWidth: 600,
        maxHeight: 200,
        marginTop: 'auto',
        marginBottom: 'auto',
        boxShadow: 'none',
    },
    headAndButtonStud: {
        position:'relative',
        top:8,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        flexWrap: 'wrap',
        marginTop: 'auto',
        marginBottom: 'auto',
        boxShadow: 'none',
    }
});

class MainPage extends React.Component {

    render() {
        let page;
        const {classes} = this.props;
        if (this.props.isLoading) {
            return (<div>Loading...</div>);
        }
        if (!this.props.isAuthenticated) {
            return <Redirect push to='/login'/>
        }
        else if (this.props.user.role == 2) {
            page =
                <Grid container spacing={8}>
                    <Grid item md={6}>
                        <Typography gutterBottom className={classes.headline}>
                            Заявки
                        </Typography>
                        <Filter/>
                    </Grid>
                    <Grid item md={6} container justify="center">
                        <Paper className={classes.headAndButton}>
                            <Typography gutterBottom className={classes.headline}>
                                Объявления общежития
                            </Typography>
                            <NewsCreationModal/>
                        </Paper>
                    </Grid>
                    <Grid item md={6}>
                        <CommandantRequestList/>
                    </Grid>
                    <Grid item md={6}>
                        <CommandantNewsList/>
                    </Grid>
                </Grid>
        }

        else if (this.props.user.role == 1) {
            page =
                <Grid container spacing={8}>
                    <Grid item md={6} container justify="center">
                        <Paper className={classes.headAndButtonStud}>
                            <Typography gutterBottom className={classes.headline}>
                                Мои запросы
                            </Typography>
                            <CreationModal/>
                        </Paper>
                    </Grid>
                    <Grid item md={6} container justify="center">
                        <Paper className={classes.headAndButtonStud}>
                            <Typography gutterBottom className={classes.headline}>
                                Объявления общежития
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item md={6}>
                        <StudentRequestList/>
                    </Grid>
                    <Grid item md={6}>
                        <StudentNewsList/>
                    </Grid>
                </Grid>
        }


        return (
            <div>
                <NavBar/>
                {page}
            </div>
        );
    }
}

MainPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({auth}) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MainPage));
