'use client'
import { createContext, useContext, useState } from "react"
import { MenuContextType } from "./menutypes"

const MenuContext = createContext<MenuContextType | null>(null)

export const MenuContextProvider = ({children}:{children: React.ReactNode}) => {
    const [ isAuthPage, setIsAuthPage] = useState <boolean>(false)

   

    return(
        <MenuContext.Provider value = {{ isAuthPage, setIsAuthPage}}>
           {children}
        </MenuContext.Provider>
    )
}

export const useMenuContext = () => {
    return(
        useContext(MenuContext)
    )
}