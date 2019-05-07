import React, { Component } from 'react'
import styled from 'styled-components'

import Label from '../../components/Label'
import { Input,Button,Alert } from 'antd'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { 
    makeOriginalData,
    makeOriginalError } from './selector'
import { 
    updateOriginData,
    updateErrorMessage,
    updateResultData } from '../redux/action'

const { TextArea } = Input;

const Wrapper =styled.div`
    flex-grow:1;
    margin: 16px;
`

class Original extends Component {

    parseJSON = () => {
        try {
            let data = JSON.stringify(this.stringToJson(this.props.originData),null,2)

            let arr = data.split('\n')
            
            this.props.updateResultData(arr)

            this.props.updateErrorMessage(null)
        } catch (error) {
            this.props.updateErrorMessage(error.message)
        }
        
        
    }

    stringToJson = (str) => {
        //递归调用，防止当传递的字符串有转义字符之类的情况，造成调用JSON.parse依旧只是一个字符串
        let data = JSON.parse(str)
        if(typeof data === 'string'){
            console.log(1)
            data = this.stringToJson(data)
        }
        return data
    }

    render() {
        if(this.props.error !== null){
            return (
                <Wrapper >
                    <Wrapper>
                        <Label label='原始数据'/>
                    </Wrapper>
                    <Wrapper>
                        <TextArea
                         autosize={false}
                         rows={25} 
                         onChange={e => this.props.updateOriginData(e.target.value)} 
                         value={this.props.originData}/>
                    </Wrapper>
                    <Alert 
                        description={this.props.error}
                        type="error"/>
                    <Wrapper>
                        <Button onClick={this.parseJSON}>解析JSON</Button>
                    </Wrapper>
                </Wrapper>
            )
        }
        return (
            <Wrapper >
                <Wrapper>
                    <Label label='原始数据'/>
                </Wrapper>
                <Wrapper>
                    <TextArea
                     autosize={false}
                     rows={25} 
                     onChange={e => this.props.updateOriginData(e.target.value)} 
                     value={this.props.originData}/>
                </Wrapper>
                <Wrapper>
                    <Button onClick={this.parseJSON}>解析JSON</Button>
                </Wrapper>
            </Wrapper>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    originData: makeOriginalData(),
    error: makeOriginalError()
})

const mapDispatchToProps = dispatch => ({
    updateOriginData: data => dispatch(updateOriginData(data)),
    updateErrorMessage: error => dispatch(updateErrorMessage(error)),
    updateResultData: data => dispatch(updateResultData(data))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Original)