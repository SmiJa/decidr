import { useState } from "react"

export default function Input({listContainer, setListContainer}) {
    const [newItem, setNewItem] = useState("");

    const formSubmit = (e) => {
        e.preventDefault();
        console.log(newItem);
        setListContainer([...listContainer, newItem]);
        setNewItem("");
    }

    return (
        <div id="add-item">
            <form>
                <div className="input-wrap">
                    <input
                        type="text"
                        value={newItem}
                        onChange={e => setNewItem(e.target.value)}
                        placeholder="Add an Item"
                    />
                </div>                
                <button type="submit" className="add-btn" onClick={formSubmit}>Add Item</button>
            </form>
        </div>
    )
}