import { IAction, ISimpleAction } from './actionTypes';
import { ICityWeatherState } from '../reducers/weatherReducer';

export interface IFetchedWeatherDetailsAction extends IAction<ICityWeatherState> { type: 'FETCHED_WEATHER_DETAILS'; }
export const weatherDetailsFetched = (payload: ICityWeatherState): IFetchedWeatherDetailsAction => ({
    type: 'FETCHED_WEATHER_DETAILS',
    payload
});

export interface INavigateHomeAction extends ISimpleAction { type: 'NAVIGATE_HOME'; }
export const navigateHome = (): INavigateHomeAction => ({
    type: 'NAVIGATE_HOME',
});