import React, {useState, useEffect} from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Menus from './components/Menus';
import MenuForm from './components/MenuForm';
import axios from 'axios';

function App() {

  const [menus, setMenus] = useState([]);

  const addMenu = (name) => {
      axios
          .post("/api/menus", { name, })
          .then((res) => {
            setMenus([res.data, ...menus]);
          })
          .catch((err) => {
            console.log(err);
          });
  }

  const updateMenu = (id) => {
    console.log('updated : ', id)
  }

  const deleteMenu = (id) => {
    console.log('deleted: ', id)
    axios.delete(`/api/menus/${id}`)
    .then((res) => {
      const newMenu = menus.filter(m => m.id !== res.data.id);
      setMenus(newMenu)
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
      axios.get('/api/menus')
      .then((res) =>{
          console.log(res.data)
          setMenus(res.data)
      })
      .catch(err => console.log(err))
      // try{
      // const res = axios.get('/api/menus')
      // console.log(res.data)
      // setMenus(res.data)
      // } catch(err){
      //     console.log(err);
      // }
  }, [])

  return (
    <div className="App">
      <h1>The CheeseCake Factory</h1>
      <Menus menus={menus} updateMenu={updateMenu} deleteMenu={deleteMenu}/>
      <MenuForm addMenu={addMenu}/>
    </div>
  );
}

export default App;
