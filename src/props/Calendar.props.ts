import { Dispatch, SetStateAction } from "react";

export default interface CalendarProps {
    key: string;
    day: string;
    active: boolean;
    values: any;
    scheduleState: Record<string, any>;
    stateFunction: Dispatch<SetStateAction<Record<string, any>>>;
}