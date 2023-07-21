import { useEffect, useState } from "react";
import "./App.css";
import {Button, Footer, Header, Table} from "./Components/index";
import  FinDataInterface from "./Interface/FinDataInterface";
import FinDataContext from './Context/FinDataContext';

function App() {
  const [cpData, setCpData] = useState<FinDataInterface[]>([]);
  const [data, setData] = useState<FinDataInterface[]>([]);
  const fetchBankingData =  () => {
    fetch("./sampleData.json").then(res => res.json()).then(data => {
    setData(data);
    setCpData(data);
  });
  }
  useEffect(() => {
    fetchBankingData();
  },[])

  return (
    <>
      <Header/>
      <FinDataContext.Provider value ={{cpData, data, setData}} >
        <Button/>
        <Table/>
      </FinDataContext.Provider>
      <Footer/>
    </>
  )
}

export default App
