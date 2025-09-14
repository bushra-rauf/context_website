'use client';

import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'next/navigation';
import { getMealById } from '@/components/FetchLib/fetch';
import { MealDetail } from '@/components/FetchLib/types';
import { useUserContext } from '@/Utils/context';
import { UserContextType } from '@/Utils/types';

export default function ItemPage() {
  const { id } = useParams<{ id: string }>();
  const [meal, setMeal] = useState<MealDetail | null>(null);
  const { user, setUser } = useUserContext() as UserContextType ;

  useEffect(() => {
    const fetch = async() => {
      const data = await getMealById(id)
      setMeal(data)
      setMeal(null)
    }
   fetch()
  }, [id]);

  const alreadySaved = useMemo(() => 
    !!user && user.favouriteRecipe.includes(String(id)),
    [user, id]
  );

  const saveItem = () => {
    if (!user || !meal) return;
    if (user.favouriteRecipe.includes(meal.idMeal)) return;
    setUser({ ...user, favouriteRecipe: [...user.favouriteRecipe, meal.idMeal] });
  };

  if (!meal) {
    return <p className="text-sm text-gray-600">Loading item...</p>;
  }

  return (
    <div className="grid gap-6 md:grid-cols-3">
      <div className="md:col-span-1">
        <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full rounded-lg border bg-white shadow-sm" />
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-700">{meal.strCategory}</span>
          <span className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-700">{meal.strArea}</span>
        </div>
        {user ? (
          <button
            onClick={saveItem}
            disabled={alreadySaved}
            className={`mt-4 w-full rounded px-3 py-2 text-sm font-medium text-white ${
              alreadySaved ? 'bg-gray-400 cursor-not-allowed' : 'bg-emerald-600 hover:bg-emerald-700'
            }`}
          >
            {alreadySaved ? 'Saved' : 'Save to favorites'}
          </button>
        ) : (
          <p className="mt-4 text-sm text-gray-600">Log in to save this recipe.</p>
        )}
      </div>
      <div className="md:col-span-2">
        <h1 className="mb-2 text-2xl font-semibold text-gray-900">{meal.strMeal}</h1>
        <h2 className="mb-2 text-lg font-semibold text-gray-900">Instructions</h2>
        <p className="whitespace-pre-wrap text-sm leading-6 text-gray-800">{meal.strInstructions}</p>
      </div>
    </div>
  );
}
