import {
    INPUT_VALUE_CHANGE,
    LIST_CHANGE,
    LIST_ITEM_DELETE,
    LIST_INIT,
    GET_INIT_LIST
} from './actionTypes';

let stateDefault = {
    list : [1,2],
    inputValue: '123'
};

export default (state = stateDefault,action) => {
    // const newState = JSON.parse(JSON.stringify(state));

    const newState = Object.create(state);
    if(action.type === INPUT_VALUE_CHANGE){
        newState.inputValue = action.value;
    }
    if(action.type === LIST_CHANGE){
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
    }
    if(action.type === LIST_ITEM_DELETE){
        newState.list.splice(action.value,1);
    }
    if(action.type === LIST_INIT){
        console.log(action);
        newState.list = action.list;
    }
    if(action.type === GET_INIT_LIST){
        console.log(action)
    }
    return newState;
}