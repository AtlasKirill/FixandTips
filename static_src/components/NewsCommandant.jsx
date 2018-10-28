import 'typeface-roboto';
import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
    card: {
        // width: '90%',
        margin: 10,
        marginTop: 10,
        // padding:10,
    },
    devider: {
        marginTop: 15,
        // width: '90%',
    },
    content: {
        '&:last-child': {
            // padding: 5,
            paddingLeft: 15,
            margin: 5,
            paddingBottom: 0,
            paddingTop: 5,
            marginBottom: 0,
        },
    },
    delete: {
        float: 'right',
        '&:last-child': {
            padding: 5,
            paddingLeft: 15,
            margin: 5,
        },
    },
});

class NewsCommandant extends React.Component {


    render() {
        const {classes} = this.props;

        return (
            <Grid container spacing={10}>
                <Card className={classes.card}>
                    <Grid item md={12}>
                        <CardContent classes={{root: classes.content}}>
                            <Typography variant="h5" gutterBottom>
                                Ремонт окон
                            </Typography>
                            <Typography>
                                26.09.2018
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item md={12}>
                        <CardContent classes={{root: classes.content}}>
                            <Typography component="p">
                                Для всех студентов обязательно!
                                Если вы обнаружили, что у вас неисправны ручки от окон (не открываются,
                                не переводятся в вертикальное положение) или другие проблемы,
                                сообщите об этом в виде заявки в личном кабинете!
                            </Typography>
                            <Divider className={classes.devider}/>
                        </CardContent>
                    </Grid>
                    <Grid item md={12}>
                        <CardContent classes={{root: classes.delete}}>
                            <IconButton aria-label="Delete">
                                <DeleteIcon/>
                            </IconButton>
                        </CardContent>
                    </Grid>
                </Card>
            </Grid>
        );
    }
}

NewsCommandant.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewsCommandant);
