import React, {useEffect, useState} from 'react';
import imageRoom from '../../assets/images/room_BG.jpeg';
import style from './Home.module.scss';
import DateAndClock from "../../components/date/DateAndClock";
import axios from "axios";

const Home = () => {

    const [items, setItems] = useState([]);
    useEffect(() => {

        async function fetchData() {
            try {
                const itemResponse = await axios.get("http://localhost:3001/api/v1/devices/");
                setItems(itemResponse.data);
            } catch (error) {
                alert('ERROR')
            }
        }

        fetchData();

    }, [])


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