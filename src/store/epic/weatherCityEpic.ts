import { filter, mergeMap } from 'rxjs/operators';
import { IWeatherAppEpic } from "../cityStore";
import { weatherDetailsFetched } from "../actions/weatherDetailsActions";
import { WeatherDetails } from '../../api/model';
import { SEACapitals } from '../../resources/cityListPerCountry';
import { ICityWeatherState } from '../reducers/weatherReducer';
import { ICountrySelectedDetailsAction } from '../actions/countryListActions';


export const FetchWeatherDetailsEpic: IWeatherAppEpic<ICountrySelectedDetailsAction> = (action$, state$) =>
    action$.pipe(filter(a => a.type === 'COUNTRY_SELECTED'),
        mergeMap(action => {
            const API_KEY = 'a44d7c9da5be4147f2ef94f31ee10952';
            const city = SEACapitals.find(c => c.country === action.payload.country && c.cityName === action.payload.cityName);
            return fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${city?.cityId}&appid=${API_KEY}&units=metric`)
                .then(response => response.json())
                .then(res => {
                    const weatherDetails: ICityWeatherState = {
                        country: action.payload.country,
                        city: city?.cityName ? city.cityName : '', weatherForecast: getWeatherResponseData(res)
                    };
                    return weatherDetailsFetched(weatherDetails);
                })
        })
    )

const getWeatherResponseData = (data: any): WeatherDetails[] => {
    const wDetails: WeatherDetails[] = [];
    if (data.list) {
        data.list.forEach((w: any) => {
            const d = new Date(w.dt_txt);
            const dayName = d.toLocaleDateString('en-US', { weekday: 'long' });
            const time = d.toLocaleTimeString();
            wDetails.push({
                dayName: dayName,
                date: getDate(d),
                time: time,
                tempMax: w.main.temp_max,
                tempMin: w.main.temp_min,
                humidity: w.main.humidity,
                main: w.weather[0].main,
                description: w.weather[0].description,
                icon: w.weather[0].icon
            });
        })
    }
    return wDetails;
}

const getDate = (date: Date) => {
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = date.getFullYear();

    return mm + '/' + dd + '/' + yyyy;
}
