import Model from '../Components/Model/Model';
import { useState } from 'react';
import './App.css';
function App() {

  const [isShowModel, setIsShowModel] = useState(false)


  function showModel() {
    console.log("sss");
    setIsShowModel(true)
  }

  function closeModel() {
    setIsShowModel(false)
  }

  return (
    <div className="App">
      <button type="button" className="" onClick={showModel}>click for show</button>
      <Model closemodel={closeModel} isshowmodel={isShowModel} />
    </div>
  );
}

export default App;
