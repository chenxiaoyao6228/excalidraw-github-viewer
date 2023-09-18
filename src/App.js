import { useEffect, useState } from 'react';
import './App.css';
import { Excalidraw } from "@excalidraw/excalidraw";

function App() {
  const [excalidrawData, setExcalidrawData] = useState(null);

  useEffect(() => {

    const url = window.location.search
      .substring(1)
      .replace(/\/\/github\.com/, "//raw.githubusercontent.com")
      .replace(/\/blob\//, "/");

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setExcalidrawData(data)

      })
      .catch(error => {
        console.error('Error fetching JSON:', error);
      });

  }, [])


  return (
    <div className="App">
      {excalidrawData ? <Excalidraw initialData={excalidrawData} 
      /> : null}
    </div>
  );
}

export default App;
