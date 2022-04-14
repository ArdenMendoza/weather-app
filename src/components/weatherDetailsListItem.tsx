import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { WeatherDetails } from '../models/model';

interface Props {
    wd: WeatherDetails[];
}

const getStyles = () => {
    return {
        customCardComponent: {
            width: '250px',
            border: '1px #ccc solid',
            borderRadius: '10px',
            margin: '10px',
            display: 'inline-block',
            padding: '10px'
        } as React.CSSProperties
    };
}

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
    const styles = getStyles();

    const wdGroupedByDay = Object.entries(groupByDay(wd, 'dayName'));
    const defaultKey: string = wdGroupedByDay[0][0]; // First day in forecast
    const [key, setKey] = React.useState(defaultKey);
    return <div>
        <Tabs activeKey={key} onSelect={(k: string) => setKey(k)} id="uncontrolled-tab-example">
            {
                wdGroupedByDay.map(m => {
                    return (
                        <Tab eventKey={m[0]} title={m[0]} style={{ marginTop: '50px' }}>
                            <h2>{m[1][0].date}</h2>
                            {
                                m[1].map(d => {
                                    return (
                                        <div style={styles.customCardComponent}>
                                            <img alt={'openWeatherMapIcon'} src={`http://openweathermap.org/img/wn/${d.icon}@2x.png`} />
                                            <h3> {d.time}</h3>
                                            <h5>
                                                {`${d.tempMax} / ${d.tempMin}`}
                                            </h5>
                                            <h5> {d.description}</h5>
                                        </div>
                                    );
                                })}
                        </Tab>
                    );
                })
            }
        </Tabs>
    </div >
}

export default WDListItemDay;