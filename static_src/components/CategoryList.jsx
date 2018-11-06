import Category from './Category.jsx';
import React from 'react';
import PropTypes from 'prop-types';
import apiUrls from './../constants/apiUrls';
import { loadCategories } from './../actions/categories';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class CategoryList extends React.Component{
    
    static propTypes = {
        isLoading: PropTypes.bool,
        categoryList: PropTypes.arrayOf(PropTypes.number),
    }

    componentDidMount() {
        this.props.loadCategories(apiUrls.categories);
    }

    render(){
        if(this.props.isLoading) {
            return (<div>Loading...</div>);
        }
        const categories = this.props.categoryList.map(
            item =>  <Category key = { item } id = { item }/>,
        );
        return( 
            <div>
               { categories } 
            </div>
        );
    }
}

const mapStateToProps = ({ categories }) => {
    return {
        categoryList: categories.categoryList,
        isLoading: categories.isLoading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ loadCategories }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);