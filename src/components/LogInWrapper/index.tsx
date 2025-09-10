'use client'
import { UserContextType } from "@/Utils/types"
import LogIn from "../Login"
import { useUserContext } from "@/Utils/context"

const LogInWrapper = ({children}: {children: React.ReactNode}) => {
    const {user} = useUserContext() as UserContextType
   return(
    <>      
    {!user ? <LogIn/> : children}
    </>

   )
}

export default LogInWrapper
