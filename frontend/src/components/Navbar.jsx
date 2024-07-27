import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="flex flex-col items-center py-3 border-b-2 border-stone-700 rounded-b-full shadow-xl sm:mt-0 sm:mr-0 sm:flex-row sm:py-3 sm:px-6">
            <div className="font-bold font-myfont1 text-stone-200 text-2xl sm:px-4 sm:py-2 sm:text-4xl">Career Cascade</div>
            <div className="flex sm:flex-row sm:ml-auto">
                <NavLink 
                    to="/" 
                    className="m-1 px-2 py-1 rounded-full font-bold border border-stone-500 text-stone-500 
                    hover:font-bold hover:bg-slate-100 hover:text-stone-900
                    focus:text-stone-900 focus:bg-slate-100 text-xs sm:py-2 sm:px-4 sm:m-3 sm:text-sm"
                >HOME</NavLink>
                
                <NavLink
                    className="m-1 px-2 py-1 rounded-full font-bold border border-stone-500 text-stone-500 
                    hover:font-bold hover:bg-slate-100 hover:text-stone-900
                    focus:text-stone-900 focus:bg-slate-100 text-xs sm:py-2 sm:px-4 sm:m-3 sm:text-sm"
                    to="/create"
                >ADD JOB</NavLink>
            </div>
        </div>
    )
}
