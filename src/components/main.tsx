import React from 'react';
import { connect } from 'react-redux';
import { Country } from '../api/model';
import { IWeatherAppState } from '../store/cityStore';
import { SEACapitals } from '../resources/cityListPerCountry';
import { ICityWeatherState } from '../store/reducers/weatherReducer';
import { WeatherDetails } from './weatherDetailsPage';
import { CountryList } from './countryListPage';
import { Navbar } from 'react-bootstrap';
import weatherAppLogo from '../resources/weatherAppIcon.svg';

interface ReduxStateProps {
    country: Country;
}

const MainPageDump: React.StatelessComponent<ReduxStateProps> = (props) => {
    const { country } = props;
    return <div>
        <Navbar variant="dark" style={{backgroundColor: '#00529E'}}>
            <Navbar.Brand>
                <img alt="" src={weatherAppLogo} width="30" height="30" className="d-inline-block align-top" />
                {' SEA Weather'}
            </Navbar.Brand>
        </Navbar>
        {country ? <WeatherDetails /> : <CountryList />}
    </div>
}

export const MainPage = connect<ReduxStateProps, {}, {}, IWeatherAppState>((state) => ({
    country: state.weatherDetails.country,
}), dispatch => ({
}))(MainPageDump)