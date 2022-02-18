import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {deviceReducer, SetDevicesActionType} from './reducer';

const rootReducer = combineReducers({
     devices: deviceReducer,
    // auth: authReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppActionType = SetDevicesActionType




export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType,
    AppRootStateType,
    unknown,
    AppActionType>

// @ts-ignore
window.store = store;


