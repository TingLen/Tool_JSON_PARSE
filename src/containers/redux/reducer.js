import { combineReducers } from 'redux'
import original from '../original/reducer'
import result from '../result/reducer'

export default combineReducers({
    original,
    result
})