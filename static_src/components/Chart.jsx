import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import LineChart from 'recharts/lib/chart/LineChart';
import Line from 'recharts/lib/cartesian/Line';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';
import Legend from 'recharts/lib/component/Legend';
import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import TextField from '@material-ui/core/TextField';
import Filter from './Filter';
import NavBar from './NavBar';
import apiUrls from './../constants/apiUrls';
import functions from './../utils/functions';
import {prepareData} from '../actions/requests';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import store from './../index.jsx';
import {getJSON, RSAA} from 'redux-api-middleware';

const styles = theme => ({
    button: {
        font: "Roboto",
        fontSize: '1.2em',
        maxHeight: 20,
        minWidth: 150,
        marginLeft: 0,
        marginRight: 8,
        marginTop: 8,
        marginBottom: 8,
        boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
        backgroundColor: 'var(--background-start)',
    },
    button_show: {
        font: "Roboto",
        fontSize: '1.2em',
        position: 'relative',
        top: '10px',
        maxHeight: 20,
        minWidth: 150,
        marginLeft: 0,
        marginRight: 8,
        marginTop: 8,
        marginBottom: 8,
        boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
        backgroundColor: '#4fc3f7',
    },
    status: {
        padding: 0,
        marginTop: 20,
        marginBottom: 0,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: theme.spacing.unit * 2,
        maxWidth: 200,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    head: {
        marginTop: theme.spacing.unit * 2,
    },
});

class Chart extends React.Component {

    state = {
        color: 'default',
        clickedUrgent: false,
        clickedProcessing: false,
        clickedSent: false,
        clickedCarpenter: false,
        clickedElictrician: false,
        clickedPlumber: false,
        clickedChemistry: false,
        clickedOther: false,
        colorProcessing: 'default',
        colorSent: 'default',
        colorUrgent: 'default',
        colorCarpenter: 'default',
        colorElictrician: 'default',
        colorPlumber: 'default',
        colorChemistry: 'default',
        colorOther: 'default',
        fromDate: '',
        toDate: '',
        status: '',
        category1: '',
        category2: '',
        category3: '',
        category4: '',
        category5: '',
        urgency: false,
        Data: [],
    };

    searchProcessing = event => {
        this.setState({clickedProcessing: !this.state.clickedProcessing});
        this.setState({colorProcessing: this.state.clickedProcessing ? 'default' : 'secondary'});
        this.setState({urgency: !this.state.urgency});

    };
    searchSent = event => {
        this.setState({clickedSent: !this.state.clickedSent});
        this.setState({colorSent: this.state.clickedSent ? 'default' : 'secondary'});
        this.setState({urgency: !this.state.urgency});

    };
    searchUrgent = event => {
        this.setState({clickedUrgent: !this.state.clickedUrgent});
        this.setState({colorUrgent: this.state.clickedUrgent ? 'default' : 'secondary'});
        this.setState({urgency: !this.state.urgency});

    };
    searchСarpenter = event => {
        this.setState({clickedCarpenter: !this.state.clickedCarpenter});
        this.setState({colorCarpenter: this.state.clickedCarpenter ? 'default' : 'secondary'});
        this.setState({category1: 'Плотник'});

    };
    searchPlumber = event => {
        this.setState({clickedPlumber: !this.state.clickedPlumber});
        this.setState({colorPlumber: this.state.clickedPlumber ? 'default' : 'secondary'});
        this.setState({category2: 'Сантехник'});

    };
    searchElectrician = event => {
        this.setState({clickedElictrician: !this.state.clickedElictrician});
        this.setState({colorElictrician: this.state.clickedElictrician ? 'default' : 'secondary'});
        this.setState({category3: 'Электрик'});

    };
    searchChemistry = event => {
        this.setState({clickedChemistry: !this.state.clickedChemistry});
        this.setState({colorChemistry: this.state.clickedChemistry ? 'default' : 'secondary'});
        this.setState({category4: 'Хим обработка'});
    };

    searchOther = event => {
        this.setState({clickedOther: !this.state.clickedOther});
        this.setState({colorOther: this.state.clickedOther ? 'default' : 'secondary'});
        this.setState({category5: 'Другое'});

    };
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    drawChart = event => {
        console.log(apiUrls.filter(this.state.status, this.state.category1, this.state.category2, this.state.category3, this.state.category4, this.state.category5, this.state.urgency, this.state.fromDate, this.state.toDate));
        this.props.prepareData(apiUrls.filter(this.state.status,
            this.state.category1,
            this.state.category2,
            this.state.category3,
            this.state.category4,
            this.state.category5,
            this.state.urgency,
            this.state.fromDate,
            this.state.toDate),
            store.getState().auth.token);
    };

    render() {
        const {classes} = this.props;
        return (
            <div>
                <NavBar/>
                <React.Fragment>

                    <Typography variant="overline" gutterBottom className={classes.status}>
                        Статус:
                    </Typography>
                    <Button
                        className={classes.button}
                        style={
                            this.state.colorProcessing === 'secondary'
                                ? {
                                    '--background-start': '#ec407a',
                                }
                                : {
                                    '--background-end': '#ffffff',
                                }
                        }
                        onClick={this.searchProcessing}
                    >
                        В ПРОЦЕССЕ
                    </Button>
                    <Button variant="contained" className={classes.button}
                            style={
                                this.state.colorSent === 'secondary'
                                    ? {
                                        '--background-start': '#ec407a',
                                    }
                                    : {
                                        '--background-end': '#ffffff',
                                    }
                            }
                            onClick={this.searchSent}
                    >
                        НОВЫЕ
                    </Button>
                    <Button variant="contained" className={classes.button}
                            style={
                                this.state.colorUrgent === 'secondary'
                                    ? {
                                        '--background-start': '#ec407a',
                                    }
                                    : {
                                        '--background-end': '#ffffff',
                                    }
                            }
                            onClick={this.searchUrgent}
                    >
                        СРОЧНО
                    </Button>
                    <Typography variant="overline" gutterBottom className={classes.status}>
                        Тип заявок:
                    </Typography>
                    <Button variant="contained" className={classes.button}
                            style={
                                this.state.colorCarpenter === 'secondary'
                                    ? {
                                        '--background-start': '#ec407a',
                                    }
                                    : {
                                        '--background-end': '#ffffff',
                                    }
                            }
                            onClick={this.searchСarpenter}
                    >
                        ПЛОТНИК
                    </Button>
                    <Button variant="contained" className={classes.button}
                            style={
                                this.state.colorPlumber === 'secondary'
                                    ? {
                                        '--background-start': '#ec407a',
                                    }
                                    : {
                                        '--background-end': '#ffffff',
                                    }
                            }
                            onClick={this.searchPlumber}
                    >
                        САНТЕХНИК
                    </Button>
                    <Button variant="contained" className={classes.button}
                            style={
                                this.state.colorElictrician === 'secondary'
                                    ? {
                                        '--background-start': '#ec407a',
                                    }
                                    : {
                                        '--background-end': '#ffffff',
                                    }
                            }
                            onClick={this.searchElectrician}
                    >
                        ЭЛЕКТРИК
                    </Button>
                    <Button variant="contained" className={classes.button}
                            style={
                                this.state.colorChemistry === 'secondary'
                                    ? {
                                        '--background-start': '#ec407a',
                                    }
                                    : {
                                        '--background-end': '#ffffff',
                                    }
                            }
                            onClick={this.searchChemistry}
                    >
                        ХИМ ОБРАБОТКА
                    </Button>
                    <Button variant="contained" className={classes.button}
                            style={
                                this.state.colorOther === 'secondary'
                                    ? {
                                        '--background-start': '#ec407a',
                                    }
                                    : {
                                        '--background-end': '#ffffff',
                                    }
                            }
                            onClick={this.searchOther}
                    >
                        ДРУГОЕ
                    </Button>

                    <Typography
                        variant="overline" gutterBottom className={classes.status}>
                        Димнамика зарегистрированных и решенных заявок
                    </Typography>
                    <Grid container spacing={5}>
                        <form className={classes.container} noValidate>
                            <TextField
                                id="date"
                                label="С"
                                type="date"
                                value={this.state.fromDate}
                                onChange={this.handleChange('fromDate')}
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </form>
                        <form className={classes.container} noValidate>
                            <TextField
                                id="date"
                                label="По"
                                type="date"
                                value={this.state.toDate}
                                onChange={this.handleChange('toDate')}
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </form>
                        <Button variant="contained" className={classes.button_show} onClick={this.drawChart}>
                            Показать
                        </Button>
                    </Grid>
                    <ResponsiveContainer width="95%" height={320}>
                        <LineChart data={this.props.data}>
                            <XAxis dataKey="id"/>
                            <YAxis/>
                            <CartesianGrid vertical={false} strokeDasharray="3 3"/>
                            <Tooltip/>
                            <Legend/>
                            <Line type="monotone" dataKey="Электрик" stroke="#82ca9d"/>
                            <Line type="monotone" dataKey="Сантехник" stroke="#ff1744"/>
                            <Line type="monotone" dataKey="Другое" stroke="#ff8000"/>
                            <Line type="monotone" dataKey="Хим обработка" stroke="#ff8000"/>
                            <Line type="monotone" dataKey="Плотник" stroke="#8884d8" activeDot={{r: 8}}/>
                        </LineChart>
                    </ResponsiveContainer>
                </React.Fragment>
            </div>
        );
    }
}

Chart.propTypes = {
    classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    console.log('State:');
    console.log(state);
    return {
        data: state.requests.Data
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({prepareData}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Chart));