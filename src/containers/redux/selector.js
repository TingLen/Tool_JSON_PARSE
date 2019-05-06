import { createSelector } from 'reselect'
import {initialState} from '../original/reducer'

const selectOriginal = state => state.original ||  initialState

const makeOriginalData = () => createSelector(
    selectOriginal,
    original => original.data
)
const makeOriginalError = () => createSelector(
    selectOriginal,
    original => original.error
)

export {
    makeOriginalData,
    makeOriginalError
}