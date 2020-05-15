import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { CountryList } from './components/countryListPage';
import configureStore from './store/cityStore';
import { MainPage } from './components/main';
import 'bootstrap/dist/css/bootstrap.min.css';

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
