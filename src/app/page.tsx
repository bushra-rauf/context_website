'use client'
import { getCategories, getMealByCategory, getRandom } from "@/components/FetchLib/fetch";
import { MealCategory, Recipe } from "@/components/FetchLib/types";
import Header from "@/components/Header";
// import LogIn from "@/components/Login";
import { useUserContext } from "@/Utils/context";
import { UserContextType } from "@/Utils/types";
import { promises } from "dns";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home({children}: {children: React.ReactNode}) {
  const {user} = useUserContext() as UserContextType
    const [categories, setCategories] = useState<MealCategory[]>([]);
      const [randomMeal, setRandomMeal] = useState<Recipe | null>(null)
        const [favMeals, setFavMeals] = useState<Recipe[]>([]);

    // useEffect (()=> {
      //  user?.favouriteCategory? getCategories() : getRandom()
      // },[user?.favouriteCategory])
  
       useEffect(() => {
          const fetch = async () => {
            const data = await getCategories()
            setCategories(data)
          }
          fetch();
      }, [])

       useEffect(() => {
          const fetch = async () => {
            const data = await getRandom()
            setRandomMeal(data)
          }
          fetch();
      }, [])

      
    // useEffect (()=> {
    //  user?.favouriteCategory? getCategories() : getRandom()
    // },[user?.favouriteCategory])

    useEffect(() => {
    if (user?.favouriteCategory) {
      // fetch meals for favourite category
      getMealByCategory(user.favouriteCategory).then(setFavMeals);
    } else {
      // fetch a random meal if no favourite
      getRandom().then(setRandomMeal);
    }
  }, [user?.favouriteCategory]);

  // const user = (false)
  return (
    <>    
      <div className="flex flex-col p-10 font-extrabold text-4xl">
      {user && <><h2>Hi {user.name},</h2><p>Welcome to our website</p></> }
      {user && <p>Your Favouite Category: {user.favouriteCategory }  </p>}
      </div>
       {user?.favouriteCategory && (
        <section>
          <h2 className="mb-3 text-lg font-semibold text-gray-900">
            {user.favouriteCategory} picks for you
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {favMeals.map(m => (
              <Link
                key={m.idMeal}
                href={`/item/${m.idMeal}`}
                className="group overflow-hidden rounded-lg border bg-white shadow-sm"
              >
                <img src={m.strMealThumb} alt={m.strMeal} className="h-36 w-full object-cover transition-transform group-hover:scale-105" />
                <div className="p-2">
                  <p className="line-clamp-2 text-sm font-medium text-gray-800">{m.strMeal}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

       {!user?.favouriteCategory && randomMeal && (
        <section>
          <h2 className="mb-3 text-lg font-semibold text-gray-900">Random Pick</h2>
          <Link
            href={`/item/${randomMeal.idMeal}`}
            className="group overflow-hidden rounded-lg border bg-white shadow-sm"
          >
            <img
              src={randomMeal.strMealThumb}
              alt={randomMeal.strMeal}
              className="h-36 w-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="p-2">
              <p className="line-clamp-2 text-sm font-medium text-gray-800">{randomMeal.strMeal}</p>
            </div>
          </Link>
        </section>
      )}

      </>

  );
}


