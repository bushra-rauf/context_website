'use client'
import { useMenuContext } from "@/Utils/contextmenu"
import DesktopMenu from "../DesktopMenu"
import Logo from "../Logo"
import MobileMenu from "../MobileMenu"
import { MenuContextType } from "@/Utils/menutypes"
// interface HeaderProps {
//   showMenu?: boolean
// }

const Header = () => {
  const {isAuthPage} = useMenuContext() as  MenuContextType
    return (
       <header className="relative bg-gradient-to-r from-green-900 to-amber-700 text-white shadow-md pb-10 after:content-[''] after:absolute after:bottom-[-20px] after:left-0 after:w-full after:h-10 after:bg-green-400 after:blur-xl after:opacity-30 after:rounded-full z-10">
          
          {/* Curve Effect */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
                <svg
                    className="relative block w-[calc(100%+1.3px)] h-[60px]"
                    viewBox="0 0 500 150"
                    preserveAspectRatio="none">
                    <path
                        d="M-0.27,44.40 C149.99,150.00 349.87,-49.98 500.84,49.99 L500.00,0.00 L0.00,0.00 Z"
                        style={{ stroke: "none", fill: "#fff" }}> 
                    </path>
                </svg>
            </div>

            <div className="relative z-10 p-5">
              <div className="flex items-center justify-between">
                 <Logo/>
                   {!isAuthPage && (
                  <>
              <div className="hidden md:flex">
                 <DesktopMenu/>
              </div>
                <div className="flex md:hidden">
                  <MobileMenu/>
                </div>
                
                </>
              
                   )}
              
            </div>
            </div>
        </header>
    )
}

export default Header
