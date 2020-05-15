import { WeatherDetails, Country, City } from '../../api/model';
import { IAction } from './actionTypes';

export interface ICountrySelectedDetailsAction extends IAction<{country: Country, city: string}> { type: 'COUNTRY_SELECTED'; }
export const selectCountry = (payload: {country: Country, city: string}): ICountrySelectedDetailsAction => ({
    type: 'COUNTRY_SELECTED',
    payload
});
