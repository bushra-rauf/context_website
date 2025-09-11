import { menuItems } from "@/Data/data"
const DesktopMenu = () => {
    return (
      <div className='flex items-center gap-5 justify-end text-amber-200  text-2xl pr-5'>
        {menuItems.map((item, index) => <p key={index} className="relative cursor-pointer transition-all duration-300 ease-in-out hover:text-green-400
                               after:content-[''] after:absolute after:left-0 after:bottom-[-4px]
                               after:h-[2px] after:w-0 after:bg-emerald-400
                               hover:after:w-full after:transition-all after:duration-400">{item.name}</p>)}
      </div>
    
    )
}

export default DesktopMenu