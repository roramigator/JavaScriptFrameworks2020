import React, { useState } from "react";
import "./App.css";

const GroceryList = () => {
  const [item, setItem] = useState("");
  const [cost, setCost] = useState("");
  const [msg, setMsg] = useState("");
  const [totalCost, setTotalCost] = useState(0);
  const [list, setList] = useState([]);

  const addItem = e => {
    e.preventDefault();
    if(item !== "" || cost !== ""){
      setList([
        ...list,
        {[item]:cost}
      ]);
      setTotalCost(totalCost + parseFloat(cost, 10));
      setItem("");
      setCost("");
    }else{
      setMsg("You cannot have empty fields")
    }

  }

  const deleteItem = id => {
    setList(
      list.filter((item, idx)=>{
        return id !== idx;
      })
    )
    const itemCost = list.filter((item, idx) => {
      return id === idx
    })
    setTotalCost(totalCost - parseFloat(Object.values(itemCost[0]), 10))
  };

  return (
    <div className="container">
      <div className="card card-body bg-light mb-2">
        <form className="form-inline" onSubmit={e => addItem(e)}>
          <input
            className="form-control"
            type="text"
            placeholder="Name of grocery item..."
            aria-label="Name of grocery item..."
            name="item"
            value={item}
            onChange={e => { setMsg(""); setItem(e.target.value)}}
          />
          <input
            className="form-control"
            type="number"
            min="0"
            step=".01"
            placeholder="Cost of grocery Item..."
            aria-label="Cost of grocery Item..."
            name="cost"
            value={cost}
            onChange={e => {setMsg(""); setCost(e.target.value)}}
          />
          <div>
            <button type="submit" className="btn btn-success">
              Add
            </button>
          </div>
        </form>
        <i>{msg}</i>
      </div>
      <div className="card card-body border-white">
        <h1 className="h4">Grocery List</h1>
        <table className="table table-compact">
          <thead>
            <tr>
              <th>Item</th>
              <th>Cost</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              list.map((val, idx)=>{
                return (<tr key={"item-"+idx}>
                  <td>{Object.keys(val)}</td>
                  <td>${Object.values(val)}</td>
                  <td>
                    <button aria-label="Delete" title="Delete" onClick={()=>{setMsg(""); deleteItem(idx)}} >
                      &times;
                    </button>
                  </td>
                </tr>)
              })

            }
            {/**
             * Complete me. (You can use something else instead of a table if you like)
             * @example
             * <tr>
             *   <td>Toilet Paper</td>
             *   <td>$1.99</td>
             *   <td>
             *     <button aria-label="Delete" title="Delete" ... >
             *       &times;
             *     </button>
             *   </td>
             * </tr>
             */}
          </tbody>
        </table>
        <p className="lead">
          <strong>Total Cost: ${/* Complete me */}{totalCost}</strong>
        </p>
        <div className="text-right">
          <button type="button" className="btn btn-outline-success" onClick={() => { setMsg(""); setList([]); setTotalCost(0) }}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroceryList;
