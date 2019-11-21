import React from 'react';
import {Provider} from 'react-redux';
import Router from './routes/Router';
import {createStore} from 'redux';

class App extends React.Component {
  render() {
    // eslint-disable-next-line no-undef
    // const store = createStore()
    return (
      /*<Provider store={store}>*/
      <Router />
      // </Provider>
    );
  }
}

export default App;
