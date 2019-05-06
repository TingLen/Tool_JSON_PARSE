import React from 'react';
import styled from 'styled-components'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from './containers/redux/reducer'

import Origin from './containers/original'
import Result from './containers/result'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
`
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function App() {
  return (
    <Provider store={store}>
      <Wrapper className="App">
        <Origin />
        <Result />
    </Wrapper>
    </Provider>
  );
}

export default App;
