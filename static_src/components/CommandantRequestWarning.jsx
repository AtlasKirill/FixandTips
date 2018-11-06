import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteRequest } from '../actions/requests';
import apiUrls from './../constants/apiUrls';
import store from './../index.jsx';
class CommandantRequestWarning extends React.Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };
    onClick=(e)=> {
        console.log(apiUrls.requestDetail(this.props.id))
        this.props.deleteRequest(apiUrls.requestDetail(this.props.id),{is_deleted:true}, store.getState().auth.token);
    }
    render() {
        return (
            <div>
                <IconButton aria-label="Delete"
                            onClick={this.handleClickOpen}>
                    <DeleteIcon/>
                </IconButton>

                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Вы уверены, что хотите удалить запрос?"}</DialogTitle>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Отменить
                        </Button>
                        <Button onClick={this.onClick} color="secondary" autoFocus>
                            Подтвердить
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}
const mapStateToProps = ({ requests }, ownProps ) => {
    return {
        ...requests.requests[ownProps.id],
    }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ deleteRequest }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(CommandantRequestWarning);