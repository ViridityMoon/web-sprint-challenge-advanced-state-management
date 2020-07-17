import React from 'react';
import { connect } from "react-redux";

const SmurfForm = props => {
  console.log(props);
  
  
  return (
    <li>
    </li>
  );
};

const mapStateToProps = state => {
    return {

    };
  };


export default connect(mapStateToProps,
  {}
)(SmurfForm);
