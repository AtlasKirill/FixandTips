import StudentRequest from './StudentRequest.jsx';
import apiUrls from './../constants/apiUrls';
import { loadRequests } from './../actions/requests.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import React from 'react';
import Button from '@material-ui/core/Button';
import store from './../index.jsx';
import { json2csv }from "json2csv";

//var json2csv = require('json2csv');
var json = [
    {
      "car": "Audi",
      "price": 40000,
      "color": "blue"
    }, {
      "car": "BMW",
      "price": 35000,
      "color": "black"
    }, {
      "car": "Porsche",
      "price": 60000,
      "color": "green"
    }
  ];



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
    onClick=(e)=> {
        json2csv({data: json, fields: ['car', 'price', 'color']}, function(err, csv) {
            if (err) console.log(err);
            fs.writeFile('file.csv', csv, function(err) {
              if (err) throw err;
              console.log('file saved');
            });
          });
    };
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
