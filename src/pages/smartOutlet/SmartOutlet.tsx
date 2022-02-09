import React, {useState} from 'react';
import style from './SmartOutlet.module.scss'
import Switch from "../../components/switch/Switch";
import smartOutlet from '../../assets/images/outlet.jpeg'

const SmartOutlet = () => {
    const [valueSwitch, setValueSwitch] = useState(false);

    return (
        <div className={style.smartOutletContainer}>
            <div className={style.blockWrapper}>
                <div className={style.mainTitle}>
                    {/*name:*/}
                    <h3>ENERGY</h3>
                </div>
                <div className={style.styleTitle}>
                    {/*type:*/}
                    Outlet
                </div>
                <div className={style.styleTitle}>
                    {/*status:*/}
                    connected
                    {/*or  disconnected / poor connection*/}
                </div>
            </div>
            <Switch isOn={valueSwitch}
                    handleToggle={() => setValueSwitch(!valueSwitch)}/>

            <div className={style.blockWrapper}>
                <h3 className={style.styleTitle}>Power consumption</h3>
                {/*{powerConsumption}*/}
                <p className={style.styleTitle}>2000 Watt</p>
            </div>

            <div className={style.blockWrapper}
                 style={{height: '200px'}}>
                <img className={style.smartOutletImage}
                     src={smartOutlet} alt="smart outlet"/>
            </div>

            {/*<DateAndClock/>*/}
        </div>
    );
};

export default SmartOutlet;