import { filter, mergeMap } from 'rxjs/operators';
import { IWeatherAppEpic } from "../cityStore";
import { IFetchWeatherDetailsAction, weatherDetailsDFetched } from "../actions/weatherDetailsActions";
import { empty, of, Observable } from 'rxjs';
import { IResponse, weatherDetails } from '../../api/model';
import { SEACapitals } from '../../resources/cityListPerCountry';
import { ICityWeatherState } from '../reducers/weatherReducer';

export interface IAjaxCreationMethodCfg {
    url: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    jsonData?: any;
    formData?: FormData;
    timeout?: number;
}

export interface IAjaxCreationMethod {
    <T>(cfg: IAjaxCreationMethodCfg): Observable<T>;
}

// TODO: create client.ts that will handle calls to api


export const FetchWeatherDetailsEpic: IWeatherAppEpic<IFetchWeatherDetailsAction> = (action$, state$) =>
    action$.pipe(filter(a => a.type === 'FETCH_WEATHER_DETAILS'),
        mergeMap(action => {
            const API_KEY = 'a44d7c9da5be4147f2ef94f31ee10952';
            const city = SEACapitals.find(c => c.country === action.payload);

            const getWeatherDetails = async () => {
                const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${city?.cityId}&appid=${API_KEY}`);
                const response = await api_call.json();
                return response;
            }
            return getWeatherDetails().then(res => {
                // create conversion method here that will interpret response data to local model
                const weatherDetails: ICityWeatherState = {
                    country: action.payload, city: city?.cityName ? city.cityName : '', weatherForecast: getWeatherResponseData(res)
                };
                return weatherDetailsDFetched(weatherDetails);
            });
        })
    )

const getWeatherResponseData = (data: any): weatherDetails[] => {
    console.log(data);
    const wDetails: weatherDetails[] = [];
    if (data.list) {
        data.list.forEach((w: any) => {
            wDetails.push({
                main: {temp: w.main.temp, humidity: w.main.humidity},
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