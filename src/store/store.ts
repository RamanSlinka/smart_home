import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {deviceReducer, SetDevicesActionType} from './devicesReducer';
import {deviceDetailsReducer, SetDeviceDetailsActionType} from "./detailsReducer";

const rootReducer = combineReducers({
     devices: deviceReducer,
    deviceDetails: deviceDetailsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppActionType = SetDevicesActionType | SetDeviceDetailsActionType




export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType,
    AppRootStateType,
    unknown,
    AppActionType>

// @ts-ignore
window.store = store;


