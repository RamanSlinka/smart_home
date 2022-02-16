import {SmartDevice} from "../api-model";

const devices: SmartDevice[] = [
    {
        id: "1",
        type: "bulb",
        name: "SmartBulb",
        connectionState: "connected",

        scenarios: {
            isTurnedOn: true,
            brightness: 20,
            color: "fff"
        }
    },
    {
        id: "2",
        type: "outlet",
        name: "SmartOutlet",
        connectionState: "connected",

        scenarios: {
            isTurnedOn: false,
            powerConsumption: 1900
        }
    },
    {
        id: "3",
        type: "temperatureSensor",
        name: "SmartTemperatureSensor",
        connectionState: "disconnected",

        scenarios: {
            temperature: 19
        }
    }
];

export default devices;





