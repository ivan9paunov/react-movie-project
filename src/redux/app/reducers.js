import actions from './action-types';
import {combineReducers} from 'redux';


function listView(state = false, action) {
    switch(action.type) {
        case actions.SET_LIST_VIEW: {
            return action.payload
        }
        default: 
            return state;
    }
}

export default combineReducers({listView});
