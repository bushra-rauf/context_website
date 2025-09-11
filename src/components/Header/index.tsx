// import Image from "next/image"
// import DesktopMenu from "../DesktopMenu"
// const Header = () => {
//     return(
//       <>
//         <div className="p-5 bg-gradient-to-r from-green-900 to-amber-700 text-white shadow-md">
//              <div className="flex gap-3 justify-between">
//           <div className="flex center gap-3">
//           <Image src={'/logo2.png'} alt="logo" width={70} height={70}/>
//           <h2 className="flex text-3xl text-amber-300 font-semibold items-center">MealDB</h2>
//           </div>
//            <DesktopMenu/>
//           </div>
//         </div>
          
//         </>
//     )
// }

// export default Header
import DesktopMenu from "../DesktopMenu"
import Logo from "../Logo"
import MobileMenu from "../MobileMenu"

const Header = () => {
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
              <div className="hidden md:flex">
                 <DesktopMenu/>
              </div>
                <div className="flex md:hidden">
                  <MobileMenu/>
                </div>
              </div>
            </div>
        </header>
    )
}

export default Header
