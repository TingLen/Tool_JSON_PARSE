import React, { Component } from 'react'
import styled from 'styled-components'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { 
    makeResultData } from './selector'
import { 
    updateResultData } from '../redux/action'

import Label from '../../components/Label'

const Wrapper = styled.div`
    flex-grow: 1;
    margin: 16px;
`

const ResultWrapper = styled.div`
    height: 535px;
    padding: 4px 11px;
    border: 1px solid #d9d9d9;
    overflow: auto;
`

const PreNode = styled.pre`
    margin: 8px 0;
`
const KeySpan = styled.span`
    color: #a31515;
`

const ValueSpan = styled.span`
    color: #0451a5;
`

class Result extends Component {
    render() {
        return (
            <Wrapper>
                <Wrapper>
                    <Label label='解析结果' />
                </Wrapper>
                <Wrapper>
                    <ResultWrapper>
                        {
                            this.props.resultData.map(item => {
                                //检测是否有 ： 
                                if(item.indexOf(':') < 0) {
                                    return <PreNode key={item + Math.random()}>{item}</PreNode>
                                }
                                let keyValue = item.split(':')
                                //检测是否结尾是 { [
                                if(keyValue[1].indexOf('{') > 0 || keyValue[1].indexOf('[') > 0) {
                                    return (
                                        <PreNode key={item + Math.random()}>
                                            <KeySpan>{keyValue[0]}</KeySpan>
                                            <span>:</span>
                                            <span>{keyValue[1]}</span>
                                        </PreNode>
                                    )
                                }
                                return (
                                    <PreNode key={item + Math.random()}>
                                        <KeySpan>{keyValue[0]}</KeySpan>
                                        <span>:</span>
                                        <ValueSpan>{keyValue[1]}</ValueSpan>
                                    </PreNode>
                                )
                            })
                        }
                    </ResultWrapper>
                </Wrapper>
            </Wrapper>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    resultData: makeResultData()
})

const mapDispatchToProps = dispatch => ({
    updateResultData: data => dispatch(updateResultData(data))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Result)