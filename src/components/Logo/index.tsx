import Image from "next/image"
const Logo = () => {
    return(
        <div className="flex items-center gap-3">
            <Image src="/logo2.png" alt="logo" width={70} height={70} />
            <h2 className="text-3xl text-amber-300 font-semibold">MealDB</h2>
        </div>
    )
}

export default Logo