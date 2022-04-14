import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { MainPage } from './components/main';
import configureStore from './store/cityStore';

function App() {
  return (
    <Provider store={configureStore()}>
      <div className="App">
        <MainPage />
      </div>
    </Provider >
  );
}

export default App;
