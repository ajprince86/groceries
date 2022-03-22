import "./groceryList.css";
import { useState } from "react";
import Grocery from "./Grocery";

function GroceryList(props) {
  const list = [];
  const [item, setItem] = useState("");
  const [brand, setBrand] = useState("");
  const [units, setUnit] = useState("");
  const [quantity, setQuantity] = useState("");
  const [isPurchased, setIsPurchased] = useState(false);

  const itemHandler = (event) => {
    console.log(event.target.value);
    setItem(event.target.value);
  };
  const brandHandler = (event) => {
    console.log(event.target.value);

    setBrand(event.target.value);
  };

  const unitHandler = (event) => {
    console.log(event.target.value);

    setUnit(event.target.value);
  };

  const quantityHandler = (event) => {
    console.log(event.target.value);

    setQuantity(event.target.value);
  };

  const submitForm = (event) => {
    event.preventDefault();
    console.log(event);
    const expenses = {
      item: item,
      brand: brand,
      units: units,
      quantity: quantity,
    };
    console.log(expenses);
    props.list.push(expenses);
    console.log(list);
    setItem("");
    setBrand("");
    setUnit("");
    setQuantity("");
  };

  return (
    <form className="form" onSubmit={submitForm}>
      <h1>Welcome to my list</h1>
      <label for="item">Item:</label>
      <br />
      <input type="text" value={item} onChange={itemHandler} name="item" />
      <br />
      <label for="brand">Brand:</label>
      <br />
      <input type="text" value={brand} onChange={brandHandler} name="brand" />
      <br />
      <label for="units">Units:</label>
      <br />
      <input type="text" value={units} onChange={unitHandler} name="units" />
      <br />
      <label for="quantity">Quantity:</label>
      <br />
      <input
        type="number"
        value={quantity}
        onChange={quantityHandler}
        name="quantity"
      />
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default GroceryList;

// {
//   item: '',
//   brand '',
//   units: '',
//   quantity: 0,
//   isPurchased: false
// }
