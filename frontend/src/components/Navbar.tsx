
export default function Navbar() {
    return (
        <div className="flex flex-col sm:mt-0 sm:mr-0 shadow-lg sm:flex-row p-6 sm:py-3 sm:px-6 rounded-b-[3.5rem] bg-stone-700">
            <div className="px-2 py-1 sm:px-4 sm:py-2 font-semibold text-stone-100 text-4xl sm:text-4xl">Carrer Hive</div>
            <div className="flex sm:flex-row ml-auto">
                <a 
                    href="http://localhost:5173" 
                    className="m-1 sm:m-3 px-2 py-1 sm:px-4 sm:py-2 rounded-full border border-stone-100 text-stone-100 text-xs sm:text-sm"
                >HOME</a>
                
                <a 
                    className="m-1 sm:m-3 px-2 py-1 sm:px-4 sm:py-2 rounded-full bg-stone-100 text-stone-900 text-xs sm:text-sm"
                    href="http://localhost:5173/create"
                >ADD JOB</a>
            </div>
        </div>
    )
}
