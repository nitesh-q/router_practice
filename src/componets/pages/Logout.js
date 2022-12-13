
import { useLocation } from "react-router-dom"
const Logout = () => {
  let location=useLocation()
    return (
      <>
      <h1> Logout file is running</h1>
      <h1>{location.state.a}has logout</h1>
      </>
    )
  }
  
  export default Logout