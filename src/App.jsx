import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import MainCrypto from "./components/Main/MainCrypto";
import { Axios } from "axios";

const App = () => {
  
  return (
    <div>
      <Header />
      <MainCrypto />
    </div>
  );
};

export default App;
