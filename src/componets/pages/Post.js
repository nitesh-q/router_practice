import { useParams ,useSearchParams} from "react-router-dom"

const Post = () => {
  let {category,id}=useParams()
  const [searchParams ,setsearchParams]=useSearchParams()
  console.log(searchParams)
  console.log(searchParams.get('mobile'))
  
    return (
      <h1>this is post for dynamic.... {category}...{id}</h1>
    )
  }
  
  export default Post