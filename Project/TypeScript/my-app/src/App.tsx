import React from 'react';
import './App.css';

function App() {

  const [timer, TiPidor] = React.useState<string | number>(10);
  React.useEffect(() => {
    const i = setInterval(()=>{
      if(timer > 0) {
        if(typeof timer === "number"){
          TiPidor(timer-1)
        }
      }
      else return TiPidor("Andey xyi sosi");
      }, 1000)
      return () => {clearInterval(i)};
  });
  return (
    <div className="App">
      {timer}
    </div>
  );
}

export default App;
