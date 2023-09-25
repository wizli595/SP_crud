import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../features/user/postSlice";

const CreateArt = () => {
    const [info, setInfo] = useState({
        title: "",
        body: ""
    })
    const dispatch = useDispatch()
    const handleChange = (e) => {
        setInfo(prv => (
            {
                ...prv,
                [e.target.name]: e.target.value
            }
        ))
    }

    const hanleSub = (e) => {
        e.preventDefault()
        dispatch(addPost(info))
        setInfo({
            title: "",
            body: ""
        })
    }
    return (<div className="flex items-center justify-center ">
        <form onSubmit={hanleSub} className="text-center my-6">
            <div>
                <label htmlFor="title" className="font-bold text-lg capitalize">title</label>
                <input
                    type="text"
                    name="title"
                    value={info.title}
                    onChange={handleChange}
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                />
            </div>
            <div>
                <label htmlFor="body" className="font-bold text-lg capitalize">body</label>
                <input
                    type="text"
                    name="body"
                    value={info.body}
                    onChange={handleChange}
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
            </div>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mt-2 w-full">create</button>
        </form>
    </div>);
}

export default CreateArt;