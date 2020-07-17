import React from 'react';
import { connect } from "react-redux";

const SmurfForm = props => {
  console.log(props);
  
  
  return (
    <form className='form' 
    // onSubmit={this.props.onSubmit}
    >
        <label>Enter a ToDo:
            <input
                // onChange=
                // value=
                placeholder= 'Add a Smurf'
                name='toDoInput'
                type='text'
            />
            <button type='submit'>Add</button>
            <button >Clear Completed</button>
        </label>
      </form>
  );
};

const mapStateToProps = state => {
    return {

    };
  };


export default connect(mapStateToProps,
  {}
)(SmurfForm);
