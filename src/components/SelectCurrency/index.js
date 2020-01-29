import React, { useState, useEffect } from "react";

import CurrenciesFile from "../../utils/Currencies";

function SelectCurrency({ updateCurrencies }) {
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("USD");

  let { currencies } = CurrenciesFile;
  let currenciesObj = currencies
  currencies = Object.keys(currencies).map(key => {
    return currencies[key];
  });

  useEffect(() => {
    function handleUpdate(from, to) {
      let symbolFrom = currenciesObj[from].symbol
      let symbolTo = currenciesObj[to].symbol
      updateCurrencies(from, to, symbolFrom, symbolTo);
    }
    handleUpdate(from, to);
  }, [from, to, updateCurrencies, currenciesObj]);

  return (
    <div className="row form-group m-0 mt-4">
      <div className="col p-0 mr-2">
        <label>From</label>
        <select
          id="select-from"
          className="col custom-select"
          onChange={e => setFrom(e.target.value)}
        >
          {currencies.map(c => (
            <option
              value={c.code}
              key={c.code}
            >{`${c.code} - ${c.name}`}</option>
          ))}
        </select>
      </div>
      <div className="col p-0 m-0 ml-2">
        <label>To</label>
        <select
          id="select-to"
          className="col custom-select"
          onChange={e => setTo(e.target.value)}
        >
          {currencies.map(c => (
            <option
              value={c.code}
              key={c.code}
            >{`${c.code} - ${c.name}`}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default SelectCurrency;
