import produce from 'immer'

import { 
    UPDATE_ORIGINAL_DATA,
    UPDATE_ERROR_MESSAGE } from '../redux/constans'

export const initialState = {
    data: '',
    error: null,
}

const reducer = (state=initialState,action) => 
    produce(state,draft => {
        switch (action.type) {
            case UPDATE_ORIGINAL_DATA:
                draft.data = action.data
                break;
            case UPDATE_ERROR_MESSAGE: 
                draft.error = action.error;
                break;
        }
    })

export default reducer