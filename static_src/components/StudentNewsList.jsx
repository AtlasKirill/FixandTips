import StudentNews from './StudentNews.jsx';
import React from 'react';
import PropTypes from 'prop-types';
import apiUrls from './../constants/apiUrls';
import { loadNews } from './../actions/news.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import store from './../index.jsx';

class StudentNewsList extends React.Component{
    
    static propTypes = {
        isLoading: PropTypes.bool,
        newsList: PropTypes.arrayOf(PropTypes.number),
    }

    componentDidMount() {
        this.props.loadNews(apiUrls.news,store.getState().auth.token);
    }

    render(){
        if(this.props.isLoading) {
            return (<div>Loading...</div>);
        }
        const news = this.props.newsList.map(
            
            item =>  <StudentNews key = { item } id = { item }/>,
        );
        return( 
            <div>
               { news } 
            </div>
        );
    }
}

const mapStateToProps = ({ news }) => {
    return {
        newsList: news.newsList,
        isLoading: news.isLoading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ loadNews }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(StudentNewsList);