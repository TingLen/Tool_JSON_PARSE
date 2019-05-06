import React, { Component } from 'react'
import styled from 'styled-components'

import Label from '../../components/Label'
import { Input } from 'antd';

const { TextArea } = Input;

const Wrapper = styled.div`
    flex-grow: 1;
    margin: 16px;
`

class Result extends Component {
    render() {
        return (
            <Wrapper>
                <Wrapper>
                    <Label label='解析结果' />
                </Wrapper>
                <Wrapper>
                    <TextArea rows={25} />
                </Wrapper>
            </Wrapper>
        );
    }
}

export default Result;