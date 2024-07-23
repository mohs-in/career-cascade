import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initial = { postId:"",postProfile: "", reqExperience: '', postTechStack: [], postDesc:"" };

export default function Create() {
    const skillSet:{name:string}[] = [ {name: "Javascript"}, {name: "Java"}, {name: "Python"}, {name: "Django"}, {name: "Rust"} ];
    
    const navigate = useNavigate();
    const [form, setForm] = useState(initial);
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmit = (e:any) => {
        e.preventDefault();
        axios
            .post("http://localhost:8080/jobPost",form)
            .then((resp) => {
                console.log(resp.data);
            })
            .catch((error) => {
                console.log(error);
            });
        navigate('/');
    };
    
    const { postId, postProfile, reqExperience, postDesc } = form;
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleChange = (e) => {
        setForm({...form , postTechStack : [...form.postTechStack, e.target.value]});
    }
    
    return (
        <div className=" m-auto flex flex-col items-center">
            <div className="mt-8 text-2xl sm:text-4xl font-bold text-stone-100 tracking-wider ">Create New Post</div>
            <form onSubmit={handleSubmit} className="flex flex-col mt-4 w-[90%] sm:w-[50%] text-stone-900">
                <input type="text" 
                    className="p-4 w-100% border rounded-lg m-4 "
                    onChange={(e) => setForm({ ...form, postId: e.target.value })}
                    placeholder="Enter your Post ID"
                    value={postId} 
                />
                <input type="text"
                    className="p-4 w-100% border rounded-lg m-4 " 
                    required
                    onChange={(e) => setForm({ ...form, postProfile: e.target.value })}
                    placeholder="Job Profile"
                    value={postProfile}
                />
                <input type="text" 
                    className="p-4 w-100% border rounded-lg m-4 "
                    required
                    onChange={(e) => setForm({ ...form, reqExperience: e.target.value })}
                    placeholder="Years of Experience"
                    value={reqExperience}
                />
                <textarea
                    className="p-4 w-100% border rounded-lg m-4 "
                    required
                    rows={4}
                    onChange={(e) => setForm({ ...form, postDesc: e.target.value })}
                    placeholder="Job Description"
                    value={postDesc}
                />
                <h3 className=" m-4 mb-0 text-stone-100" >Please mention required skills.</h3>
                <ul className=" m-4 flex-auto text-stone-100">
                    {skillSet.map(({ name }, index) => {
                    return (
                        <li key={index} className="m-2 mt-0">
                            <div >
                                <input
                                    type="checkbox"
                                    id={`custom-checkbox-${index}`}
                                    name={name}
                                    value={name}
                                    onChange={handleChange}  
                                />
                                <label className="pl-2" htmlFor={`custom-checkbox-${index}`}>{name}</label>
                            </div>
                        </li>
                    );
                    })}
                </ul>
                <button className="mt-2 mb-6 px-4 py-2 bg-stone-700 w-[40%] sm:w-[30%] self-center rounded-full text-white uppercase text-sm font-semibold" type="submit">Submit</button>
            </form>
        </div>
    )
}