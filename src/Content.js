import ItemList from "./ItemList"

const Content = ({items,handleCheck,handleDelete,handleDeleteItems,deleteItems}) => {  
  return (
    
    <main className="incompleted">
      <h1 className="heading">Incompleted Tasks</h1>
      {items.length ? (
      <ItemList
        items= {items}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
        handleDeleteItems = {handleDeleteItems}
        deleteItems = {deleteItems}
        />
      ) : (
        <p style={{marginTop: '3rem'}}>Your list is Empty.</p>
      )}
    </main>
  )
}
export default Content