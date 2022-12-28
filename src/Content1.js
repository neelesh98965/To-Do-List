import { FaTrashAlt } from "react-icons/fa"
const Content1 = ({key,items,deleteItems,handleDelete}) => {
  return (
    <main className="deleted">
        <h1 className="heading">Completed Tasks</h1>
        {deleteItems?.length ? (
            <ul>
            {deleteItems.map((item)=>(
                <li className="item" key = {key}>
                <input type="checkbox"
                checked = {!item.checked} 
                />
                <label 
                style={ {textDecoration: 'line-through' }}
                >{item.items}</label>
                <FaTrashAlt 
                role="button"
                onClick={() => handleDelete(item.id)}
                tabIndex="0"
                aria-label={`Delete ${item.deleteItems}`}
                />
                </li>
            ))}
            </ul>
        ):(
        <p style={{marginTop: '2rem'}}>Your list is Empty.</p>
      )}  
    </main>
  )
}
export default Content1