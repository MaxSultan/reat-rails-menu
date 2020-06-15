import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Menus from './components/Menus';
import MenuForm from './components/MenuForm';

function App() {
  return (
    <div className="App">
      <h1>The CheeseCake Factory</h1>
      <Menus/>
      <MenuForm/>
    </div>
  );
}

export default App;
