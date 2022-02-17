import axios from 'axios'


const instance = axios.create({
    baseURL: 'http://localhost:3001/api/v1/',

});

export const smartHomeAPI = {
    getdevices() {
        return instance.get<SmartDevice[]>('devices/');
    },
    getDeviceDetails(deviceId: string) {
        return instance.get<SmartDeviceDetails>(`/devices/${deviceId}`)

    }

}

//types
export type SmartDevice = {
    id: string;
    type: string;
    name: string;
    connectionState: string;

    scenarios: {
        isTurnedOn?: boolean;
        brightness?: number;
        color?: string;
        powerConsumption?: number;
        temperature?: number
    }

};

export type SmartDeviceDetails =
    SmartBulb
    | SmartOutlet
    | SmartTemperatureSensor;


export type SmartBulb = {
    id: string;
    type: string; //'bulb'
    name: string;
    connectionState: string;
    //
    // isTurnedOn: boolean;
    // brightness: number;
    // color: string;

    scenarios: {
        isTurnedOn: boolean;
        brightness: number;
        color: string;
    }

}

export type SmartOutlet = {
    id: string;
    type: string;  //'outlet'
    name: string;
    connectionState: string;

    // isTurnedOn: boolean;
    // powerConsumption: number;

    scenarios: {
        isTurnedOn: boolean;
        powerConsumption: number;
    }
}

export type SmartTemperatureSensor = {
    id: string;
    type: string;  //'temperatureSensor'
    name: string;
    connectionState: string;

    //temperature: number;
    scenarios: {
        temperature: number
    }
}