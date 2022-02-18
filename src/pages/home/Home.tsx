import React, {useEffect, useState} from 'react';
import imageRoom from '../../assets/images/room_BG.jpeg';
import style from './Home.module.scss';
import DateAndClock from "../../components/date/DateAndClock";
import axios from "axios";
import {fetchDevicesTC} from "../../store/reducer";
import {useDispatch} from "react-redux";

const Home = () => {

    const [items, setItems] = useState([]);
    const dispatch = useDispatch()

    useEffect(() => {

        const thunk = fetchDevicesTC()
        dispatch(thunk)
        console.log(thunk)
    }, [dispatch])


    return (
        <div className={style.homeContainer}>
            <span className={style.topLayer}></span>
            <div>
                <img className={style.backgroundImage}
                     src={imageRoom}
                     alt="living room"/>
                <p className={style.welcome}
                   onClick={() => console.log(items
                   )}
                    //devices.SmartDevice[1].id[1][1].type
                >WELCOME</p>
            </div>


            <DateAndClock/>
        </div>
    );
};

export default Home;