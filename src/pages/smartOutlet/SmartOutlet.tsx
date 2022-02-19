import React, {useEffect, useState} from 'react';
import style from './SmartOutlet.module.scss'
import Switch from "../../components/switch/Switch";
import smartOutlet from '../../assets/images/outlet.jpeg'
import Modal from '../../components/modal/Modal';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {SmartDeviceDetails} from "../../API/api";
import {fetchDeviceDetailsTC} from "../../store/detailsReducer";
const SmartOutlet = () => {

    const [valueSwitch, setValueSwitch] = useState(false);
    const [modalActive, setModalActive] = useState<boolean >(true)


    const dispatch = useDispatch()

    const outletDevice = useSelector<AppRootStateType, SmartDeviceDetails>(state => state.deviceDetails.deviceDetails[1])
    const powerValue = outletDevice.type === 'outlet' ? outletDevice.powerConsumption : ''

    const isTurnedOutlet = outletDevice.type === 'outlet' ? outletDevice.isTurnedOn : ''



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

                            <h3>  {outletDevice.name}</h3>
                        </div>
                        <div className={style.styleTitle}>
                            {outletDevice.type}

                        </div>
                        <div className={style.styleTitle}>
                            {outletDevice.connectionState}

                            {/*or  disconnected / poor connection*/}
                        </div>
                    </div>
                </div>

                <div className="draggable" style={{height: '50px'}}>


                    <Switch isOn={valueSwitch}
                            handleToggle={() => setValueSwitch(!valueSwitch)}/>
                </div>

                <div className="draggable" style={{height: '50px'}}>
                    <div className={style.blockWrapper}>
                        <h3 className={style.styleTitle}>Power consumption</h3>
                        <p className={style.styleTitle}>{powerValue} Watt</p>
                    </div>
                </div>

                <div className="draggable" style={{height: '50px'}}>
                    <div className={style.blockWrapper}
                         style={{height: '200px'}}>
                        <img className={style.smartOutletImage}
                             src={smartOutlet} alt="smart outlet"/>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default SmartOutlet;