import { IFetchedWeatherDetailsAction, INavigateHomeAction } from "../actions/weatherDetailsActions";
import { Country, WeatherDetails } from "../../api/model";

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
            return {
                country: undefined,
                city: '',
                weatherForecast:[]
            }
    }
    return state;
};
