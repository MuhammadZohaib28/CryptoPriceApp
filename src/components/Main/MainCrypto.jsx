// import React, { useEffect, useState } from "react";
// import "./maincrypto.css";
// import Coin from "../Coin/Coin";

// const MainCrypto = () => {
//   const [listOfCoins, setListOfCoins] = useState([]);
//   const [searchWord, setSearchWord] = useState("");
//   useEffect(() => {
//     fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=pkr")
//       .then((response) => response.json())
//       .then((data) => {
//         setListOfCoins(data);
//         console.log(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);

//   const searchFilter = listOfCoins.filter((coin) => {
//     return coin.name.toLowerCase().includes(searchWord.toLowerCase());
//   });

//   return (
//     <div className="cryptoDisplay">
//       <input
//         type="text"
//         placeholder="search"
//         onChange={(event) => {
//           setSearchWord(event.target.value);
//         }}
//       />
//       <div className="display heading">
//         <ul>
//           <li style={{ width: "10rem" }}>NAME</li>
//           <li>Symbol</li>
//           <li>Current Price</li>
//           <li>Icon</li>
//         </ul>
//       </div>
//       {searchFilter.map((coin) => {
//         return (
//           <Coin
//             name={coin.name}
//             symbol={coin.symbol}
//             current_price={coin.current_price}
//             image={coin.image}
//           />
//         );
//       })}
//     </div>
//   );
// };

// export default MainCrypto;

import React, { useEffect, useState } from "react";
import "./maincrypto.css";
import Coin from "../Coin/Coin";

const MainCrypto = () => {
  const [listOfCoins, setListOfCoins] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    fetchCoinData();

    // Set the interval for reloading every 5 seconds
    const interval = setInterval(fetchCoinData, 6000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const fetchCoinData = () => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=pkr")
      .then((response) => response.json())
      .then((data) => {
        setListOfCoins(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // <h2>{`Error fetching data:, ${error}`}</h2>
      });
  };

  const searchFilter = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  });

  return (
    <div className="cryptoDisplay">
      <input
        type="text"
        placeholder="search"
        onChange={(event) => {
          setSearchWord(event.target.value);
        }}
      />
      <div className="display heading">
        <ul>
          <li style={{ width: "10rem" }}>NAME</li>
          <li>Symbol</li>
          <li>Current Price</li>
          <li>Icon</li>
        </ul>
      </div>
      {searchFilter.map((coin) => {
        return (
          <Coin
            key={coin.id}
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
