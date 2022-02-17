import React, {useState} from 'react';
import style from './SmartTemperatureSensor.module.scss';
import temperature from '../../assets/images/temperatura.jpeg';
import DateAndClock from "../../components/date/DateAndClock";
import Modal from "../../components/modal/Modal";
const SmartTemperatureSensor = () => {



    const [modalActive, setModalActive] = useState<boolean>(true)


    return (
        <Modal active={modalActive} setActive={setModalActive}>

        <div className={style.smartOutletContainer}>

            <div className="draggable" style={{height: '50px'}}>
                <div className={style.blockWrapper}>
                    <div className={style.mainTitle}>
                        {/*name:*/}
                        <h3>TEMPERATURE</h3>
                    </div>
                    <div className={style.styleTitle}>
                        {/*type:*/}
                        Temperature sensor
                    </div>
                    <div className={style.styleTitle}>
                        {/*status:*/}
                        connected
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