import { FaTrashAlt } from "react-icons/fa"
const Content1 = ({cnt,deleteItems,handleDelete1}) => {
  return (
    <main className="deleted">
        <h1 className="heading">Completed Tasks</h1>
        {deleteItems?.length ? (
            <ul>
            {deleteItems.map((item)=>(
                <li className="item" key = {cnt++}>
                <input type="checkbox"
                onChange={() => ({})}
                checked = {!item.checked} 
                />
                <label 
                style={ {textDecoration: 'line-through'} }
                >{item[0].item}</label>
                <FaTrashAlt 
                role="button"
                onClick={() => handleDelete1(item[0].id)}
                tabIndex="0"
                aria-label={`Delete ${item[0].item}`}
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