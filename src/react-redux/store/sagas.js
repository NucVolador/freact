import {takeEvery,put} from 'redux-saga/effects';
import {
    GET_INIT_LIST
} from './actionTypes';
import {initList} from './createActions';
import Axios from 'axios';

function * getInitList(){
    const {data} = yield Axios.get('/list.json');
    const action = initList(data);
    yield put(action);
}

export default function* (){
    yield takeEvery(GET_INIT_LIST,getInitList);
}