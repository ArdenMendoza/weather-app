import React from 'react';
import { connect } from 'react-redux';
import { Country } from '../models/model';
import { IWeatherAppState } from '../store/cityStore';
import { WeatherDetails } from './weatherDetailsPage';
import { CountryList } from './countryListPage';
import { Navbar } from 'react-bootstrap';
import weatherAppLogo from '../resources/weatherAppIcon.svg';

interface ReduxStateProps {
    country: Country;
}

const getStyles = () => {
    return {
        navbarColor: {
            backgroundColor: '#00529E'
        } as React.CSSProperties
    };
}

const MainPageDump: React.StatelessComponent<ReduxStateProps> = (props) => {
    const { country } = props;
    const styles = getStyles();
    return <div>
        <Navbar variant="dark" style={styles.navbarColor} >
            <Navbar.Brand>
                <img alt="" src={weatherAppLogo} width="30" height="30" className="d-inline-block align-top" />
                {' SEA Countries | Weather Forecast'}
            </Navbar.Brand>
        </Navbar>
        {country ? <WeatherDetails /> : <CountryList />}
    </div>
}

export const MainPage = connect<ReduxStateProps, {}, {}, IWeatherAppState>((state) => ({
    country: state.weatherDetails.country,
}), dispatch => ({
}))(MainPageDump)