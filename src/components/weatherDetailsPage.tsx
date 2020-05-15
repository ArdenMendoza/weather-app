import React from 'react';
import { connect } from 'react-redux';
import { Country } from '../api/model';
import { IWeatherAppState } from '../store/cityStore';
import { ICityWeatherState } from '../store/reducers/weatherReducer';
import CountryListItem from './weatherDetailsListItem';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

interface ReduxStateProps {
    weatherDetails: ICityWeatherState;
}

const WeatherDetailsDump: React.StatelessComponent<ReduxStateProps> = (props) => {
    const { weatherDetails } = props;
    // Do this UI: https://www.codemag.com/article/1511071/Building-a-Weather-App-using-OpenWeatherMap-and-AFNetworking
    return (
        <div>
            <div>
                <h1>{weatherDetails.country?.toUpperCase()}</h1>
                <h1>{weatherDetails.city}</h1>
            </div>
            <div style={{textAlign: 'center'}}>
                {weatherDetails.weatherForecast.map(f => {
                    return <CountryListItem wd={f} />
                })}
            </div>
        </div>
    );
}

export const WeatherDetails = connect<ReduxStateProps, {}, {}, IWeatherAppState>((state) => ({
    weatherDetails: state.weatherDetails,
}), dispatch => ({
}))(WeatherDetailsDump)