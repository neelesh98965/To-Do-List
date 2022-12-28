import LineItem from "./LineItem"
const ItemList = ({items,handleCheck,handleDelete,handleDeleteItems,deleteItems}) => {
  return (
    <ul>
          {items.map((item)=>(
               <LineItem 
               key = {item.id}
               item = {item}
               handleCheck = {handleCheck}
               handleDelete = {handleDelete}
               handleDeleteItems = {handleDeleteItems}
               deleteItems = {deleteItems}
               />       
          ))}
        </ul>
  )
}
export default ItemList