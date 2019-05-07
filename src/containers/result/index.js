import React, { Component } from 'react'
import styled from 'styled-components'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { 
    makeResultData,
    makeResultStrdata,
    makeResultIsCpy,
     } from './selector'
import { 
    updateResultData,
    updateResultCpy,
     } from '../redux/action'


import Label from '../../components/Label'
import {Button,Icon} from 'antd'
import ClipboardJS from 'clipboard'

const Wrapper = styled.div`
    flex-grow: 2;
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
                <Wrapper>
                        <Button
                         onClick={this.handleClick} 
                         className='cpybtn' 
                         data-clipboard-text={this.props.resultStrdata}>
                         复制
                         </Button>
                         {
                             this.props.resultIsCpy ?
                             <Icon type="check" style={{marginLeft: '16px', color: '#52c41a'}}/> : 
                             null
                         }
                </Wrapper>
            </Wrapper>
        );
    }

    componentDidMount(){
        const clipboard = new ClipboardJS('.cpybtn')
        function callback(e,updateCpy){
            updateCpy(true)
        }
        clipboard.on('success',e => callback(e,this.props.updateResultCpy))
    }
}

const mapStateToProps = createStructuredSelector({
    resultData: makeResultData(),
    resultStrdata: makeResultStrdata(),
    resultIsCpy: makeResultIsCpy(),
})

const mapDispatchToProps = dispatch => ({
    updateResultData: data => dispatch(updateResultData(data)),
    updateResultCpy: boolean => dispatch(updateResultCpy(boolean)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Result)