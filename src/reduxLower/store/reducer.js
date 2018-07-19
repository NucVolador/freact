let stateDefault = {
    list : [1,2],
    inputValue: '123'
};

export default (state = stateDefault,action) => {
    const newState = JSON.parse(JSON.stringify(state));
    if(action.type === 'inputValue_change'){
        newState.inputValue = action.value;
    }
    if(action.type === 'list_change'){
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
    }
    if(action.type === 'list_delete'){
        newState.list.splice(action.value,1);
    }
    return newState;
}