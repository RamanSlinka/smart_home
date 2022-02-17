import React, {FC} from 'react';
import style from'./Switch.module.scss'

type SwitchPropsType = {
    isOn: boolean
    handleToggle: () => void
}

const Switch:FC<SwitchPropsType> = ({ isOn, handleToggle }) => {


    return (
        <div className={style.turnedOnOff}>
                <p className={style.styleTitle}>Light</p>
                <span className={style.turnedOn}>off</span>
            <input
                checked={isOn}
                onChange={handleToggle}
                className={style.reactSwitchCheckbox}
                id={`react-switch-new`}
                type="checkbox"
            />
            <label
                style={{ background: isOn ? '#06D6A0' : '' }}
                className={style.reactSwitchLabel}
                htmlFor={`react-switch-new`}
            >
                <span className={style.reactSwitchButton} />
            </label>
            <span className={style.turnedOn}>on</span>
        </div>
    );
};
export default Switch;