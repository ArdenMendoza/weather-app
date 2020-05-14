import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { CountryList } from './components/countryListPage';
import configureStore from './store/cityStore';

function App() {
  return (
    <Provider store={configureStore()}>
      <div className="App">
        <CountryList />
      </div>
    </Provider >
  );
}

export default App;
