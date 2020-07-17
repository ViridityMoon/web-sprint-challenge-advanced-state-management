import {  
    FETCH_SMURF,
    FETCH_SMURF_SUCCESS,
    FETCH_SMURF_FAILURE,
} from '../actions/index';

const initialState = {
    isLoading: false,
    active: false,
    data: [],
    error: '',
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURF :
            return {
                ...state,
                isLoading: true,
            };
            case FETCH_SMURF_SUCCESS :
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                error: '',
            };
        case FETCH_SMURF_FAILURE :
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        default :
            return state;
    };
};