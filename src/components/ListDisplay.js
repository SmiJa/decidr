export default function ListDisplay(props) {
    const listItems = props.list;
    const buildList = listItems.map((item, index) => {
        return (
            <li className="list-item" key={index}>{item}</li>
        )
    })

    return (
        <div className="list-wrap">
            <ul className="list">
                {buildList}
            </ul>
        </div>
    )
}