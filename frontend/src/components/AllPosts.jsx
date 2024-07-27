import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Loading from './Loading'

export default function AllPosts() {
    const [query, setQuery] = useState("");
    const [post, setPost] = useState(false);
    const navigate = useNavigate();

    const handleEdit = (id) => {
      navigate("/edit",{state:{id}});
    }

    useEffect(() => {
        const fetchInitialPosts = async () => {
            const response = await axios.get(`http://localhost:8080/jobPosts`);
            setPost(response.data);
        };
        const fetchPosts = async () => {
          const response = await axios.get(`http://localhost:8080/jobPosts/keyword/${query}`);    
          setPost(response.data);
        };
        fetchInitialPosts();
        if (query.length === 0) fetchInitialPosts();
        if (query.length > 2) fetchPosts();
    },[query]);

    const handleDelete = (id) => {
        async function deletePost() {
            await axios.delete(`http://localhost:8080/jobPost/${id}`);
        }
        deletePost();
        window.location.reload();
    }

    return (
        <div className="">
            <div className="flex flex-col items-center font-myfont1">
                <input 
                    className="w-[80%] sm:w-[60%] h-12 mt-8 mb-2 px-6 py-2 text-stone-100 border-2 border-stone-700 
                                    rounded-full shadow-lg bg-stone-900 rounded-full focus:outline-1 focus:outline-slate-950
                                    focus:text-slate-100 focus:font-bold"
                    type="text"
                    placeholder="Search"
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>
            <div className="m-6 sm:grid lg:grid-cols-3 sm:grid-cols-2">
                { post ? console.log('posts rendered') : <Loading /> }
                
                { post &&
                    post.map((p) => {
                        return (
                            <div key={p.id} className=" border-b sm:border-r border-stone-600 m-4 p-4 rounded-lg shadow-4xl bg-transparent font-myfont2">
                                <h1 className="text-2xl text-stone-100 font-bold">{p.postProfile}</h1>
                                <p className="mt-2 text-stone-500"> <span className="font-semibold text-stone-300 ">Description:</span>  {p.postDesc}</p>
                                <p className="mt-2 text-stone-500"> <span className="font-semibold text-stone-300">Experience:</span> {p.reqExperience} years</p>
                                <p className="mt-2 font-semibold text-stone-300">Skills :</p>

                                <div className="mt-2">
                                    <div className="flex flex-wrap">   
                                    { p.postTechStack.map((s, i) => {
                                        const id = parseInt(p.postId.toString() + i.toString())
                                        return (
                                            <div key={id} className="px-1 text-stone-500">
                                            {`・`}{s} 
                                            </div>
                                        );
                                    })}
                                    </div>
                                </div>
                                <div className="mt-4 flex flex-row">
                                    <button className="border-b border-t border-stone-200 px-2 py-1 mr-2 bg-transparent rounded-lg text-stone-400 hover:text-rose-400 hover:border-rose-400 font-bold hover:font-normal" onClick={() => handleDelete(p.postId)}>Delete</button>
                                    <button className="border-b border-t border-stone-200 px-2 py-1 mr-2 bg-transparent-400 rounded-lg text-stone-400 hover:text-blue-400 hover:border-blue-400 font-bold hover:font-normal" onClick={() => handleEdit(p.postId)}>Edit</button>
                                </div>   
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}