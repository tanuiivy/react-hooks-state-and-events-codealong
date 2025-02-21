import React, {useState}from "react";

function Toggle() {
  const [isOn, setIsOn]= useState(false);

  function handleClick(){
    setIsOn((prevIsOn) => !prevIsOn);// toggle true/false
  }

  const colour = isOn? "red":"white";

  return <button style={{background:colour}} onClick={handleClick}>
    {isOn ? "ON" : "OFF"}
    </button>;
}

export default Toggle;
