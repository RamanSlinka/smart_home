import React, {FC, useEffect, useState} from 'react';
import {AiOutlineHome} from "react-icons/ai";
import {IoBulbOutline} from "react-icons/io5";
import {IoIosAddCircleOutline, IoMdOutlet} from "react-icons/io";
import {FaTemperatureLow} from "react-icons/fa";
import style from "./Navbar.module.scss"
import image from "../../assets/images/smartHome_.jpeg"
import {NavLink} from "react-router-dom";
import {PATH} from "../Routes";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {fetchDevicesTC} from "../../store/devicesReducer";
import {SmartDevice} from "../../API/api";




const Navbar = () => {
    const [connected, setConnect] = useState(true);
    const [light, setLight] = useState(true);
    const [modalActive, setModalActive] = useState<boolean>(true)





    const lightDevice = useSelector<AppRootStateType, SmartDevice>(state => state.devices.devices[0])
    const energyDevice = useSelector<AppRootStateType, SmartDevice>(state => state.devices.devices[1])
    const temperatureDevice = useSelector<AppRootStateType, SmartDevice>(state => state.devices.devices[2])

    const dispatch = useDispatch()

    useEffect(() => {

        const thunk = fetchDevicesTC()
        dispatch(thunk)


    }, [dispatch])



    return (
        <div className={style.navbarContainer}>
            <div>
                <img className={style.logo}
                     src={image}
                     alt="logo"
                />
            </div>
            <div className={style.iconNameWrapper}>
                <NavLink to={PATH.HOME}>
                    <NavItem
                        icon={<AiOutlineHome/>}
                        title={'Home'}
                        status={null}
                    />
                </NavLink>

                <NavLink to={PATH.SMART_BULB}>
                    <NavItem
                        icon={<IoBulbOutline/>}
                        title={lightDevice.name}
                        status={lightDevice.connectionState}

                    />
                </NavLink>

                <NavLink to={PATH.SMART_OUTLET}>
                    <NavItem
                        icon={<IoMdOutlet/>}
                        title={energyDevice.name}
                        status={energyDevice.connectionState}
                    />
                </NavLink>
                <NavLink to={PATH.SMART_TEMPERATURE_SENSOR}>
                    <NavItem
                        icon={<FaTemperatureLow/>}
                        title={temperatureDevice.name}
                        status={temperatureDevice.connectionState}
                    />
                </NavLink>
                <NavItem
                    icon={<IoIosAddCircleOutline/>}
                    status={null}
                />
            </div>
            <span className={style.bottomLayer}></span>
        </div>
    );
};


const NavItem: FC<any> = (props) => {
    return (
        <div className={style.itemContainer}
             onClick={props.onClick}
        >
            <div className={style.iconWrapper}>

                <div className={style.icon}> {props.icon}</div>

                <h3 className={style.iconName}>{props.title}</h3>
                {props.status !== null
                    ? <div className={style.statusWrapper}><p className={style.status}>
                        {props.status  ? 'Connected' : 'Disconnected'}</p>

                    </div>
                    : ''}
            </div>


        </div>
    )
}

export default Navbar;