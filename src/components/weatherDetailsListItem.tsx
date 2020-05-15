import React, { Component } from 'react'
import { WeatherDetails } from '../api/model';
import { Card } from 'react-bootstrap';

interface Props {
    wd: WeatherDetails;
}

const CountryListItem: React.StatelessComponent<Props> = props => {
    const { wd } = props;
    return <div style={{ width: '250px', border: '1px #ccc solid', borderRadius: '3px', margin: '3px', display: 'inline-block', padding: '10px' }}>
        <img src={`http://openweathermap.org/img/wn/${wd.weather.icon}@2x.png`} />
        <h2> {wd.dayName.toUpperCase()}</h2>
        <div> {wd.time}</div>
        <h4>
            {`${wd.main.tempMax} / ${wd.main.tempMin}`}
        </h4>
        <h4> {wd.weather.description}</h4>
    </div>
}

export default CountryListItem;