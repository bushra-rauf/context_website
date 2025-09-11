import Link from "next/link";
import { useState } from "react";
import { DotsThreeCircleVertical } from "@phosphor-icons/react";
import { menuItems } from "@/Data/data";

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className="relative">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
                <DotsThreeCircleVertical size={32} />
            </button>
            {isOpen && (
                <div className="absolute bg-amber-200 text-black py-8 px-6 text-2xl font-bold right-0 cursor-pointer rounded-md shadow-lg mt-20 ">
                <div className="flex flex-col gap-4 hover:text-emerald-600 transition">
                    {menuItems.map((item) => (
                        <Link href={item.path} key={item.path}>
                            {item.name}
                        </Link>
                    ))}
                </div>
                </div>
            )}
        </div>
    );
};

export default MobileMenu;
