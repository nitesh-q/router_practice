import { useNavigate } from "react-router-dom"

const Dashboard = () => {
    let navigate=useNavigate()
    let bb={
      a:"doraemon de ludda pirlaminums"
    }
    return (
        <> 
      <h1>now Dashboard file is running</h1>
      <button onClick={()=>{
        navigate("/logout",{state:bb})
      }}>logout</button>
      </>
    )
  }
  
  export default Dashboard