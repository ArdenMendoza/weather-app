import React from 'react';
import { connect } from 'react-redux';
import { Country } from '../api/model';
import { IWeatherAppState } from '../store/cityStore';
import { ICityWeatherState } from '../store/reducers/weatherReducer';
import CountryListItem from './weatherDetailsListItem';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import { navigateHome } from '../store/actions/weatherDetailsActions';

interface ReduxStateProps {
    weatherDetails: ICityWeatherState;
}

interface DispatchProps {
    onNavigateHome: () => void;
}

const WeatherDetailsDump: React.StatelessComponent<ReduxStateProps & DispatchProps> = (props) => {
    const { weatherDetails, onNavigateHome } = props;
    // Do this UI: https://www.codemag.com/article/1511071/Building-a-Weather-App-using-OpenWeatherMap-and-AFNetworking
    return (
        <div>
            <Button onClick={onNavigateHome}>Back</Button>
            <div>
                <h1>{weatherDetails.country?.toUpperCase()}</h1>
                <h1>{weatherDetails.city}</h1>
            </div>
            <div style={{ textAlign: 'center' }}>
                {weatherDetails.weatherForecast.map(f => {
                    return <CountryListItem wd={f} />
                })}
            </div>
        </div>
    );
}

export const WeatherDetails = connect<ReduxStateProps, DispatchProps, {}, IWeatherAppState>((state) => ({
    weatherDetails: state.weatherDetails,
}), dispatch => ({
    onNavigateHome: () => dispatch(navigateHome())
}))(WeatherDetailsDump)