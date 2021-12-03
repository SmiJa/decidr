import { useState } from "react"

export default function Input({listContainer, setListContainer, setShowWarning, setMessage, displayModal}) {
    const [newItem, setNewItem] = useState("");

    const formSubmit = (e) => {
        e.preventDefault();
        if (newItem === "") {
            setShowWarning(true);
            setMessage("Your input is empty");
            return false;
        }

        let loweredItem = newItem.toLowerCase().trim();

        if (listContainer.every((item) => item.toLowerCase() !== loweredItem)) {
            setListContainer([...listContainer, newItem.trim()]);
            setNewItem("");
        } else {
            setMessage("Item is already on the list.");
            setShowWarning(true);
            setNewItem("");
        }
        console.log(newItem);
        
    }

    const clearList = () => {
        setListContainer([]);
        setNewItem("");
    }

    return (
        <div id="input">
            <form>
                <div className="input-wrap">
                    <input
                        className="text-input"
                        type="text"
                        value={newItem}
                        onChange={e => setNewItem(e.target.value)}
                        placeholder="Add an Item"
                    />
                </div>                
                <button disabled={displayModal} type="submit" className="add-btn btn" onClick={formSubmit}>Add Item</button>
                <button disabled={displayModal} type="submit" className="clear-btn btn" onClick={clearList}>Clear List</button>
            </form>
        </div>
    )
}