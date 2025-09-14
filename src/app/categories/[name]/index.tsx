'use Client'
import { useState, useEffect } from "react"
import { getMealByCategory} from "@/components/FetchLib/fetch"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { Recipe } from "@/components/FetchLib/types"
import { useUserContext } from "@/Utils/context"
import { UserContextType } from "@/Utils/types"


const MealsByCategoryPage = () => {
    const {user} = useUserContext()  as UserContextType
    const params = useParams()
    const router = useRouter()
    const category = params?.name as string
    const [meals, setMeals] = useState <Recipe[]>([])
    
    useEffect (()=> {
       if (!user){
        router.push('/login')
       }
    }, [user, router]) // it only runs when user is change

    useEffect (()=> {
        const fetch = async() => {
            const data = await getMealByCategory(category)
            setMeals(data)
          }
        fetch()
    },[category])

    if (!user) {
      return
    }

    return(
       <div>
        <h1 className="mb-4 text-2xl font-semibold text-gray-900">{category}</h1>
        {meals.length === 0 ? (
        <p className="text-sm text-gray-600">No items found.</p>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
           
          {user && meals.map(m => (
            <Link
              key={m.idMeal}
              href={`/item/${m.idMeal}`}
              className="group overflow-hidden rounded-lg border bg-white shadow-sm">
              <img src={m.strMealThumb} alt={m.strMeal} className="h-36 w-full object-cover transition-transform group-hover:scale-105" />
              <div className="p-2">
                <p className="line-clamp-2 text-sm font-medium text-gray-800">{m.strMeal}</p>
              </div>
            </Link>
          ))}
        
        </div>
      )}
       </div>
    )
}
export default MealsByCategoryPage