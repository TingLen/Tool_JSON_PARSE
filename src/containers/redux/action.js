import {
    UPDATE_ORIGINAL_DATA,
    UPDATE_ERROR_MESSAGE,
    UPDATE_RESULT_DATA
} from './constans'

export const updateOriginData = data => ({
    type: UPDATE_ORIGINAL_DATA,
    data
})

export const updateErrorMessage = error => ({
    type: UPDATE_ERROR_MESSAGE,
    error
})

export const updateResultData = data => ({
    type: UPDATE_RESULT_DATA,
    data
})