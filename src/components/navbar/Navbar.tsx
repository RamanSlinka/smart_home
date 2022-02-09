import React, {FC, useState} from 'react';
import {AiOutlineHome} from "react-icons/ai";
import {IoBulbOutline} from "react-icons/io5";
import {IoIosAddCircleOutline, IoMdOutlet} from "react-icons/io";
import {FaTemperatureLow} from "react-icons/fa";
import style from "./Navbar.module.scss"
import image from "../../assets/images/smartHome_.jpeg"
import {NavLink} from "react-router-dom";

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
                <NavItem

                    icon={<AiOutlineHome/>}
                    title={'Home'}
                    status={null}

                />


                <NavItem
                    icon={<IoBulbOutline/>}
                    title={'Lights'}
                    status={connected}
                    onClick={clickLightHandler}
                />


                <NavItem
                    icon={<IoMdOutlet/>}
                    title={'Energy'}
                    status={connected}
                />

                <NavItem
                    icon={<FaTemperatureLow/>}
                    title={'Temperature'}
                    status={connected}
                />

                <NavItem
                    icon={<IoIosAddCircleOutline/>}
                    status={null}
                />
            </div>
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
                        {props.status ? 'Connected': 'Disconnected'}</p>

                    </div>
                    : ''}
            </div>


        </div>
    )
}

export default Navbar;