import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { delArt, updateArt} from "../features/user/postSlice";

const Article = ({el}) => {
    
    const [val,setVal]=useState({
        id:0,
            title:"",
            body:""
        
    })
    const dispatch=useDispatch()
    const { loading, post:data, err } = useSelector((state) => state.post);
    const handleChange=(e)=>{
        setVal(prv=>(
            {
                ...prv,
                id:el.id,
                [e.target.name]:e.target.value
            }
        ))
    }
    const handleSub=(e)=>{
        e.preventDefault();
        dispatch(updateArt(val))
    }
    const handleDel=(id)=>{
        dispatch(delArt(id))
    }
    return  <div >

        <div  style={{border:"1px solid",margin:"2px"}}>
            <p>{el.title}</p>
            <p>{el.body}</p>
            <form onSubmit={handleSub}>
                <input type="text" 
                name="title" 
                placeholder={el.title}
                value={val.title}
                onChange={handleChange}
                />
                <input 
                type="text" 
                name="body" 
                placeholder={el.body} 
                value={val.body}
                onChange={handleChange}
                />
            <button>update</button>
            </form>
            <button onClick={(e)=>{
                    e.preventDefault()
                handleDel(el.id)
                }}>delete</button>
        </div>
        
        </div> ;
}
 
export default Article;