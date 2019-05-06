import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
`

function Label({label}) {
    return(
        <Wrapper>
            <label>
                {label}
            </label>
        </Wrapper>
    )
}

export default Label