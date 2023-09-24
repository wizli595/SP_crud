import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../features/user/postSlice";

const CreateArt = () => {
    const [info,setInfo]=useState({
        title:"",
        body:""
    })
    const dispatch=useDispatch()
    const handleChange=(e)=>{
        setInfo(prv=>(
            {
                ...prv,
                [e.target.name]:e.target.value
            }
        ))
    }
    
    const hanleSub=(e)=>{
        e.preventDefault()
        dispatch(addPost(info))
        setInfo({title:"",
        body:""})
    }
    return ( <>
        <form onSubmit={hanleSub}>
            <div>
                title:
                <input type="text" name="title" value={info.title} onChange={handleChange}  />
            </div>
            <div>
                body:
                <input type="text" name="body" value={info.body} onChange={handleChange} />
            </div>
            <button>create</button>
        </form>
    </> );
}
 
export default CreateArt;