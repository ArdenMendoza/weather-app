import { IFetchedWeatherDetailsAction } from "../actions/weatherDetailsActions";
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

export const weatherDetailsReducer = (state = initialState, action: IFetchedWeatherDetailsAction): ICityWeatherState => {
    switch (action.type) {
        case 'FETCHED_WEATHER_DETAILS':
            return action.payload;
    }
    return state;
};
