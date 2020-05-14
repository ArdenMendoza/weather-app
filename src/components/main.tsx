import React from 'react';
import { connect } from 'react-redux';
import { Country } from '../api/model';
import { IWeatherAppState } from '../store/cityStore';
import { SEACapitals } from '../resources/cityListPerCountry';
import { selectCountry } from '../store/actions/countryListActions';
import { ICityWeatherState } from '../store/reducers/weatherReducer';
import { WeatherDetails } from './weatherDetailsPage';
import { CountryList } from './countryListPage';

interface ReduxStateProps {
    country: Country;
}

const MainPageDump: React.StatelessComponent<ReduxStateProps> = (props) => {
    const { country } = props;
    return <div>
        {country ? <WeatherDetails/> : <CountryList/>}
    </div>;
}

export const MainPage = connect<ReduxStateProps, {}, {}, IWeatherAppState>((state) => ({
    country: state.weatherDetails.country,
}), dispatch => ({
}))(MainPageDump)