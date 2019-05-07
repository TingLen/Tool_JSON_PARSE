import { createSelector } from 'reselect'
import {initialState} from './reducer'

const selectResult = state => state.result ||  initialState

const makeResultData = () => createSelector(
    selectResult,
    result => result.data
)

const makeResultStrdata = () => createSelector(
    selectResult,
    result => result.strData
)

const makeResultIsCpy = () => createSelector(
    selectResult,
    result => result.isCpy
)


export {
    makeResultData,
    makeResultStrdata,
    makeResultIsCpy,
}