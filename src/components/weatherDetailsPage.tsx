import React from 'react';
import { connect } from 'react-redux';
import { Country } from '../api/model';
import { IWeatherAppState } from '../store/cityStore';
import { ICityWeatherState } from '../store/reducers/weatherReducer';
import CountryListItem from './weatherDetailsListItem';
import { Container, Row, Col, ListGroup, Button, Breadcrumb } from 'react-bootstrap';
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
    https://www.countryflags.io/be/flat/64.png
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item onClick={onNavigateHome}>Home</Breadcrumb.Item>
                <Breadcrumb.Item>{`5 day 3 hour Forecast for ${weatherDetails.city}, ${weatherDetails.country}`}</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ marginTop: '10px' }}>
                {/* <Button variant="light" onClick={onNavigateHome} style={{ margin: '5px' }}>{'<< Home'}</Button> */}
                <img
                    // src={`https://www.countryflags.io/${weatherDetails.countryId}/flat/64.png`}
                    src={`https://cdn.countryflags.com/thumbs/${weatherDetails.country?.toLocaleLowerCase()}/flag-round-250.png`}
                    style={{
                        borderRadius: '500px',
                        display: 'inline',
                        boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
                        verticalAlign: 'top'
                    }}
                    height={'50px'}
                    width={'50px'} />
                <div style={{ display: 'inline-block', marginLeft: '10px' }}>
                    <h1>{weatherDetails.country?.toUpperCase()}</h1>
                    <h1>{weatherDetails.city}</h1>
                </div>
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