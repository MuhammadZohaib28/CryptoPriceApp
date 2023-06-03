import React from "react";

const Coin = ({name, symbol, current_price, image}) => {
  return (
    <>
      <div className="display">
        <h2 style={{ width: "14rem" }}>{name}</h2>
        <h2 className="c">{symbol}</h2>
        <h2>{current_price} PKR</h2>
        <img src={image} />
      </div>
    </>
  );
};

export default Coin;
