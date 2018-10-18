// import React from 'react';
// import PropTypes from 'prop-types';

// class User extends React.Component{
//     static propTypes = {
//         id: PropTypes.number,
//         username: PropTypes.string,
    
//     }
//     render(){

//         return( 
//             <div className="user">
//                 <div className="username">Кирилл</div>
//             </div>
//         );
//     }
// }
// export default User;

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

// const styles = {
//   card: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
// };

function User(props) {
  const { classes } = props;
  return (
    <div>
    <Card >
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Елизавета Носкова
          </Typography>
          <Typography component="p">
            Студентка 4-го курса ФРТК МФТИ
          </Typography>
        </CardContent>
    </Card>
    <Paper>
        <h1>личные данные</h1>
    </Paper>
    </div>
  );
}



export default User;