import { useState } from "react";

function ItemList () {
    const [items, setItems] = useState([
        {id: 1, name: "Apple"}, 
        {id: 2, name: "Watermelon"},
        {id: 3, name: "Banana"} , 
        {id:4, name:"Apricot"}
    ]);

    const [newItem, setNewItem] = useState("");
    const [filterA, setFilterA] = useState(false);

    const AddItem = () => {
        if (newItem.trim() === "") return;
        const newItemObj = { id: items.length + 1, name: newItem };
        setItems([...items, newItemObj]);
        setNewItem("");
      };

      const DeleteItem = (id) => {
        setItems(items.filter(item => item.id !== id)); 
    };

    return (
        <div>
           <h2>Item List</h2>
           <label>
                <input 
                    type="checkbox"
                    checked={filterA}
                    onChange={() => setFilterA(!filterA)}
                />
                Show Only Items Starting with "A"
            </label>
           <ul>
                {items
                .filter(item => !filterA || item.name.startsWith("A"))
                .map((item) => (
                    <li key={item.id}>
                        {item.name}
                        <button onClick={() => DeleteItem(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <input 
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="Enter an item"
            />
            <button onClick={AddItem}>Add Item</button>
        </div>
        
      );
    
};

export default ItemList;