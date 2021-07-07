import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { fetchSmurf } from '../actions/index';

const SmurfList = props => {
    console.log(props);
    useEffect(() => {
        props.fetchSmurf()
        console.log("useEffect")
    }, []);

    return (
        <div>
            {props.data.map((smurf) => <div><p> Name: {smurf.name}</p> <p>Age: {smurf.age}</p> <p> Height: {smurf.height}</p></div>)}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        data: state.data
    };
};


export default connect(mapStateToProps,
  { fetchSmurf }
)(SmurfList);
