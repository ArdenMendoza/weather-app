import React, { Component } from 'react'
import { WeatherDetails } from '../api/model';
import { Card, Tabs, Tab } from 'react-bootstrap';

interface Props {
    wd: WeatherDetails[];
}

// TODO: implement grouping
const groupByDay = <T extends any, K extends keyof T>(wdList: T[], propName: K): Record<T[K], T[]> => {
    const wdGroupedByDay = wdList.reduce(
        (objectsByKeyValue, obj) => {

            const propValue = obj[propName];
            objectsByKeyValue[propValue] = (objectsByKeyValue[propValue] || []).concat(obj);
            return objectsByKeyValue;
        },
        {} as Record<T[K], T[]>
    );
    return wdGroupedByDay;
}

const WDListItemDay: React.StatelessComponent<Props> = props => {
    const { wd } = props;
    const wdGroupedByDay = Object.entries(groupByDay(wd, 'dayName'));
    const defaultKey: string = wdGroupedByDay[0][0]; // First day in forecast
    const [key, setKey] = React.useState(defaultKey);
    return <div>
        <Tabs activeKey={key} onSelect={(k: string) => setKey(k)} id="uncontrolled-tab-example">
            {
                wdGroupedByDay.map(m => {
                    return (
                        <Tab eventKey={m[0]} title={m[0]} style={{marginTop: '50px'}}>
                            {
                                m[1].map(d => {
                                    return <div style={{ width: '250px', border: '1px #ccc solid', borderRadius: '3px', margin: '3px', display: 'inline-block', padding: '10px' }}>
                                        <img src={`http://openweathermap.org/img/wn/${d.icon}@2x.png`} />
                                        <h2> {d.time}</h2>
                                        <h4>
                                            {`${d.tempMax} / ${d.tempMin}`}
                                        </h4>
                                        <h4> {d.description}</h4>
                                    </div>
                                })}
                        </Tab>
                    );
                })
            }
        </Tabs>
    </div>
}

export default WDListItemDay;