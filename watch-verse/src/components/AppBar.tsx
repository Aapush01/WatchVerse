import {SearchBar} from "./SearchBar"
import {SignInButton} from "./SignInButton"

export const  AppBar = () => {
    return <div className="flex justify-between pt-1 p-3">
       <div className="text-3xl font-black text-gray-900 dark:text-white inline-flex items-center ">WatchVerse</div>
       <div><SearchBar/></div>
       <div>
         <SignInButton/>
       </div>
    </div>
}