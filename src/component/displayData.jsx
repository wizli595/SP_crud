import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../features/user/postSlice";
import { useEffect } from "react";
import Article from "./article";

const DisplayData = () => {
  const { loading, post, err } = useSelector((state) => state.post);
  const dispatch=useDispatch()
  useEffect(()=>{
    if(!loading)return;
    dispatch(fetchPost())
  })
  // console.log(post);
  
  return <>
  {err && <div>{err} </div>}
  {post && post.map(el=><Article key={el.id} el={el} />)}
  </>;
};

export default DisplayData;
