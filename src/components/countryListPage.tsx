import React from 'react';
import { connect } from 'react-redux';
import { Country, City } from '../models/model';
import { IWeatherAppState } from '../store/cityStore';
import { SEACapitals } from '../resources/cityListPerCountry';
import { selectCountry } from '../store/actions/countryListActions';
import { Dropdown, DropdownButton } from 'react-bootstrap';

interface Props {

}
interface ReduxStateProps {
}
interface DispatchProps {
    onCountrySelect: (eventKey: string, e: React.SyntheticEvent<unknown>) => void;
}

const getStyles = () => {
    return {
        countryListContainer: {
            marginTop: '120px'
        } as React.CSSProperties,
        countryListDropdown: {
            marginBottom: '50px',
        } as React.CSSProperties,
        frontPageCaption: {
            fontWeight: 'bolder',
        } as React.CSSProperties,
    };
}

const CountryListDump: React.StatelessComponent<Props & ReduxStateProps & DispatchProps> = (props) => {
    const { onCountrySelect } = props;
    const styles = getStyles();
    return (
        <div style={styles.countryListContainer}>
            < DropdownButton style={styles.countryListDropdown} id="dropdown-basic-button" title="Select Country" >
                {SEACapitals.map(c => <Dropdown.Item onSelect={onCountrySelect}>{`${c.country}, ${c.cityName}`}</Dropdown.Item>)}
            </DropdownButton >
            <img src={'https://image.flaticon.com/icons/png/512/854/854878.png'} />
            <h1 style={styles.frontPageCaption} >{'Weather'}</h1>
            <h4>{'Application'}</h4>
        </div>
    );
}

export const CountryList = connect<ReduxStateProps, DispatchProps, Props, IWeatherAppState>((state) => ({
}), dispatch => ({
    onCountrySelect: (eventKey: string, e: any) => {
        const country = e.currentTarget.innerHTML.substr(0, e.currentTarget.innerHTML.indexOf(',')) as Country;
        const city = e.currentTarget.innerHTML.substr(e.currentTarget.innerHTML.indexOf(',') + 2, 100);

        return dispatch(selectCountry({
            cityName: city,
            country: country,
        }));
    }
}))(CountryListDump)