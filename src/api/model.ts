export type City = {
    cityId?: number;
    cityName: string;
    country: Country;
}

export type Country = 'Vietnam' | 'Thailand' | 'Philippines' | 'Malaysia' | 'Indonesia' | 'Myanmar' | 'Cambodia' | 'Laos' | 'Brunei' | 'Singapore' | undefined;

export type WeatherDetails = {
    dayName: string;
    time: string;
    tempMax: number;
    tempMin: number;
    humidity: number;
    description: string;
    icon: string;
    main: string;
}