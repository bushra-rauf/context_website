'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useUserContext } from '@/Utils/context';
import { getMealById } from '@/components/FetchLib/fetch';
import { MealDetail } from '@/components/FetchLib/types';
import { UserContextType } from '@/Utils/types';

export default function ProfilePage() {
  const { user } = useUserContext() as UserContextType
  const [meals, setMeals] = useState<MealDetail[]>([]);

  useEffect(() => {
    const load = async () => {
      if (!user) return;
      const details = await Promise.all(
        user.favouriteRecipe.map(id => getMealById(id))
      );
      setMeals(details.filter(Boolean) as MealDetail[]);
    };
    load();
  }, [user]);

  if (!user) {
    return (
      <div className="rounded-lg border bg-white p-4">
        <p className="text-sm text-gray-700">
          You need to be logged in to view your profile. Go to the Home page to log in.
        </p>
        <Link href="/" className="mt-3 inline-block text-sm font-medium text-emerald-700 hover:underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="rounded-lg border bg-white p-4 shadow-sm">
        <h1 className="text-xl font-semibold text-gray-900">Profile</h1>
        <div className="mt-3 grid gap-2 text-sm text-gray-700 sm:grid-cols-2">
          <p><span className="font-medium">Name:</span> {user.name}</p>
          <p><span className="font-medium">Favorite category:</span> {user.favouriteCategory ?? 'None'}</p>
          <p><span className="font-medium">Saved recipes:</span> {user.favouriteRecipe.length}</p>
        </div>
      </div>

      <section>
        <h2 className="mb-3 text-lg font-semibold text-gray-900">Your saved recipes</h2>
        {meals.length === 0 ? (
          <p className="text-sm text-gray-600">You haven’t saved any recipes yet.</p>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {meals.map(m => (
              <Link
                key={m.idMeal}
                href={`/item/${m.idMeal}`}
                className="group overflow-hidden rounded-lg border bg-white shadow-sm"
              >
                <img src={m.strMealThumb} alt={m.strMeal} className="h-36 w-full object-cover transition-transform group-hover:scale-105" />
                <div className="p-2">
                  <p className="line-clamp-2 text-sm font-medium text-gray-800">{m.strMeal}</p>
                  <p className="text-xs text-gray-500">{m.strCategory} • {m.strArea}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
