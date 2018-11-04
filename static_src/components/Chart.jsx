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

const data = [
    {id: '1', Электрик: 4, Сантехник: 5, Плотник: 5},
    {id: '2', Электрик: 2, Сантехник: 1, Плотник: 8},
    {id: '3', Электрик: 6, Сантехник: 8, Плотник: 13},
    {id: '4', Электрик: 9, Сантехник: 9, Плотник: 9},
    {id: '5', Электрик: 3, Сантехник: 12, Плотник: 6},
];


const styles = theme => ({
    button: {
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
// <<<<<<< HEAD
//     state = {
//         color: 'default',
//         clicked: false,
//     };
//
//     handleClickChange = event => {
//         this.setState({clicked: !this.state.clicked});
//         this.setState({color: this.state.clicked ? 'default' : 'secondary'});
//     };
//
// =======
    
    state = {
        color: 'default',
        clickedUrgent: false,
        clickedProcessing: false,
        clickedSent: false,
        clickedCarpenter: false,
        clickedElictrician: false,
        clickedPlumber: false,
        clickedChemistry: false,
        colorProcessing: 'default',
        colorSent: 'default',
        colorUrgent: 'default',
        colorCarpenter: 'default',
        colorElictrician: 'default',
        colorPlumber: 'default',
        colorChemistry: 'default',
        fromDate: '',
        toDate: '',
        status:'',
        category:'',
        urgency: false
    };

    searchProcessing = event => {
        this.setState({ clickedProcessing: ! this.state.clickedProcessing });
        this.setState({ colorProcessing: this.state.clickedProcessing ? 'default' : 'secondary' });
        this.setState({ urgency: ! this.state.urgency });

    };
    searchSent = event => {
        this.setState({ clickedSent: ! this.state.clickedSent });
        this.setState({ colorSent: this.state.clickedSent ? 'default' : 'secondary' });
        this.setState({ urgency: ! this.state.urgency });

    };
    searchUrgent = event => {
        this.setState({ clickedUrgent: ! this.state.clickedUrgent });
        this.setState({ colorUrgent: this.state.clickedUrgent ? 'default' : 'secondary' });
        this.setState({ urgency: ! this.state.urgency });

    };
    searchСarpenter = event => {
        this.setState({ clickedCarpenter: ! this.state.clickedCarpenter });
        this.setState({ colorCarpenter: this.state.clickedCarpenter ? 'default' : 'secondary' });
        this.setState({ category: 'Плотник' });

    };
    searchPlumber = event => {
        this.setState({ clickedPlumber: ! this.state.clickedPlumber });
        this.setState({ colorPlumber: this.state.clickedPlumber ? 'default' : 'secondary' });
        this.setState({ category: 'Сантехник' });

    };
    searchElectrician = event => {
        this.setState({ clickedElictrician: ! this.state.clickedElictrician });
        this.setState({ colorElictrician: this.state.clickedElictrician ? 'default' : 'secondary' });
        this.setState({ category: 'Электрик' });

    };
    searchChemistry = event => {
        this.setState({ clickedChemistry: ! this.state.clickedChemistry });
        this.setState({ colorChemistry: this.state.clickedChemistry ? 'default' : 'secondary' });
        this.setState({ category: 'Хим обработка' });

    };
    drawChart = event => {
        console.log(apiUrls.filter(this.state.status,this.state.category,this.state.urgency));
        this.props.filterRequest(apiUrls.filter(this.state.status,this.state.category,this.state.urgency));
        
    };
// >>>>>>> liza_development
    render() {
        const {classes} = this.props;

        return (
            <React.Fragment>

{/*<<<<<<< HEAD*/}
                <Typography variant="h4" gutterBottom className={classes.head}>
                    Статистика
                </Typography>
                {/*<Typography variant="overline" gutterBottom className={classes.status}>*/}
                    {/*Статус:*/}
                {/*</Typography>*/}

                {/*<Grid container spacing={5}>*/}
                    {/*<Button*/}
                        {/*className={classes.button}*/}
                        {/*onClick={this.handleClickChange}*/}
                        {/*style={*/}
                            {/*this.state.color === 'secondary'*/}
                                {/*? {*/}
                                    {/*'--background-start': '#ec407a',*/}
                                {/*}*/}
                                {/*: {*/}
                                    {/*'--background-end': '#ffffff',*/}
                                {/*}*/}
                        {/*}*/}
                    {/*>*/}
                        {/*В ПРОЦЕССЕ*/}
                    {/*</Button>*/}
                    {/*<Button variant="contained" className={classes.button}>*/}
                        {/*НОВЫЕ*/}
                    {/*</Button>*/}
                    {/*<Button variant="contained" className={classes.button}>*/}
                        {/*СРОЧНО*/}
                    {/*</Button>*/}
                    {/*<Button variant="contained" className={classes.button}>*/}
                        {/*ВЫПОЛНЕНЫ*/}
                    {/*</Button>*/}
                {/*</Grid>*/}

                {/*<Typography variant="overline" gutterBottom className={classes.status}>*/}
                    {/*Тип заявок:*/}
                {/*</Typography>*/}
                {/*<Grid container spacing={5}>*/}

                    {/*<Button variant="contained" className={classes.button}>*/}
                        {/*ПЛОТНИК*/}
                    {/*</Button>*/}
                    {/*<Button variant="contained" className={classes.button}>*/}
                        {/*САНТЕХНИК*/}
                    {/*</Button>*/}
                    {/*<Button variant="contained" className={classes.button}>*/}
                        {/*ЭЛЕКТРИК*/}
                    {/*</Button>*/}
                    {/*<Button variant="contained" className={classes.button}>*/}
                        {/*ХИМ ОБРАБОТКА*/}
                    {/*</Button>*/}
                    {/*<Button variant="contained" className={classes.button}>*/}
                        {/*ДРУГОЕ*/}
                    {/*</Button>*/}
                {/*</Grid>*/}
{/*=======*/}
                <Typography variant="overline" gutterBottom className={classes.status}>
                    Статус:
                </Typography>
                    <Grid container spacing={5}>

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
                <Button variant="contained"  className={classes.button} 
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
                <Button variant="contained" className={classes.button} >
                    ДРУГОЕ
                </Button>
                    </Grid>
>>>>>>> liza_development
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
                            defaultValue="2017-05-24"
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
                            defaultValue="2017-05-24"
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



                <ResponsiveContainer width="95%" height={320} >
                    <LineChart data={data}>
                        <XAxis dataKey="id"/>
                        <YAxis/>
                        <CartesianGrid vertical={false} strokeDasharray="3 3"/>
                        <Tooltip/>
                        <Legend/>
                        <Line type="monotone" dataKey="Электрик" stroke="#82ca9d"/>
                        <Line type="monotone" dataKey="Плотник" stroke="#ff1744"/>
                        <Line type="monotone" dataKey="Сантехник" stroke="#8884d8" activeDot={{r: 8}}/>
                    </LineChart>
                </ResponsiveContainer>


            </React.Fragment>

        );
    }
}

Chart.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Chart);
