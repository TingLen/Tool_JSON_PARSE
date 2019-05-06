import React from 'react';
import styled from 'styled-components'

import Origin from './containers/original'
import Result from './containers/result'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;

`

function App() {
  return (
    <Wrapper className="App">
      <Origin />
      <Result />
    </Wrapper>
  );
}

export default App;
