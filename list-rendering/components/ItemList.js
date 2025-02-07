import { useState } from "react";

//function to show list
function ItemList () {
    const [items, setItems] = useState([
        {id: 1, name: "Apple"}, 
        {id: 2, name: "Watermelon"},
        {id: 3, name: "Banana"} , 
        {id:4, name:"Apricot"}
    ]);

    const [newItem, setNewItem] = useState(""); //to track user input
    const [filterA, setFilterA] = useState(false); //new state for filtering

    //function to add a new item
    const AddItem = () => {
        if (newItem.trim() === "") return; // to prevent empty item
        const newItemObj = { id: items.length + 1, name: newItem };
        setItems([...items, newItemObj]);
        setNewItem("");
      };

      //function to delete an item
      const DeleteItem = (id) => {
        setItems(items.filter(item => item.id !== id)); 
    };

    return (
        <div>
           <h2>Item List</h2>
           {/* Adding labeled checkbox */}
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
                .filter(item => !filterA || item.name.startsWith("A")) //filtering logic
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