'use client'
import Image from "next/image"
import { useEffect, useState } from "react"
import {ForkKnife} from "@phosphor-icons/react";
import { findUserByName } from "@/Data/data";
import { useUserContext } from "@/Utils/context";
import { UserContextType } from "@/Utils/types";
import Logo from "../Logo";
import Header from "../Header";
const LogIn = () => {
    const [userName, setUserName] = useState<string | null> (null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    const [password, setPassword] = useState<string> ('')
    const {user, setUser} = useUserContext() as UserContextType  

  //    useEffect(() => {
  //   const storedUser = localStorage.getItem("user");
  //   if (storedUser) {
  //     setUser(JSON.parse(storedUser));
  //   }
  // }, [setUser]);

    const handleClick = (e: {preventDefault: () => void}) => {
    e.preventDefault();
     if (!userName || !password) {
    setErrorMessage("Please fill in both fields.");
    return;
  }
        const userLogedIn = findUserByName(userName, password);
        if (!userLogedIn){
          setErrorMessage('User not found. Try lina, mina, hina')
        }else {
          setErrorMessage(null)
          setUser(userLogedIn)
          localStorage.setItem("user", JSON.stringify(userLogedIn));
        }  
      }      
        console.log('user is:' + user ?.name)

    const handleClickName = (e: React.ChangeEvent<HTMLInputElement>) =>{
       setUserName(e.target.value)
     
    }
      
    const handleCLickPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value)
    }

    return(
       <div className="relative w-full h-screen">
      {/* Header with Logo only */}
      <Header showMenu={false} />
      
        
        <div className="relative  p-4 w-full h-screen flex items-center justify-center">  
            <Image src= {'/loginbgb.jpg'} alt="login-background" fill className="object-cover -z-10"/>
       
            <form onSubmit={handleClick}className="bg-white border-2 rounded-lg sm:p-10 p-8 w-full max-w-md shadow-lg">
              <div className="flex flex-col">
                <div className="flex gap-3 items-center mb-4 sm:mb-6">
                  <ForkKnife size={42}/>
                <label className="mb-7 text-3xl block sm:text-4xl font-extrabold text-gray-700">Log in</label>
                </div>
                <input value={userName ?? ''} placeholder="Enter Name" onChange= {handleClickName} className="text-gray-400 mb-4 sm:text-2xl w-full rounded border px-3 py-1 shadow-inner "> 
                {/* focus:outline-none focus:ring-2 focus:ring-green-500 */}
                </input>
                <input value={password ?? ''} placeholder="example: 1234" onChange={handleCLickPassword} className='text-gray-400 mb-4 sm:text-2xl w-full rounded border px-3 py-1 shadow-2xl'>
                </input>
              </div>
              <button  type='submit' className="bg-green-500 text-white rounded p-2 w-full hover:bg-green-400 transition-shadow">
                Log in
              </button>
              {errorMessage && (
                  <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
              )}
               <p className='mt-4 text-2xl text-gray-400'>Existing users: lina, mina, hina</p>
            </form>
        </div>
        </div>
    
    )

  }
export default LogIn