import {FaTrashAlt} from 'react-icons/fa'
const lineItem = ({item,handleCheck,handleDelete,handleDeleteItems}) => {
  return (
    <li className="item" key = {item.id}>
              <input type="checkbox"
              onChange={() => {
                handleCheck(item.id)
              }}
              checked = {item.checked} 
              />
              <label 
              style={(item.checked) ? {textDecoration: 'line-through' }:null }
              onDoubleClick={() => handleCheck(item.id)}
              >{item.item}</label>
              <FaTrashAlt 
              role="button"
              onClick={() =>{
                handleDelete(item.id)
                handleDeleteItems(item.id)
                // console.log(item.checked)
                // {(item.checked === false) ? {(item) => handleDeleteItems(item.id)} : deleteItems}
              }}
              tabIndex="0"
              aria-label={`Delete ${item.item}`}
              />
            </li>  
  )
}
export default lineItem