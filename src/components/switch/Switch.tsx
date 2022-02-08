import React, {FC} from 'react';
import style from'./Switch.module.scss'

const Switch:FC<any> = ({ isOn, handleToggle }) => {
    return (
        <>
            <input
                checked={isOn}
                onChange={handleToggle}
                className={style.reactSwitchCheckbox}
                id={`react-switch-new`}
                type="checkbox"
            />
            <label
                style={{ background: isOn && '#06D6A0' }}
                className={style.reactSwitchLabel}
                htmlFor={`react-switch-new`}
            >
                <span className={style.reactSwitchButton} />
            </label>
        </>
    );
};
export default Switch;