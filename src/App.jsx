import React, { useRef, useEffect } from "react";

function App() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    console.log("render");
  });
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default App;
