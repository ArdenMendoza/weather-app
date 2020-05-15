export type City = {
    cityId?: number;
    cityName: string;
    country: Country;
}

export type Country = 'Vietnam' | 'Thailand' | 'Philippines' | 'Malaysia' | 'Indonesia' | 'Myanmar' | 'Cambodia' | 'Laos' | 'Brunei' | 'Singapore' | undefined;
export type WeatherDetails = {
    dayName: string;
    time: string;
    main: { tempMax: number, tempMin: number, humidity: number };
    weather: {description: string, icon: string, main: string}
}