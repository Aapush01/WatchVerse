import {SearchBar} from "./SearchBar"

export const  AppBar = () => {
    return <div className="flex justify-between pt-1 p-3">
       <div className="text-3xl font-black text-gray-900 dark:text-white inline-flex items-center ">WatchVerse</div>
       <div><SearchBar/></div>
       <div className="text-md inline-flex items-center cursor-pointer">Sign in</div>
    </div>
}