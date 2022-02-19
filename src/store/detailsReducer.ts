import { SmartDeviceDetails, smartHomeAPI} from "../API/api";
import {AppThunkType} from "./store";

export  type InitialStateType = {
    deviceDetails: SmartDeviceDetails[]
}

export type SetDeviceDetailsActionType = ReturnType<typeof setDeviceDetailsAC>;



type ActionsType = SetDeviceDetailsActionType
const initialState: InitialStateType = {
    deviceDetails: [
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
            isTurnedOn: true,
            powerConsumption: 1900

        },
        {
            id: "3",
            type: "temperatureSensor",
            name: "Temperature",
            connectionState: "disconnected ",
            temperature: 19
        }
    ]
}

export const deviceDetailsReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET-DEVICE-DETAILS':
            return {...state, deviceDetails: action.deviceDetails}

        default:
            return state
    }
}


// action
export const setDeviceDetailsAC = (deviceDetails: SmartDeviceDetails[]) =>
    ({type: 'SET-DEVICE-DETAILS', deviceDetails} as const)


// thunk
export const fetchDeviceDetailsTC = (): AppThunkType => {
    return (dispatch) => {

        smartHomeAPI.getDeviceDetails()
            .then((res) => {
                dispatch(setDeviceDetailsAC(res.data))

            })
            .catch((error) => {
                console.log(error)

            })
    }
}