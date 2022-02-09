import Home from "../pages/home/Home";
import {Route, Routes} from 'react-router-dom';
import SmartBulb from "../pages/smartBulb/SmartBulb";
import SmartTemperatureSensor from "../pages/smartTemperatureSensor/SmartTemperatureSensor";
import SmartOutlet from "../pages/smartOutlet/SmartOutlet";

export const PATH = {
    HOME: '/',
    SMART_BULB: '/smart_bulb',
    SMART_OUTLET: '/smart_outlet',
    SMART_TEMPERATURE_SENSOR: '/smart_temperature_sensor',

}


const RoutesPage = () => {
    return (
        <Routes>
            <Route path={PATH.HOME} element={<Home/>}/>
            <Route path={PATH.SMART_BULB} element={<SmartBulb/>}/>
            <Route path={PATH.SMART_BULB} element={<SmartOutlet/>}/>
            <Route path={PATH.SMART_BULB} element={<SmartTemperatureSensor/>}/>
        </Routes>
    );
}

export default RoutesPage;