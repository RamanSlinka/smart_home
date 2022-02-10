import React, {FC, useState} from 'react';
import {AiOutlineHome} from "react-icons/ai";
import {IoBulbOutline} from "react-icons/io5";
import {IoIosAddCircleOutline, IoMdOutlet} from "react-icons/io";
import {FaTemperatureLow} from "react-icons/fa";
import style from "./Navbar.module.scss"
import image from "../../assets/images/smartHome_.jpeg"
import {NavLink} from "react-router-dom";
import {PATH} from "../Routes";

const Navbar = () => {
    const [connected, setConnect] = useState(true);

    const [light, setLight] = useState(true);
    const [energy, setEnergy] = useState(true);
    const [temp, setTemp] = useState(true);

    const clickLightHandler = () => {
        setLight(!light)
        console.log('hey')
    }
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
                        title={'Lights'}
                        status={connected}
                        onClick={clickLightHandler}
                    />
                </NavLink>

                <NavLink to={PATH.SMART_OUTLET}>
                    <NavItem
                        icon={<IoMdOutlet/>}
                        title={'Energy'}
                        status={connected}
                    />
                </NavLink>
                <NavLink to={PATH.SMART_TEMPERATURE_SENSOR}>
                    <NavItem
                        icon={<FaTemperatureLow/>}
                        title={'Temperature'}
                        status={connected}
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
                {/*<NavLink to={props.path}>*/}
                <div className={style.icon}> {props.icon}</div>
                {/*</NavLink>*/}
                <h3 className={style.iconName}>{props.title}</h3>
                {props.status !== null
                    ? <div className={style.statusWrapper}><p className={style.status}>
                        {props.status ? 'Connected' : 'Disconnected'}</p>

                    </div>
                    : ''}
            </div>


        </div>
    )
}

export default Navbar;