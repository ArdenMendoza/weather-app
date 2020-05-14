import { IFetchedWeatherDetailsAction } from "../actions/weatherDetailsActions";
import { ICountrySelectedDetailsAction } from "../actions/countryListActions";
import { Country } from "../../api/model";

export interface ICountryListState {
    countrySelected?: Country;
}

const initialState: ICountryListState = {
    countrySelected: 'Philippines'
};

export const countryListReducer = (state = initialState, action: ICountrySelectedDetailsAction): ICountryListState => {
    switch (action.type) {
        case 'COUNTRY_SELECTED':
            const selectedCountry = action.payload;
    }
    return state;
};