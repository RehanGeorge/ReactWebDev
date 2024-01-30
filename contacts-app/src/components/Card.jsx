import Avatar from "./Avatar"
import Detail from "./Detail"

export default function Card(props) {
    return (
        <div className="card">
            <div className="top">
                <h2 className="name">{props.name}</h2>
                <Avatar imgURL={props.imgURL} />
            </div>
                <Detail phone={props.phone} email={props.email} />
        </div>
    )
}
