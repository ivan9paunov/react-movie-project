import actions from './action-types';

export function setListView(value){
    return {type: actions.SET_LIST_VIEW, payload: value};
}