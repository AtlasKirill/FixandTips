import React from 'react';
import { connect } from 'react-redux';
import FormControlLabel from '@material-ui/core/FormControlLabel';




class Category extends React.Component{

    render(){
      return (
        <div>
          <FormControlLabel value={this.props.category.title} control={<Radio />} label={this.props.category.title} />
        </div>
      );
    }
}
   

const mapStateToProps = ({ categories }, ownProps ) => {
    return {
        ...categories.caregories[ownProps.id],
    }
}




export default connect(mapStateToProps)(Category);
