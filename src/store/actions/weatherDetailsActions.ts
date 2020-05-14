import { WeatherDetails, Country } from '../../api/model';
import { IAction } from './actionTypes';
import { ICityWeatherState } from '../reducers/weatherReducer';

export interface IFetchedWeatherDetailsAction extends IAction<ICityWeatherState> { type: 'FETCHED_WEATHER_DETAILS'; }
export const weatherDetailsDFetched = (payload: ICityWeatherState): IFetchedWeatherDetailsAction => ({
    type: 'FETCHED_WEATHER_DETAILS',
    payload
});
