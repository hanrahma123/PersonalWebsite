import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import View from "./Components/View";
import Footer from "./Components/Footer";

function App() {
  const [path, setPath] = useState("Home");

  function handlePathChange(path) {
    console.log(path);
    setPath(path);
  }

  return (
    <div className="App">
      <Header handlePathChange={handlePathChange} path={path} />
      <View path={path}></View>
      <Footer />
    </div>
  );
}

export default App;
