import { MouseEventHandler } from "react";

export default interface LectureProps {
    key: string;
    time: any;
    lecture: any | string;
    onDelete: MouseEventHandler;
}