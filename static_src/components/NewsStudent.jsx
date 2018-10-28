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


const styles = theme => ({
    card: {
        // width: '90%',
        margin: 10,
        // padding:10,
    },
    button: {
        margin: theme.spacing.unit,
    },
});

class NewsStudent extends React.Component {


    render() {
        const {classes} = this.props;

        return (
            <Card className={classes.card}>
                <CardHeader
                    title="Ремонт окон"
                    subheader="26.09.2018"
                />

                <CardContent>
                    <Typography component="p">
                        Для всех студентов обязательно!
                        Если вы обнаружили, что у вас неисправны ручки от окон (не открываются,
                        не переводятся в вертикальное положение) или другие проблемы,
                        сообщите об этом в виде заявки в личном кабинете!
                    </Typography>
                    <Divider/>
                </CardContent>

            </Card>
        );
    }
}

NewsStudent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewsStudent);
