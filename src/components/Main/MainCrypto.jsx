import React, { useEffect, useState } from "react";
import "./maincrypto.css";
import Coin from "../Coin/Coin";

const MainCrypto = () => {
  const [listOfCoins, setListOfCoins] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        setListOfCoins(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="cryptoDisplay">
      <div className="display heading">
        <ul>
          <li style={{ width: "10rem" }}>NAME</li>
          <li>Symbol</li>
          <li>Current Price</li>
          <li>Icon</li>
        </ul>
      </div>
      {listOfCoins.map((coin) => {
        return (
          <Coin
            name={coin.name}
            symbol={coin.symbol}
            current_price={coin.current_price}
            image={coin.image}
          />
        );
      })}
    </div>
  );
};

export default MainCrypto;
