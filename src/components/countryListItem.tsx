import React, { Component } from 'react'
import { WeatherDetails } from '../api/model';

interface Props {
    wd: WeatherDetails;
}

const CountryListItem: React.StatelessComponent<Props> = props => {
    const { wd } = props;
    return <div style={{ marginBottom: '10px' }}>
        <span> {wd.main.humidity}</span>
        <span> {wd.main.temp}</span>
        <span> {wd.weather.main}</span>
        <span> {wd.weather.icon}</span>
        <span> {wd.weather.description}</span>
    </div>
}

export default CountryListItem;