import {
    UPDATE_ORIGINAL_DATA,
    UPDATE_ERROR_MESSAGE,
    UPDATE_RESULT_DATA,
    UPDATE_RESULT_STRDATA,
    UPDATE_RESULT_CPY,
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

export const updateResultStrdata = data => ({
    type: UPDATE_RESULT_STRDATA,
    data
})

export const updateResultCpy = isCpy => ({
    type: UPDATE_RESULT_CPY,
    isCpy
})