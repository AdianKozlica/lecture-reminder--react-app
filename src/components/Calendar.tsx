import { useState } from "react";
import CalendarProps from "../props/Calendar.props";
import './Calendar.css';
import Lecture from "./Lecture";

export default function Calendar(props: CalendarProps) {
    const [refresh, setRefresh] = useState<boolean>(false);
    const hours = [...Array(24).keys()].map(value => value.toString().padStart(2, '0'))
    const minutes = [...Array(60).keys()].map(value => value.toString().padStart(2, '0'))

    if (!props.active)
        return (<></>);

    return (
        <div className="calendar">
            {hours.map((hour, index) => {
                return (
                    <>
                        <h3>{hour}:00</h3>
                        <div className="container">
                            {minutes.map(minute => {
                                const schedule = `${hour}:${minute}`;
                                const lecture = props.scheduleState[props.day][schedule];

                                if (!lecture)
                                    return (<></>)

                                return (
                                    <Lecture 
                                        key={crypto.randomUUID()} 
                                        lecture={props.values[schedule]}
                                        onDelete={() => {
                                            delete props.scheduleState[props.day][schedule];
                                            props.stateFunction(props.scheduleState);
                                            setRefresh(!refresh);
                                        }}
                                        time={schedule}></Lecture>
                                )
                            })}
                        </div>
                        { index !== hours.length -1 ? <div className="spacer"></div> : <></>}
                    </>
                );
            })}
        </div>
    )
}