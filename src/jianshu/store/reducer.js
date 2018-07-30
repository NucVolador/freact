import { combineReducers } from 'redux-immutable'
import { reducer as Home} from '../pages/home/store';
import { reducer as Header} from '../component/header/store';


const reducer = combineReducers({
    Header,
    Home
})


export default reducer;