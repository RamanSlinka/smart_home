import React, { useState} from 'react';
import {HexColorPicker} from 'react-colorful';
import {RiLightbulbFlashFill} from "react-icons/ri";
import style from './SmartBulb.module.scss';
import Switch from "../switch/Switch";

const SmartBulb = () => {
    const [valueSwitch, setValueSwitch] = useState(false);
    const [color, setColor] = useState("#9d9e9e");

    const [rangeVal, setRangeVal] = useState(null);

    return (
        <div className={style.smartBulbContainer}>
            <div>name: Light control</div>
            <div>type: Bulb</div>

            <div>status: connected / disconnected / poor connection</div>


            {/*Brightness*/}
            <div className={style.dimmerLightWrapper}>
                <p className={style.styleTitle}>Dimmer light : </p>
                <div className={style.slideContainer}>
                    <input
                        className={style.slider}
                        onChange={(e: any   ) => setRangeVal(e.target.value)}
                        type="range"
                        min="1" max="100"
                       //  value={rangeVal}
                        id="myRange"/>
<span className={style.styleTitle}>{rangeVal} %</span>
                </div>
            </div>


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

            <div className={style.turnedOnOff}>
                <p className={style.styleTitle}>Light</p>
                <span className={style.turnedOn}>off</span>
                <Switch
                    isOn={valueSwitch}
                    handleToggle={() => setValueSwitch(!valueSwitch)}
                />
                <span className={style.turnedOn}>on</span>
            </div>
        </div>
    );
};

export default SmartBulb;