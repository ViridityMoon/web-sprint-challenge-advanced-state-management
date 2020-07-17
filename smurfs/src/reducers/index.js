import {  
    FETCH_SMURF,
    FETCH_SMURF_SUCCESS,
    FETCH_SMURF_FAILURE,
    POST_SMURF,
    POST_SMURF_SUCCESS,
    POST_SMURF_FAILURE,
    CHANGE_HANDLER,
} from '../actions/index';

const initialFormValues = {
    name: '',
    age: '',
    height: '',
}

const initialState = {
    isLoading: false,
    formValue: initialFormValues,
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
        case POST_SMURF :
            return {
                ...state,
                isLoading: false,
            };
        case POST_SMURF_SUCCESS :
            return {
                ...state,
                isLoading: false,
                formValue: initialFormValues,
                data: action.payload,
                error: '',
            };
        case POST_SMURF_FAILURE :
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case CHANGE_HANDLER :
            return {
                ...state,
                formValue: {
                    ...state.formValue,
                    [action.payload.target.name]: action.payload.target.value,
                }
            };
        default :
            return state;
    };
};