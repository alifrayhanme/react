import { useCallback, useMemo, useState } from "react";
import "./App.css";
import Title from "./Component/Title";
import ShowCount from "./Component/ShowCount";
import Button from "./Component/Button";
import { LayoutOne } from "./Component/LayoutOne";
import { LayoutTwo } from "./Component/LayoutTwo";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const increment1 = useCallback(() => {
    setCount1((prevCount) => prevCount + 1);
  }, []);

  const increment2 = useCallback(() => {
    setCount2((prevCount) => prevCount + 2);
  }, []);

  const isEven = useMemo(()=>{
    let i = 0
    while ( i>= 9999999999 ) {
      i += 1
    }
    return count1 % 2 == 0
  }, [count1])



  return (
    <>
      <Title heading={"Performance optimization with “useMemo” and “useCallback” hooks"}/>

      <ShowCount count={count1} title={"Counter One"}/>
      <Button handelClick={increment1}>IncrementOne</Button>

      <br />
      <hr />
      {isEven ? "counter1 number is even" : "counter1 number is odd"}
      <hr />
      <br />
      
      <ShowCount count={count2} title={"Counter Two"}/>
      <Button handelClick={increment2}>IncrementTwo</Button>

      <LayoutOne/>
      <LayoutTwo/>
    </>
  );
}

export default App;
