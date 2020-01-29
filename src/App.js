import React, {useState, useEffect} from "react";

import api from "./services/api"

import "./styles/App.css";
import './styles/bootstrap/css/bootstrap.css'

import SelectCurrency from './components/SelectCurrency'
import ResultCurrency from './components/ResultCurrency'

function App() {
  const [from, setFrom] = useState('USD')
  const [to, setTo] = useState('USD')
  const [input, setInput] = useState(0)
  const [result, setResult] = useState(0)
  const [symbolFrom, setSymbolFrom] = useState('$')
  const [symbolTo, setSymbolTo] = useState('$')

  useEffect(()=>{
    const apiKey = "0ed3b254dadebd4f423a"
    async function doConvert(){
      const response = await api.get(`/convert?q=${from}_${to}&compact=y&apiKey=${apiKey}`)
      const rate = response.data[`${from}_${to}`].val
      setResult(Number((input * rate).toFixed(2)))
    }
    doConvert()

  },[from,to, input])

  function updateCurrencies(from, to, symbolFrom, symbolTo){
    setFrom(from)
    setTo(to)
    setSymbolFrom(symbolFrom)
    setSymbolTo(symbolTo)
  }

  function updateInput(input){
    setInput(Number(input))
  }

  return (
    <div id="app"  className="container p-4">

      <h1 id="main_title" className="m-0 p-0">Currency converter <span role="img" aria-label="money icon">💵</span></h1>

      <SelectCurrency updateCurrencies={updateCurrencies}/>
      
      <ResultCurrency updateInput={updateInput} result={result} symbolFrom={symbolFrom} symbolTo={symbolTo}/>
      
      <a href="https://github.com/joaodjtr" target="_blank" rel="noopener noreferrer" id="made_by">Made by João Victor <span role="img" aria-label="Made by">✌️</span></a>
    </div>
  );
}

export default App;
