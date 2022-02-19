import {SmartDevice,  smartHomeAPI} from "../API/api";
import {AppThunkType} from "./store";

export  type InitialStateType = {
    devices: SmartDevice[]
}

export type SetDevicesActionType = ReturnType<typeof setDevicesAC>;



type ActionsType = SetDevicesActionType
const initialState: InitialStateType = {
   devices: [
        {
            id: "1",
            type: "bulb",
            name: "Lights",
            connectionState: "connected"

        },
        {
            id: "2",
            type: "outlet",
            name: "Energy",
            connectionState: "connected",

        },
        {
            id: "3",
            type: "temperatureSensor",
            name: "Temperature",
            connectionState: "disconnected",

        }
    ]
}

export const deviceReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
        switch (action.type) {
            case 'SET-DEVICES':
                return {...state, devices: action.devices}

            default:
                return state
        }
    }


// action
export const setDevicesAC = (devices: SmartDevice[]) => ({type: 'SET-DEVICES', devices} as const)


// thunk
export const fetchDevicesTC = (): AppThunkType => {
    return (dispatch) => {

        smartHomeAPI.getDevices()
            .then((res) => {
                dispatch(setDevicesAC(res.data))

            })
            .catch((error) => {
                console.log(error)

            })
    }
}