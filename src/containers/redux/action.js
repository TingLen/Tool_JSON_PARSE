import {
    UPDATE_ORIGINAL_DATA,
    UPDATE_ERROR_MESSAGE
} from './constans'

export const updateOriginData = data => ({
    type: UPDATE_ORIGINAL_DATA,
    data
})

export const updateErrorMessage = error => ({
    type: UPDATE_ERROR_MESSAGE,
    error
})