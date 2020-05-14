import { weatherDetails, Country } from '../../api/model';
import { IAction } from './actionTypes';

export interface ICountrySelectedDetailsAction extends IAction<Country> { type: 'COUNTRY_SELECTED'; }
export const selectCountry = (payload: Country): ICountrySelectedDetailsAction => ({
    type: 'COUNTRY_SELECTED',
    payload
});
