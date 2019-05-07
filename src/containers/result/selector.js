import { createSelector } from 'reselect'
import {initialState} from './reducer'

const selectResult = state => state.result ||  initialState

const makeResultData = () => createSelector(
    selectResult,
    result => result.data
)

export {
    makeResultData
}