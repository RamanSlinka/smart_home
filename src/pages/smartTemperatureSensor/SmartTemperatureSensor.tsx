import React, {useEffect, useState} from 'react';
import style from './SmartTemperatureSensor.module.scss';
import temperature from '../../assets/images/temperatura.jpeg';
import Modal from "../../components/modal/Modal";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {SmartDeviceDetails} from "../../API/api";
import {fetchDeviceDetailsTC} from "../../store/detailsReducer";


const SmartTemperatureSensor = () => {


    const dispatch = useDispatch()
    const [modalActive, setModalActive] = useState<boolean>(true)

    const temperatureDevice = useSelector<AppRootStateType, SmartDeviceDetails>(state => state.deviceDetails.deviceDetails[2])
    const temperatureValue = temperatureDevice



    // const ws = new WebSocket('wss://localhost:3001/api/v1/refresh')

    useEffect(() => {

        const thunk = fetchDeviceDetailsTC()
        dispatch(thunk)


    }, [dispatch])


    return (
        <Modal active={modalActive} setActive={setModalActive}>

        <div className={style.smartOutletContainer}>

            <div className="draggable" style={{height: '50px'}}>
                <div className={style.blockWrapper}>
                    <div className={style.mainTitle}>

                        <h3>{temperatureDevice.name}</h3>
                    </div>
                    <div className={style.styleTitle}>
                        {temperatureDevice.type}

                    </div>
                    <div className={style.styleTitle}>
                        {temperatureDevice.connectionState}

                        {/*or  disconnected / poor connection*/}
                    </div>
                </div>
            </div>

            <div style={{height: '50px'}} className="draggable">
                <div className={style.blockWrapper}>
                    <h3 className={style.styleTitle}>Temperature</h3>
                    {/*{temperature}*/}
                    <span className={style.styleTitle}>19 &deg;C</span>
                </div>
            </div>

            <div style={{height: '50px'}} className="draggable">
                <div className={style.blockWrapper}
                     style={{height: '200px'}}>
                    <img className={style.smartOutletImage}
                         src={temperature} alt="smart outlet"/>
                </div>
            </div>
            {/*<DateAndClock/>*/}
        </div>
        </Modal>
    );
};

export default SmartTemperatureSensor;