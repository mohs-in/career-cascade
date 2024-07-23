import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';


export default function AllPosts() {
    const [query, setQuery] = useState("");
    const [post, setPost] = useState(null);
    const navigate = useNavigate();

    const handleEdit = (id : number) => {
      navigate("/edit",{state:{id}});
    }

    useEffect(() => {
        const fetchPosts = async () => {
          const response = await axios.get(`http://localhost:8080/jobPosts/keyword/${query}`);    
          setPost(response.data);
        };
        const fetchInitialPosts = async () => {
            const response = await axios.get(`http://localhost:8080/jobPosts`);
            setPost(response.data);
        }
        fetchInitialPosts();
        if (query.length === 0) fetchInitialPosts();
        if (query.length > 2) fetchPosts();
    },[query]);

    const handleDelete = (id : number) => {
        async function deletePost() {
            await axios.delete(`http://localhost:8080/jobPost/${id}`);
        }
        deletePost();
        window.location.reload();
    }

    return (
        <div className="h-full pb-8">
            <div className="flex flex-col items-center block">
                <input 
                    className="w-[80%] sm:w-[60%] h-12 mt-8 mb-2 px-6 py-2 text-stone-900 border rounded-full"
                    type="text"
                    placeholder="Enter keyword..."
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>
            <div className="m-6 sm:grid lg:grid-cols-3 sm:grid-cols-2">
                { post &&
                    post.map((p) => {
                        return (
                            <div key={p.id} className=" border border-stone-100 m-4 p-4 rounded-lg shadow-lg bg-stone-200">
                                <h1 className="text-2xl text-stone-900 font-bold">{p.postProfile}</h1>
                                <p className="mt-2"> <span className="font-semibold text-stone-800 ">Description:</span>  {p.postDesc}</p>
                                <p className="mt-2"> <span className="font-semibold text-stone-800">Experience:</span> {p.reqExperience} years</p>
                                <div className="flex mt-2">
                                    <span className="font-semibold block text-stone-800">Skills : </span>
                                    <div>   
                                    { p.postTechStack.map((s, i) => {
                                        return (
                                            <div key={i} className="px-1 text-black">
                                            {s} 
                                            {` `}
                                            </div>
                                        );
                                    })}
                                    </div>
                                    
                                </div>
                                <div className="mt-2 flex flex-row">
                                    <button className="ml-auto border border-stone-900 px-2 py-1 mr-2 bg-red-400 rounded-lg text-white" onClick={() => handleDelete(p.postId)}>Delete</button>
                                    <button className="border border-stone-900 px-2 py-1 mr-2 bg-grey-400 rounded-lg text-grey-100" onClick={() => handleEdit(p.postId)}>Edit</button>
                                </div>
                                
                            </div>
                        )
                    })

                }

            </div>
        </div>
    )
}