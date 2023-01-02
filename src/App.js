import Content from './Content';
import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';
import Content1 from './Content1';
import AddItem from './AddItem';
import SearchItem from './SearchItem';

function App() {
var cnt = 0





  const [items,setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')));
  const [deleteItems,setDeleteItems] = useState(JSON.parse(localStorage.getItem('completedlist'))||[]);
  // console.log(items);
  // console.log(deleteItems);
  const [newItem,setNewItem] = useState('');
  const [search,setSearch] = useState('')





  const setAndSaveItems = (newItems)=>{
    setItems(newItems)
    localStorage.setItem('shoppinglist',JSON.stringify(newItems));
  }

  const setAndSaveDeletedItems = (newItems)=>{
    setDeleteItems(newItems)
    localStorage.setItem('completedlist',JSON.stringify(newItems));
  }


  const addNewItem = (item)=>{
    const id = items.length ? items[items.length-1].id+1 : 1;
    const myNewItem = {id,checked:false,item};
    const listItems = [...items,myNewItem]; 
    setAndSaveItems(listItems);
  }

  

  const handleDeleteItems = (id) =>{
    const deletedListItem = items.filter(item => item.id === id);
    const listItems = [...deleteItems , deletedListItem]
    setAndSaveDeletedItems(listItems)
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? {...item,checked:!item.checked} : item);
    setAndSaveItems(listItems);
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems)
  }

  // const handleDelete1 = (id) => {
  //   const listItems = deleteItems.filter((item) => item.id !== id)
  //   console.log(listItems)
  //   setAndSaveDeletedItems(listItems)
  // }
  
  const handleSubmit = (e)=>{ 
    e.preventDefault();
    // console.log(newItem)
    if(!newItem)return
    addNewItem(newItem)
    setNewItem('')
  }






  return (
    <div className="App">
    <Header title = "Grocery List"/>
    <AddItem
    newItem = {newItem}
    setNewItem = {setNewItem}
    handleSubmit = {handleSubmit}
    />
    <SearchItem
    search = {search}
    setSearch = {setSearch}
    />
    <Content
    items = {items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
    handleCheck = {handleCheck}
    handleDelete = {handleDelete}
    handleDeleteItems = {handleDeleteItems}
    />
    <Content1
    cnt = {cnt}
    deleteItems={deleteItems}
    // handleDelete1 = {handleDelete1}
    />
    <Footer 
    length = {items.length}
    />
    </div>
  );
}

export default App;
