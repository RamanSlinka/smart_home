export interface SmartDevice {
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

}

export interface SmartBulb {
    id: string;
    type: string; //'bulb'
    name: string;
    connectionState: string;
    isTurnedOn: boolean;    // 1 & 2
    brightness: number;     // 1
    color: string;          // 1
}

export interface SmartOutlet {
    id: string;
    type: string;  //'outlet'
    name: string;
    connectionState: string;    // 2
    isTurnedOn: boolean;     // 1 & 2
    powerConsumption: number;   // 2
}

export interface SmartTemperatureSensor {
    id: string;
    type: string;  //'temperatureSensor'
    name: string;
    connectionState: string;
    temperature: number;        // 3
}
