import React from 'react';
import { connect } from 'react-redux';
import { Country } from '../api/model';
import { empty } from 'rxjs';
import { IWeatherAppState } from '../store/cityStore';
import { SEACapitals } from '../resources/cityListPerCountry';
import { weatherDetailsDFetch } from '../store/actions/weatherDetailsActions';

interface Props {

}
interface ReduxStateProps {
    selectedCountry?: Country;
}
interface DispatchProps {
    onCountrySelect: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const CountryListDump: React.StatelessComponent<Props & ReduxStateProps & DispatchProps> = (props) => {
    const { selectedCountry, onCountrySelect } = props;
    return <div>
        <div>{`selected: '${selectedCountry}' `}</div>
        {SEACapitals.map(c => <div onClick={onCountrySelect}>{c.country}</div>)}
    </div>;
}

export const CountryList = connect<ReduxStateProps, DispatchProps, Props, IWeatherAppState>((state) => ({
    selectedCountry: state.country.countrySelected,
}), dispatch => ({
    // onCountrySelect: () => dispatch(DialogActions.closeDialog())
    onCountrySelect: event => dispatch(weatherDetailsDFetch(event.currentTarget.innerHTML as Country))
}))(CountryListDump)