import React, { useState, useEffect } from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faCircle,
  faCheckCircle,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const App = () => {
  // HINT: each "item" in our list names a name,
  // a boolean to tell if its been completed, and a quantity
  const [items, setItems] = useState([
    { itemName: "item 1", quantity: 1, isSelected: false },
    { itemName: "item 2", quantity: 3, isSelected: true },
    { itemName: "item 3", quantity: 2, isSelected: false },
  ]);

  const [inputValue, setInputValue] = useState("");
  const [totalItemCount, setTotalItemCount] = useState(6);
  /**
   * Creates a new object called newItem which is what gets pushed to the array.
   * We set the itemName to whatever the inputValue is, we default the quantity to 1,
   * and default the isSelected boolean to false.
   * Copies the existing array (we do this to avoid mutating state),
   * and adds our newItem object to the end.
   * Pushes the new array back into state
   * Resets the inputValue to empty string so that the user can type and add more stuff
   */
  const handleAddButtonClick = () => {
    const newItem = {
      itemName: inputValue,
      quantity: 1,
      isSelected: false,
    };

    const newItems = [...items, newItem];

    setItems(newItems);
    setInputValue("");
    calculateTotal();
  };
  /**
   * We use the index to get the item/object from the array
   * We increase the quantity
   * We put everything back into state
   * @param {*} index
   */
  const handleQuantityIncrease = (index) => {
    const newItems = [...items];

    newItems[index].quantity++;

    setItems(newItems);
    calculateTotal();
  };
  /**
   * We use the index to get the item/object from the array
   * We decrease the quantity
   * We put everything back into state
   * @param {*} index
   */
  const handleQuantityDecrease = (index) => {
    const newItems = [...items];

    newItems[index].quantity--;

    setItems(newItems);
    calculateTotal();
  };
  /**
   * The index is given to us by the map function,
   * and indicates what position in the array we're currently on.
   * We then use this index to get the object from the array,
   * and set the isSelected variable to the opposite of what it currently is.
   * We then put the updated items into state.
   * This causes React to rerender the component and render either a "checked circle" or
   * an "empty circle" for each item depending on the this flag.
   */
  const toggleComplete = (index) => {
    const newItems = [...items];

    newItems[index].isSelected = !newItems[index].isSelected;

    setItems(newItems);
  };
  /**
   * This uses the reduce function to add up all the quantities in our items array.
   */
  const calculateTotal = () => {
    const totalItemCount = items.reduce((total, item) => {
      return total + item.quantity;
    }, 0);

    setTotalItemCount(totalItemCount);
  };

  return (
    <div className="app-background">
      <div className="main-container">
        <div className="add-item-box">
          <input
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            className="add-item-input"
            placeholder="Add an item..."
          />
          <FontAwesomeIcon
            icon={faPlus}
            onClick={() => handleAddButtonClick()}
          />
        </div>
        <div className="item-list">
          {items.map((item, index) => (
            <div className="item-container">
              <div className="item-name" onClick={() => toggleComplete(index)}>
                {item.isSelected ? (
                  <>
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <span className="completed">{item.itemName}</span>
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faCircle} />
                    <span>{item.itemName}</span>
                  </>
                )}
              </div>
              <div className="quantity">
                <button>
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    onClick={() => handleQuantityDecrease(index)}
                  />
                </button>
                <span> {item.quantity} </span>
                <button>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    onClick={() => handleQuantityIncrease(index)}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="total">Total: {totalItemCount}</div>
      </div>
    </div>
  );
};

export default App;
