import {
    INPUT_VALUE_CHANGE,
    LIST_CHANGE,
    INPUT_ITEM_DELETE,
    INIT_LIST,
    GET_INIT_LIST
} from './actionTypes';

export const getInputValueChange = value => ({
    type : INPUT_VALUE_CHANGE,
    value
})

export const getListChange = () => ({
    type : LIST_CHANGE,
})
export const getListItemDelete = index => ({
    type : INPUT_ITEM_DELETE,
    index
})

export const initList = list => ({
    type : INIT_LIST,
    list
})

export const getInitList = () => ({
    type : GET_INIT_LIST
})
