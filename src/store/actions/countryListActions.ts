import { City } from '../../models/model';
import { IAction } from './actionTypes';

export interface ICountrySelectedDetailsAction extends IAction<City> { type: 'COUNTRY_SELECTED'; }
export const selectCountry = (payload: City): ICountrySelectedDetailsAction => ({
    type: 'COUNTRY_SELECTED',
    payload
});
