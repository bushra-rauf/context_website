'use client'
import { getCategories, getRandom } from "@/components/FetchLib/fetch"
import { useUserContext } from "@/Utils/context"
import { UserContextType } from "@/Utils/types"
import { useState, useEffect } from "react"
import { getMealByCategory } from "@/components/FetchLib/fetch"
import Link from "next/link"
import type { MealCategory} from "@/components/FetchLib/types"

const Category = () => {
    
    const {user, setUser} = useUserContext() as UserContextType
    const [categories, setCategories] = useState<MealCategory[]>([])

    const favCatSave = (cat: string) =>{
        if(!user) return;
       setUser({...user, favouriteCategory: cat})
    }

    // useEffect (()=> {
    //  user?.favouriteCategory? getCategories() : getRandom()
    // },[user?.favouriteCategory])

     useEffect(() => {
        const fetcher = async () => {
          const data = await getCategories()
          setCategories(data )
        }
        fetcher();
    }, [])

    return(
      <div>
        <h1 className='font-bold text-2xl text-gray-900'>Categories</h1>
        {user && (
        <p className="font-medium text-sm text-gray-700">
            Favourite: <span className="font-normal">{user.favouriteCategory ?? 'No Category' }</span>
        </p>
        )}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {categories && categories.map(c => (
          <div key={c.idCategory} className="overflow-hidden rounded-lg border bg-white shadow-sm">
            <Link href={`/categories/${(c.strCategory.toLocaleLowerCase())}`} className="block">
              <img src={c.strCategoryThumb} alt={c.strCategory} className="h-36 w-full object-cover" />
            </Link>
            <div className="p-3">
              <p className="text-sm font-medium text-gray-900">{c.strCategory}</p>
              <div className="mt-2 flex items-center gap-2">
                <Link
                  href={`/categories/${(c.strCategory)}`}
                  className="text-xs font-medium text-emerald-700 hover:underline">
                  View items
                </Link>
                {user && (
                  <button
                    onClick={() => favCatSave(c.strCategory)}
                    className="rounded bg-emerald-600 px-2 py-1 text-xs font-medium text-white hover:bg-emerald-700">
                    Set favorite
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
       </div>
       </div>
        )
}

export default Category