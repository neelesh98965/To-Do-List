import Content from './Content';
import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';
import Content1 from './Content1';

function App() {
  const [items,setItems] = useState([
    {
      id:1,
      checked:false,
      item: "One half pound bag of Cocoa Covered Almonds Unsalted"
    },
    {
      id:2,
      checked:false,
      item:"Item 2"
    },
    {
      id:3,
      checked:false,
      item: "Item 3"
    }
  ]);

  const [deleteItems,setDeleteItems] = useState([]);

  const handleDeleteItems = (id) =>{
    const deletedListItem = items.filter((item) => item.id === id);
    setDeleteItems([...deleteItems , deletedListItem])
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? {...item,checked:!item.checked} : item);
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }



  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }
  return (
    <div className="App">
    <Header title = "Grocery List"/>
    <Content
    items = {items}
    handleCheck = {handleCheck}
    handleDelete = {handleDelete}
    handleDeleteItems = {handleDeleteItems}
    />
    <Content1
    key = {deleteItems.id}
    items = {items}
    deleteItems={deleteItems}
    handleDelete = {handleDelete}
    />
    <Footer 
    length = {items.length}
    />
    </div>
  );
}

export default App;
