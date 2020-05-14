import React from 'react';
import { connect } from 'react-redux';
import { Country } from '../api/model';
import { IWeatherAppState } from '../store/cityStore';
import { SEACapitals } from '../resources/cityListPerCountry';
import { selectCountry } from '../store/actions/countryListActions';

interface Props {

}
interface ReduxStateProps {
}
interface DispatchProps {
    onCountrySelect: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const CountryListDump: React.StatelessComponent<Props & ReduxStateProps & DispatchProps> = (props) => {
    const { onCountrySelect } = props;
    return <div>
        {SEACapitals.map(c => <div onClick={onCountrySelect}>{c.country}</div>)}
    </div>;
}

export const CountryList = connect<ReduxStateProps, DispatchProps, Props, IWeatherAppState>((state) => ({
}), dispatch => ({
    onCountrySelect: event => dispatch(selectCountry(event.currentTarget.innerHTML as Country))
}))(CountryListDump)