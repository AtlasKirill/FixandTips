import News from './News.jsx';
import React from 'react';
import PropTypes from 'prop-types';
import apiUrls from './../constants/apiUrls';
import { loadNews } from './../actions/news.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class NewsList extends React.Component{
    
    static propTypes = {
        isLoading: PropTypes.bool,
        newsList: PropTypes.arrayOf(PropTypes.number),
    }

    componentDidMount() {
        this.props.loadNews(apiUrls.news);
    }

    render(){
        if(this.props.isLoading) {
            return (<div>Loading...</div>);
        }
        const news = this.props.newsList.map(
            
            item =>  <News key = { item } id = { item }/>,
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
export default connect(mapStateToProps, mapDispatchToProps)(NewsList);