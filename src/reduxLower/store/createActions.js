import {
    INPUT_VALUE_CHANGE,
    LIST_CHANGE,
    LIST_ITEM_DELETE,
    LIST_INIT,
    GET_INIT_LIST
} from './actionTypes';



export const getInputValueChange = value => ({
    type : INPUT_VALUE_CHANGE,
    value
})

export const getListChange = () =>({
    type : LIST_CHANGE
})

export const getListItemDelete = () => ({
    type : LIST_ITEM_DELETE
})

export const initList = list => ({
    type : LIST_INIT,
    list
})

export const getInitList = index => ({
    type : GET_INIT_LIST,
    index
})


//redux-thunk


// import Axios from 'axios';
// export const getList = () => {
//     return (dispatch) => {
//         Axios.get('/list.json')
//             .then((res) => {
//                 const action = initList(res.data);
//                 dispatch(action);
//             })
//     }
// }