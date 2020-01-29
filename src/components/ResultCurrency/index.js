import React, { useState, useEffect } from "react";

function ResultCurrency({ updateInput, result, symbolFrom, symbolTo }) {
    const [input, setInput] = useState(0)

    useEffect(()=>{
        function handleUpdate(value){
            updateInput(value)
        }
        handleUpdate(input)
    }, [input, updateInput])

  return (
    <div className="row form-group m-0 mt-4">
      <input type="number" className="col mr-2" placeholder="Type here..." onChange={e => setInput(e.target.value)}/>
      <p className="col ml-2">{symbolTo} {result}</p>
    </div>
  );
}

export default ResultCurrency;
