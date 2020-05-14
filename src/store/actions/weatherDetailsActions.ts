import { weatherDetails, Country } from '../../api/model';
import { IAction } from './actionTypes';
import { ICityWeatherState } from '../reducers/weatherReducer';

export interface IFetchWeatherDetailsAction extends IAction<Country> { type: 'FETCH_WEATHER_DETAILS'; }
export const weatherDetailsDFetch = (payload: Country): IFetchWeatherDetailsAction => ({
    type: 'FETCH_WEATHER_DETAILS',
    payload
});

export interface IFetchedWeatherDetailsAction extends IAction<ICityWeatherState> { type: 'FETCHED_WEATHER_DETAILS'; }
export const weatherDetailsDFetched = (payload: ICityWeatherState): IFetchedWeatherDetailsAction => ({
    type: 'FETCHED_WEATHER_DETAILS',
    payload
});
