import React from "react";

function Pizza({pizza, handleClick}) {
  const {size, topping, vegetarian } = pizza

  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian? "Yes" : "No" }</td>
      <td>
        <button onClick={() => handleClick(pizza)} type="button" className="btn btn-primary">
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
