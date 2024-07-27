import Request from './Request'
import { useState, useEffect } from 'react';
export default function Loading() {

    const [showRequest, setShowRequest] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
        setShowRequest(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, [])

    return (
        <div className="flex flex-col lg:ml-[80%] lg:w-[150%] sm:ml-[25%] sm:w-[150%] sm:flex-wrap ">
            {showRequest ? <Request /> : null}
            <div className='sm:grid sm:grid-cols-2'>
                <div className="flex items-center justify-center my-6 sm:col-span-1">
                    <div className="animate-pulse flex space-x-4 border w-[100%] mx-4 p-4 border-stone-600 rounded-lg">
                        <div className="rounded-full bg-stone-300 h-10 w-10"></div>
                        <div className="flex-1 space-y-6 py-1">
                        <div className="h-2 bg-stone-700 rounded"></div>
                        <div className="space-y-3">
                            <div className="grid grid-cols-3 gap-4">
                            <div className="h-2 bg-stone-700 rounded col-span-2"></div>
                            <div className="h-2 bg-stone-700 rounded col-span-1"></div>
                            </div>
                            <div className="h-2 bg-stone-700 rounded"></div>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center my-6 sm:col-span-1">
                    <div className="animate-pulse flex space-x-4 border w-[100%] mx-4 p-4 border-stone-600 rounded-lg">
                        <div className="rounded-full bg-stone-300 h-10 w-10"></div>
                        <div className="flex-1 space-y-6 py-1">
                        <div className="h-2 bg-stone-700 rounded"></div>
                        <div className="space-y-3">
                            <div className="grid grid-cols-3 gap-4">
                            <div className="h-2 bg-stone-700 rounded col-span-2"></div>
                            <div className="h-2 bg-stone-700 rounded col-span-1"></div>
                            </div>
                            <div className="h-2 bg-stone-700 rounded"></div>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center my-6 sm:col-span-2">
                    <div className="animate-pulse flex space-x-4 border sm:max-w-[350px] w-[100%] mx-4 p-4 border-stone-600 rounded-lg">
                        <div className="rounded-full bg-stone-300 h-10 w-10"></div>
                        <div className="flex-1 space-y-6 py-1">
                        <div className="h-2 bg-stone-700 rounded"></div>
                        <div className="space-y-3">
                            <div className="grid grid-cols-3 gap-4">
                            <div className="h-2 bg-stone-700 rounded col-span-2"></div>
                            <div className="h-2 bg-stone-700 rounded col-span-1"></div>
                            </div>
                            <div className="h-2 bg-stone-700 rounded"></div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}