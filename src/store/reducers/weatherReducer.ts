import { IFetchedWeatherDetailsAction, INavigateHomeAction } from "../actions/weatherDetailsActions";
import { Country, WeatherDetails } from "../../models/model";

export interface ICityWeatherState {
    country: Country;
    city: string;
    weatherForecast: WeatherDetails[];
}

const initialState: ICityWeatherState = {
    country: undefined,
    city: '',
    weatherForecast: []
};

export const weatherDetailsReducer = (state = initialState, action: IFetchedWeatherDetailsAction | INavigateHomeAction): ICityWeatherState => {
    switch (action.type) {
        case 'FETCHED_WEATHER_DETAILS':
            return action.payload;
        case 'NAVIGATE_HOME':
            return initialState;
    }
    return state;
};
