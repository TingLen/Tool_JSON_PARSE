import produce from 'immer'

import { 
    UPDATE_RESULT_DATA } from '../redux/constans'

export const initialState = {
    data: [],
}

const reducer = (state=initialState,action) => 
    produce(state, draft => {
        switch (action.type) {
            case UPDATE_RESULT_DATA:
                draft.data = action.data
                break;
        }
    })

export default reducer
