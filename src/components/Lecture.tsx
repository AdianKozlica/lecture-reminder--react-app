import LectureProps from "../props/Lecture.props";
import './Lecture.css';

export default function Lecture(props: LectureProps) {
    return (
        <div>
            <div className="lecture">
                <button onClick={props.onDelete} className="delete-btn">Delete</button>
                <h2 className="lecture-title">{props.lecture}</h2>
                <p>Begins at {props.time}</p>
            </div>
        </div>
    )
}