export default function ListItem(props) {

    return (
        <div>
            <ul>
                {props.items.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
      </div>
    )
}