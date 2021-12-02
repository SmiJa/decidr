import { useState } from "react"

export default function Input({listContainer, setListContainer, setShowWarning, setMessage}) {
    const [newItem, setNewItem] = useState("");

    const formSubmit = (e) => {
        e.preventDefault();
        if (newItem === "") {
            setShowWarning(true);
            setMessage("Your input is empty");
            return false;
        }

        for (let i = 0; i <= listContainer.length; i++) {
            if (listContainer[i] === newItem.trim()) {
                setMessage("Item is already on the list.");
                setShowWarning(true);
                setNewItem("");
                break;
            } else {
                setListContainer([...listContainer, newItem.trim()]);
                setNewItem("");
            }
        }
        console.log(newItem);
        
    }

    const clearList = () => {
        setListContainer([]);
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
                <button type="submit" className="add-btn" onClick={clearList}>Clear List</button>
            </form>
        </div>
    )
}