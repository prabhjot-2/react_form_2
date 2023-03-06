import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [lastName,setLastName]=useState("");
  const [fullName, setfullName] = useState("");
  const[lastNamenew, setLastNameNew]= useState("");
  

  const onSubmit = (event) => {
    event.preventDefault();

    setfullName(name);
    setLastNameNew(lastName);
  };

  const inputEvent = (event) => {
    setName(event.target.value);
  };

  const inputEventTwo=(event)=>{
    setLastName(event.target.value);
  }
  
  return (
    <>
      <div className="main_div">
        <form onSubmit={onSubmit}>
          <div>
            <h1>Hello {fullName} {lastNamenew}</h1>
            <input
              type="text"
              placeholder="enter your name"
              onChange={inputEvent}
              value={name}
            />
            <br />
            <input
              type="text"
              placeholder="enter your  last name"
              onChange={inputEventTwo}
              value={lastName}
            />
            <button type="submit">click me</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
