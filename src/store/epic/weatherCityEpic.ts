import { filter, mergeMap } from 'rxjs/operators';
import { IWeatherAppEpic } from "../cityStore";
import { weatherDetailsDFetched } from "../actions/weatherDetailsActions";
import { WeatherDetails } from '../../api/model';
import { SEACapitals } from '../../resources/cityListPerCountry';
import { ICityWeatherState } from '../reducers/weatherReducer';
import { ICountrySelectedDetailsAction } from '../actions/countryListActions';


export const FetchWeatherDetailsEpic: IWeatherAppEpic<ICountrySelectedDetailsAction> = (action$, state$) =>
    action$.pipe(filter(a => a.type === 'COUNTRY_SELECTED'),
        mergeMap(action => {
            const API_KEY = 'a44d7c9da5be4147f2ef94f31ee10952';
            const city = SEACapitals.find(c => c.country === action.payload);

            return fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${city?.cityId}&appid=${API_KEY}`)
                .then(response => response.json())
                .then(res => {
                    const weatherDetails: ICityWeatherState = {
                        country: action.payload, city: city?.cityName ? city.cityName : '', weatherForecast: getWeatherResponseData(res)
                    };
                    return weatherDetailsDFetched(weatherDetails);
                })
        })
    )

const getWeatherResponseData = (data: any): WeatherDetails[] => {
    const wDetails: WeatherDetails[] = [];
    if (data.list) {
        data.list.forEach((w: any) => {
            wDetails.push({
                main: { temp: w.main.temp, humidity: w.main.humidity },
                weather: {
                    main: w.weather[0].main,
                    description: w.weather[0].description,
                    icon: w.weather[0].icon
                },
            });
        })
    }
    return wDetails;
}