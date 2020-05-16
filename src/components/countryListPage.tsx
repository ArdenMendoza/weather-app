import React from 'react';
import { connect } from 'react-redux';
import { Country, City } from '../api/model';
import { IWeatherAppState } from '../store/cityStore';
import { SEACapitals } from '../resources/cityListPerCountry';
import { selectCountry } from '../store/actions/countryListActions';
import { Container, Row, Col, ListGroup, Dropdown, DropdownButton } from 'react-bootstrap';
import { empty } from 'rxjs';

interface Props {

}
interface ReduxStateProps {
}
interface DispatchProps {
    onCountrySelect: (eventKey: string, e: React.SyntheticEvent<unknown>) => void;
}

const CountryListDump: React.StatelessComponent<Props & ReduxStateProps & DispatchProps> = (props) => {
    const { onCountrySelect } = props;
    return (
        <div style={{ marginTop: '120px' }}>
            < DropdownButton style={{ marginBottom: '50px' }} id="dropdown-basic-button" title="Select Country" >
                {SEACapitals.map(c => <Dropdown.Item onSelect={onCountrySelect}>{`${c.country}, ${c.cityName}`}</Dropdown.Item>)}
            </DropdownButton >
            <img src={'https://image.flaticon.com/icons/png/512/854/854878.png'} />
            <h1 style={{ fontWeight: 'bolder' }} >Weather</h1>
            <h4>Application</h4>
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
        // console.log(e.currentTarget.innerHTML);
        // return empty();
    }
}))(CountryListDump)