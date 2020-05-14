import { createStore, combineReducers, applyMiddleware, compose, Action } from 'redux';
import { combineEpics, createEpicMiddleware, Epic } from 'redux-observable';
import { ICityWeatherState, weatherDetailsReducer } from './reducers/weatherReducer';
import { FetchWeatherDetailsEpic } from './epic/weatherCityEpic';
import { ICountryListState, countryListReducer } from './reducers/countryListReducer';

export interface IWeatherAppState {
    weatherDetails: ICityWeatherState;
    country: ICountryListState;
}

export type IWeatherAppEpic<T extends Action<any>> = Epic<T, any, IWeatherAppState>;

const configureEpic = () => {
    return FetchWeatherDetailsEpic;
}

const configureReducer = () =>
    combineReducers<IWeatherAppState>({
        weatherDetails: weatherDetailsReducer,
        country: countryListReducer,
    });

export default function configureStore() {
    const rootEpic = configureEpic();
    const epicMiddleware = createEpicMiddleware<any, any, IWeatherAppState, any>();
    const middleware = applyMiddleware(epicMiddleware);

    const composeEnhancers =
        typeof window === 'object' &&
            (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
            (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
            }) : compose;

    const enhancer = composeEnhancers(
        middleware,
        // other store enhancers if any
    );

    const store = createStore(configureReducer(), enhancer);
    epicMiddleware.run(rootEpic);
    return store;
};