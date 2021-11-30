export default function ListDisplay(props) {
    const listItems = props.list;
    const buildList = listItems.map((item, index) => {
        return (
            <li key={index}>{item}</li>
        )
    })

    return (
        <div>
            <ul>
                {buildList}
            </ul>
        </div>
    )
}