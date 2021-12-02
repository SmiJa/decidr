export default function ListDisplay({listContainer, setListContainer}) {
    

    const removeItemFromList = (i) => {
        setListContainer(listContainer.filter((value, index) => index !== i));
    };
    
    const buildList = listContainer.map((item, index) => {

        return (
            <li className="list-item" key={index}>{item} <span onClick={() => removeItemFromList(index)}><i className="bi bi-trash-fill"></i></span></li>
        )
    });

    return (
        <div className="list-wrap">
            <ul className="list">
                {buildList}
            </ul>
        </div>
    )
}