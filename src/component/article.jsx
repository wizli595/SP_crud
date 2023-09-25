/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { useState } from "react";
import { delArt, updateArt } from "../features/user/postSlice";

const Article = ({ el }) => {

    const [val, setVal] = useState({
        id: 0,
        title: "",
        body: ""

    })
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setVal(prv => (
            {
                ...prv,
                id: el.id,
                [e.target.name]: e.target.value
            }
        ))
    }
    const handleSub = (e) => {
        e.preventDefault();
        dispatch(updateArt(val))
    }
    const handleDel = (id) => {
        dispatch(delArt(id))
    }
    return <div >

        <div className="bg-white border border-gray-200 rounded-lg shadow p-5">
            <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{el.title}</h1>
            <p className="mb-3 font-normal text-black-700 ">{el.body}</p>
            <form onSubmit={handleSub} className="text-center">
                <div className="border border-gray-300 rounded-lg
rounded-lg  p-2">
                    <input type="text"
                        name="title"
                        placeholder={el.title}
                        value={val.title}
                        onChange={handleChange}
                        className="border border-gray-300 text-gray-900 text-sm rounded-lg indent-2"
                    />
                    <input
                        type="text"
                        name="body"
                        placeholder={el.body}
                        value={val.body}
                        onChange={handleChange}
                        className="border border-gray-300 text-gray-900 text-sm rounded-lg indent-2"
                    />
                </div>
                <div>
                    <button className="text-white bg-green-600 focus:ring-4 rounded-full text-sm px-5 py-2.5 text-center m-2">update</button>
                    <button
                        onClick={(e) => {
                            e.preventDefault()
                            handleDel(el.id)
                        }}
                        className="text-white bg-red-600 focus:ring-4 rounded-full text-sm px-5 py-2.5 text-center m-2">delete</button>
                </div>
            </form>

        </div>

    </div>;
}

export default Article;