const Footer = ({length}) => {
    const today = new Date();
  return (
    <footer>
        <p>{length} {length === 1 ? "Task" : "Tasks"} Pending</p>
    </footer> 
  )
}
export default Footer