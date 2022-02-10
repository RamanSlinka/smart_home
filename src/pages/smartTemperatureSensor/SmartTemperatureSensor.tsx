import React from 'react';
import style from './SmartTemperatureSensor.module.scss';
import temperature from '../../assets/images/temperatura.jpeg';
import DateAndClock from "../../components/date/DateAndClock";

const SmartTemperatureSensor = () => {

    return (
        <div className={style.smartOutletContainer}>
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

            <div className={style.blockWrapper}>
                <h3 className={style.styleTitle}>Temperature</h3>
                {/*{temperature}*/}
                <p className={style.styleTitle}>19 &deg;C</p>
            </div>

            <div className={style.blockWrapper}
                 style={{height: '200px'}}>
                <img className={style.smartOutletImage}
                     src={temperature} alt="smart outlet"/>
            </div>

            <DateAndClock/>
        </div>
    );
};

export default SmartTemperatureSensor;