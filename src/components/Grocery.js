import GroceryList from "./GroceryList";

function Grocery() {
  const currentReceipt = (receiptData) => {
    const newReceipt = {
      ...receiptData,
    };

    console.log(newReceipt);
  };

  return (
    <div>
      <GroceryList onReceipt={currentReceipt} />
    </div>
  );
}

export default Grocery;
