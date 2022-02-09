import React, {useEffect, useState} from 'react';
import style from "./DateAndClock.module.scss";

const DateAndClock = () => {

    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
        setInterval(() => setDateState(new Date()), 1000);
    }, []);
    const date = new Date();
    const dayOfWeek = new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(date)


    return (
        <div className={style.dateContainer}>
            <div className={style.clock}>
                {dateState.toLocaleString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric',
                    hour12: false,
                })}
            </div>
            <span className={style.layer}></span>
            <div>
                <p className={style.dayOfWeek}>{dayOfWeek}</p>
                <p className={style.date}>
                    {' '}
                    {dateState.toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                    })}

                </p>
            </div>
        </div>
    );
};

export default DateAndClock;