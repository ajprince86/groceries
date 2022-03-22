import "./App.css";
import { useState } from "react";
import GroceryList from "./components/GroceryList";
// import Grocery from "./components/Grocery";

function App() {
  const [groceries, setGroceries] = useState({});
  return (
    <div className="App">
      <GroceryList />
      {/* <Grocery /> */}
    </div>
  );
}

export default App;
