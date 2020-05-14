import React from 'react';
import { connect } from 'react-redux';
import { Country } from '../api/model';
import { IWeatherAppState } from '../store/cityStore';
import { SEACapitals } from '../resources/cityListPerCountry';
import { selectCountry } from '../store/actions/countryListActions';
import { ICityWeatherState } from '../store/reducers/weatherReducer';
import CountryListItem from './countryListItem';

interface ReduxStateProps {
    weatherDetails: ICityWeatherState;
}

const WeatherDetailsDump: React.StatelessComponent<ReduxStateProps> = (props) => {
    const { weatherDetails } = props;
    return <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ width: '200px' }}>
            <div>{`Country: '${weatherDetails.country}' `}</div>
            <div>{`City: '${weatherDetails.city}' `}</div>
        </div>
        <div style={{ flex: 1, overflowY: 'auto' }}>
            {'Weather Forecast: '}
            {weatherDetails.weatherForecast.map(f => {
                return <CountryListItem wd={f} />
            })}
        </div>

    </div>;
}

export const WeatherDetails = connect<ReduxStateProps, {}, {}, IWeatherAppState>((state) => ({
    weatherDetails: state.weatherDetails,
}), dispatch => ({
}))(WeatherDetailsDump)