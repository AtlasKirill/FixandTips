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
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import withWidth from '@material-ui/core/withWidth';


const styles = theme => ({
    root: {
        padding: 20,
    },
    headline: {
        marginTop: 0,
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
        position: 'relative',
        top: 8,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        flexWrap: 'wrap',
        marginTop: 'auto',
        marginBottom: 'auto',
        boxShadow: 'none',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        minWidth: 350,
    },
    button: {
        margin: theme.spacing.unit,
        marginTop: 'auto',
        marginBottom: 'auto',
    },
});

class MainPage extends React.Component {
    state = {
        name: '',
        idcard: '',
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

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
            if ('xs' === this.props.width ||'sm' === this.props.width ) {
                page =
                    <Grid container spacing={8}>
                        <Grid item xs={12} container justify="center">
                            <Paper className={classes.headAndButtonStud}>
                                <Typography gutterBottom className={classes.headline}>
                                    Мои запросы
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} container justify="center">
                            <CreationModal/>
                        </Grid>
                        <Grid item xs={12}>
                            <StudentRequestList/>
                        </Grid>
                        <Grid item xs={12} container justify="center">
                            <Paper className={classes.headAndButtonStud}>
                                <Typography gutterBottom className={classes.headline} align={"center"}>
                                    Объявления общежития
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <StudentNewsList/>
                        </Grid>
                    </Grid>
            } else {
                page =
                    <Grid container spacing={8}>
                        <Grid item md={6} container justify="center">
                            <Paper className={classes.headAndButtonStud}>
                                <Typography gutterBottom className={classes.headline}>
                                    Мои запросы
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item md={6} container justify="center">
                            <Paper className={classes.headAndButtonStud}>
                                <Typography gutterBottom className={classes.headline}>
                                    Объявления общежития
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item md={6} container justify="center">
                            <CreationModal/>
                        </Grid>
                        <Grid item md={6} container justify="center">
                        </Grid>
                        <Grid item md={6}>
                            <StudentRequestList/>
                        </Grid>
                        <Grid item md={6}>
                            <StudentNewsList/>
                        </Grid>
                    </Grid>
            }

        } else if (this.props.user.role == 3) {
            page =
                <Grid container spacing={8}>
                    <Grid item md={3} container>
                        <Typography variant="h5" gutterBottom>
                            Введите email и id card пользователя, который подтвердил факт проживания в 12 общежитии
                        </Typography>
                        <TextField
                            id="outlined-name"
                            label="email"
                            className={classes.textField}
                            value={this.state.name}
                            onChange={this.handleChange('name')}
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-name"
                            label="id card"
                            className={classes.textField}
                            value={this.state.idcard}
                            onChange={this.handleChange('idcard')}
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item md={3} container>
                        <Button variant="contained" color="primary" className={classes.button}>
                            Подтвердить
                        </Button>
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
};
const mapDispatchToProps = dispatch => {
    return {
        loadUser: () => {
            return dispatch(loadUser());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withWidth()(withStyles(styles)(MainPage)));

