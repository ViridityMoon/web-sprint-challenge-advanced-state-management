import axios from 'axios';

export const FETCH_SMURF = 'FETCH_SMURF';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE';
export const POST_SMURF = 'POST_SMURF';
export const POST_SMURF_SUCCESS = 'POST_SMURF_SUCCESS';
export const POST_SMURF_FAILURE = 'POST_SMURF_FAILURE';
export const CHANGE_HANDLER = 'CHANGE_HANDLER';



export const fetchSmurf = () => {
    return dispatch => {
        dispatch({ type: FETCH_SMURF });
        axios
          .get('http://localhost:3333/smurfs')
          .then(res => {
              console.log(res);
              dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data});
          })
          .catch(err => {
              console.log(err);
              dispatch({ type: FETCH_SMURF_FAILURE, payload: err.data});
          });
    };
};

export const postSmurf = () => {
    return dispatch => {
        dispatch({ type: POST_SMURF})
        axios
          .post('http://localhost:3333/smurfs')
          .then(res => {
            console.log(res);
            dispatch({ type: POST_SMURF_SUCCESS, payload: res.data});
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: POST_SMURF_FAILURE, payload: err.data});
        });
        fetchSmurf();
    }
};