import {
    INPUT_VALUE_CHANGE,
    LIST_CHANGE,
    INPUT_ITEM_DELETE,
    INIT_LIST
} from './actionTypes';

const stateDefault = {
    inputValue : 'aaa',
    list : ['item1','item2']
}

export default (state = stateDefault , action) => {
    const newState = JSON.parse(JSON.stringify(state));
    if(action.type === INPUT_VALUE_CHANGE){
        newState.inputValue = action.value;
    }
    if(action.type === LIST_CHANGE){
        console.log(action,newState)
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
    }
    if(action.type === INPUT_ITEM_DELETE){
        newState.list.splice(action.index,1);
    }
    if(action.type === INIT_LIST){
        newState.list = action.list;
    }
    return newState;
}