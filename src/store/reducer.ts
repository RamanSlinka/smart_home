import {SmartDevice, SmartDeviceDetails, smartHomeAPI} from "../API/api";
import {AppThunkType} from "./store";

type InitialStateType = any
    // device: SmartDevice[]
    // deviceDetails: SmartDeviceDetails

export type SetDevicesActionType = ReturnType<typeof setDevicesAC>;



type ActionsType = SetDevicesActionType
const initialState: InitialStateType = []

export const deviceReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
        switch (action.type) {
            case 'SET-DEVICES':
                return action.devices.map(device => ({...device}))

            default:
                return state
        }
    }


// actions
export const setDevicesAC = (devices: SmartDevice[]) => ({type: 'SET-DEVICES', devices} as const)


// thunks
export const fetchDevicesTC = (): AppThunkType => {
    return (dispatch) => {

        smartHomeAPI.getdevices()
            .then((res) => {
                dispatch(setDevicesAC(res.data))

            })
            .catch((error) => {
                console.log(error)

            })
    }
}