import React, {useEffect, useState} from 'react';
import {HexColorPicker} from 'react-colorful';
import {RiLightbulbFlashFill} from "react-icons/ri";
import style from './SmartBulb.module.scss';
import Switch from "../../components/switch/Switch";
import Modal from "../../components/modal/Modal";
import {useDispatch, useSelector} from "react-redux";
import {fetchDeviceDetailsTC} from "../../store/detailsReducer";
import {AppRootStateType} from "../../store/store";
import {SmartDeviceDetails} from "../../API/api";


const ws = new WebSocket('wss://localhost:3001/api/v1/refresh')

const SmartBulb = () => {

    const lightDevice = useSelector<AppRootStateType, SmartDeviceDetails>(state => state.deviceDetails.deviceDetails[0])
    const [valueSwitch, setValueSwitch] = useState(false);
    const [connection, setConnection] = useState(false);

    const [modalActive, setModalActive] = useState<boolean>(true)
    const dispatch = useDispatch()

    const startValueRange = lightDevice.type === 'bulb' ? lightDevice.brightness : '';
    const [rangeVal, setRangeVal] = useState(startValueRange);

    const startColor = lightDevice.type === 'bulb' ? lightDevice.color : ''
    const [color, setColor] = useState(startColor);


    useEffect(() => {
        const thunk = fetchDeviceDetailsTC()
        dispatch(thunk)

        ws.addEventListener('message', (e) => {
            console.log(JSON.parse(e.data))
        })

        setInterval(() => {
            setConnection(!connection)
        }, 1000)


    }, [dispatch])


    return (
        <Modal active={modalActive} setActive={setModalActive}>
            <div className={style.smartBulbContainer}>
                <div className="draggable" style={{height: '100px'}}>
                    <div className={style.infoWrapper}>

                        <div className={style.mainTitle}>
                            {lightDevice.name}
                        </div>

                        <div className={style.styleTitle}>
                            {lightDevice.type}
                        </div>

                        <div className={style.indicatorConnect}>
                           <p className= {style.styleTitle}> {lightDevice.connectionState}</p>
                            {/*or  disconnected / poor connection*/}
                            <span className={connection  ? style.indicator : ''}></span>
                        </div>
                    </div>
                </div>

                {/*Brightness*/}
                <div className="draggable" style={{height: '100px'}}>
                    <div className={style.dimmerLightWrapper}>
                        <p className={style.styleTitle}>Dimmer light : </p>
                        <div className={style.slideContainer}>
                            <input
                                className={style.slider}
                                onChange={(e: any) => setRangeVal(e.target.value)} //   ? any
                                type="range"
                                min="1" max="100"
                                //  value={rangeVal}
                                id="myRange"/>
                            <span className={style.styleTitle}>{rangeVal} %</span>
                        </div>
                    </div>
                </div>
                <div className="draggable" style={{height: '100px'}}>
                    <div className={style.colorWrapper}>
                        <div className={style.colorPickerText}>
                            <p>Color picker</p>
                            <span>Choose your preferred color for lighting:</span>
                        </div>
                        <RiLightbulbFlashFill className={style.bulbSize} style={{color: color}}/>

                        <HexColorPicker
                            className={style.colorPicker}
                            color={color}
                            onChange={setColor}

                        />

                    </div>
                </div>
                <div className="draggable" style={{height: '100px'}}>
                    <Switch
                        isOn={valueSwitch}
                        handleToggle={() => setValueSwitch(!valueSwitch)}
                    />
                </div>

                {/*<DateAndClock/>*/}

            </div>
        </Modal>
    );
};

export default SmartBulb;