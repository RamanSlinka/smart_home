import {SmartBulb, SmartOutlet, SmartTemperatureSensor} from "../api-model";


// @ts-ignore
 const smartDeviceDetails: [(SmartBulb | SmartOutlet | SmartTemperatureSensor)] = [
    {
        id: "1",
        type: "bulb",
        name: "Lights",
        connectionState: "connected",
        isTurnedOn: true,
        brightness: 20,
        color: "fff"

    },
    {
        id: "2",
        type: "outlet",
        name: "Energy",
        connectionState: "connected",
        isTurnedOn: "true",
        powerConsumption: "1900"

    },
    {
        id: "3",
        type: "temperatureSensor",
        name: "Temperature",
        connectionState: "'disconnected' ",
        temperature: "19"
    }
]
export default smartDeviceDetails;