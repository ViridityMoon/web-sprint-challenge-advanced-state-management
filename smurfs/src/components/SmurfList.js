import React from 'react';
import { connect } from "react-redux";

const SmurfList = props => {
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
)(SmurfList);
