import React, { Component } from 'react'
import styled from 'styled-components'

import Label from '../../components/Label'
import { Input,Button } from 'antd';

const { TextArea } = Input;

const Wrapper =styled.div`
    flex-grow:1;
    margin: 16px;
`

class Original extends Component {
    render() {
        return (
            <Wrapper >
                <Wrapper>
                    <Label label='原始数据'/>
                </Wrapper>
                <Wrapper>
                    <TextArea autosize={false} rows={25}/>
                </Wrapper>
                <Wrapper>
                    <Button>解析JSON</Button>
                </Wrapper>
            </Wrapper>
        );
    }
}

export default Original;