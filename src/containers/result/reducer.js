import produce from 'immer'

import { 
    UPDATE_RESULT_DATA,
    UPDATE_RESULT_STRDATA,
    UPDATE_RESULT_CPY,
     } from '../redux/constans'

export const initialState = {
    data: [],
    strData: '',
    isCpy: false,
}

const reducer = (state=initialState,action) => 
    produce(state, draft => {
        switch (action.type) {
            case UPDATE_RESULT_DATA:
                draft.data = action.data
                break;
            case UPDATE_RESULT_STRDATA:
                draft.strData = action.data
                break;
            case UPDATE_RESULT_CPY:
                draft.isCpy = action.isCpy
                break;
        }
    })

export default reducer
