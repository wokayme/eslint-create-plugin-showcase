import React from "react";

export const App = () => {
  const [counter, setCounter] = React.useState("");

  return (
    <>
      <h1>Hello world {counter}</h1>
      <button onClick={()=>setCounter(p=>p+1)}>Counter</button>
    </>
  );
};
