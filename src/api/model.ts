export type City = {
    cityId?: number;
    cityName: string;
    country: Country;
}

export interface INoContentResponse {
    success: boolean;
    message?: string;
}

export interface IResponse<T> extends INoContentResponse {
    data: T;
}

export type Country = 'Vietnam' | 'Thailand' | 'Philippines' | 'Malaysia' | 'Indonesia' | 'Myanmar' | 'Cambodia' | 'Laos' | 'Brunei' | 'Singapore' | undefined;

export type weatherDetails = {
    main: { temp: number, humidity: number };
    weather: {description: string, icon: string, main: string}
}