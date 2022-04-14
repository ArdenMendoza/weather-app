import React from 'react';
import { connect } from 'react-redux';
import { IWeatherAppState } from '../store/cityStore';
import { ICityWeatherState } from '../store/reducers/weatherReducer';
import WDListItemDay from './weatherDetailsListItem';
import { Breadcrumb } from 'react-bootstrap';
import { navigateHome } from '../store/actions/weatherDetailsActions';

interface ReduxStateProps {
    weatherDetails: ICityWeatherState;
}

interface DispatchProps {
    onNavigateHome: () => void;
}
const getStyles = () => {
    return {
        countryFlagImg: {
            borderRadius: '500px',
            display: 'inline',
            boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
            verticalAlign: 'top'
        } as React.CSSProperties,
        detailPageHeader: {
            marginTop: '10px',
        } as React.CSSProperties,
        countryDetails: {
            display: 'inline-block',
            marginLeft: '10px'
        } as React.CSSProperties,
        detailPageContainer: {
            textAlign: 'center'
        } as React.CSSProperties,
    };
}

const WeatherDetailsDump: React.StatelessComponent<ReduxStateProps & DispatchProps> = (props) => {
    const { weatherDetails, onNavigateHome } = props;
    const styles = getStyles();
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item onClick={onNavigateHome}>Home</Breadcrumb.Item>
                <Breadcrumb.Item>{`5 day 3 hour Forecast for ${weatherDetails.city}, ${weatherDetails.country}`}</Breadcrumb.Item>
            </Breadcrumb>
            <div style={styles.detailPageHeader}>
                <img
                    alt={'weatherDetailsCountry'}
                    src={`https://cdn.countryflags.com/thumbs/${weatherDetails.country?.toLocaleLowerCase()}/flag-round-250.png`}
                    style={styles.countryFlagImg}
                    height={'50px'}
                    width={'50px'} />
                <div style={styles.countryDetails}>
                    <h1>{weatherDetails.country?.toUpperCase()}</h1>
                    <h1>{weatherDetails.city}</h1>
                </div>
            </div>
            <div style={styles.detailPageContainer}>
                <WDListItemDay wd={weatherDetails.weatherForecast} />
            </div>
        </div>
    );
}

export const WeatherDetails = connect<ReduxStateProps, DispatchProps, {}, IWeatherAppState>((state) => ({
    weatherDetails: state.weatherDetails,
}), dispatch => ({
    onNavigateHome: () => dispatch(navigateHome())
}))(WeatherDetailsDump)