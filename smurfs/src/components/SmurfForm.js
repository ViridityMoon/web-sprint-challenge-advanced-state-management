import React from 'react';
import { connect } from "react-redux";
import { handleChange, onSubmit } from '../actions/index';

const SmurfForm = props => {
  console.log(props);
  
  const handleChange = e => {
    e.preventDefault();
    props.handleChange(e);
  };
  const onSubmit = e => {
    e.preventDefault();
    props.onSubmit(props.formValue);
  };
  return (
    <form className='form' onSubmit={onSubmit}>
        <h1>Enter a Smurf</h1>
        <label>Name:
            <input
                onChange={handleChange}
                value={props.formValue.name}
                placeholder= 'name'
                name='name'
                type='text'
            />
        </label>
        <label>Age:
            <input
                onChange={handleChange}
                value={props.formValue.age}
                placeholder= 'age'
                name='age'
                type='text'
            />
        </label>
        <label>Height:
            <input
                onChange={handleChange}
                value={props.formValue.height}
                placeholder= 'height'
                name='height'
                type='text'
            />
        </label>
            <button type='submit'>Add</button>
            <button >Clear Completed</button>
      </form>
  );
};

const mapStateToProps = state => {
    return {
        formValue: state.formValue
    };
  };


export default connect(mapStateToProps,
  {handleChange, onSubmit}
)(SmurfForm);
