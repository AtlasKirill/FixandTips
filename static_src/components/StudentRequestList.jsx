import StudentRequest from './StudentRequest.jsx';
import apiUrls from './../constants/apiUrls';
import { loadRequests } from './../actions/requests.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import React from 'react';
import store from './../index.jsx';



class StudentRequestList extends React.Component{

    static propTypes = {
        isLoading: PropTypes.bool,
        requestList: PropTypes.arrayOf(PropTypes.number),
    }
    static defaultProps ={
        requestList : [],
        requests : {}
    }
    componentDidMount() {

        this.props.loadRequests(apiUrls.myRequests(this.props.user.id),store.getState().auth.token);
    }

    render(){
        
        if(this.props.isLoading) {
            return (<div>Loading...</div>);
        }
        const requests = this.props.requestList.map(
            item =>  <StudentRequest key = { item } id = { item }/>,
        );
        if (requests.requestList == [])
            return (<div>NO requestst</div>);
        console.log(requests);
        return( 
            <div>
               { requests } 
            </div>
        );
    }
}
const mapStateToProps = ({ requests, auth }) => {
    return {
        user: auth.user,
        requestList: requests.requestList,
        isLoading: requests.isLoading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ loadRequests }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(StudentRequestList);
