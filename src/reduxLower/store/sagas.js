import { put,takeEvery } from 'redux-saga/effects';
import Axios from 'axios';
import {initList} from "./createActions";
import { GET_INIT_LIST } from './actionTypes'


function * getInitList(){
    const res = yield Axios.get('/list.json');
    const action = initList(res.data);
    yield put(action);
}

function* mySaga(){
    yield takeEvery(GET_INIT_LIST,getInitList);
}

export default mySaga;