export interface Station {
    id: number;
    station_code: string;
    latitude: number;
    longitude: number;
    elevation: number;
    name: string;
    temperature_records?: TemperatureRecord[]
}

export interface TemperatureRecord {
    id: number;
    station_id: number;
    date: string;
    tmax: number;
    tmin: number;
}