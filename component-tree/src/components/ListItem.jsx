export default function ListItem(props) {
    return (
    <div onClick={() => {props.onChecked(props.id)}}>
        <li>{props.item}</li>
    </div>
    )
}