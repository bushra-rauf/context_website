'use client'
import { menuItems } from "@/Data/data"
import Link from "next/link"
import { useUserContext } from "@/Utils/context"
import { UserContextType } from "@/Utils/types"
// import { useRouter } from "next/navigation"

const DesktopMenu = () => {
  const {user, setUser} = useUserContext() as UserContextType 
    // const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    // router.push("/login"); // Redirect to login
  };

    return (
      <div className='flex items-center gap-5 justify-end text-amber-200  text-2xl pr-5'>
        {menuItems.map((item) => (<Link key={item.path} href={item.path}  className="relative cursor-pointer transition-all duration-300 ease-in-out hover:text-green-400
                               after:content-[''] after:absolute after:left-0 after:bottom-[-4px]
                               after:h-[2px] after:w-0 after:bg-emerald-400
                               hover:after:w-full after:transition-all after:duration-400">{item.name}</Link>))}
      <button
        onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
         Log out
      </button>
      </div>
    
    )
}

export default DesktopMenu