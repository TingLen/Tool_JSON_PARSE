import React from 'react';
import styled from 'styled-components'
import {Provider} from 'react-redux'
import {createStore,compose} from 'redux'
import reducers from './containers/redux/reducer'

import Origin from './containers/original'
import Result from './containers/result'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
`

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(
  reducers, /* preloadedState, */ 
  composeEnhancers());



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
