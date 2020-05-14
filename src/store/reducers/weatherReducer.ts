import { IFetchedWeatherDetailsAction } from "../actions/weatherDetailsActions";
import { Country, weatherDetails } from "../../api/model";

export interface ICityWeatherState {
    country: Country;
    city: string;
    weatherForecast: weatherDetails[];
}

const initialState: ICityWeatherState = {
    country: undefined,
    city: '',
    weatherForecast: []
};

export const weatherDetailsReducer = (state = initialState, action: IFetchedWeatherDetailsAction): ICityWeatherState => {
    switch (action.type) {
        case 'FETCHED_WEATHER_DETAILS':
            console.log(action.payload);
            return action.payload;
    }
    return state;
};
