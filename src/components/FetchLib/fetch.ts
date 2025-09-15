import { CategoriesResponse, MealDetail, MealCategory, Recipe, RecipeResponse } from "./types"


    const API_ENDPOINT = 'https://www.themealdb.com/api/json/v1/1/'

// export  const getCategories = async() =>{
//         try{
//             const response = await fetch(`${API_ENDPOINT}categories.php`)
//             const data = await response.json()
//             return data.categories ?? []; 
//             console.log(data)

//         }catch(error){
//             console.log('something went wrong')
//         }
//     }
export const getCategories = async (): Promise<MealCategory[]> => {
  try {
    const response = await fetch(`${API_ENDPOINT}categories.php`)
    const data: CategoriesResponse = await response.json()
    return data.categories ?? []
  } catch (error) {
    console.log("something went wrong", error)
    return []
  }
}

export const getMealByCategory = async(category: string): Promise<Recipe[]> => {
    try {
       const response = await fetch(`${API_ENDPOINT}filter.php?c=${category}`)
       const mealData: RecipeResponse = await response.json()
           return mealData.meals ?? [];
    }catch(error){
    console.log('error')
    return []
    }
}    

export const getRandom = async(): Promise<MealDetail | null> => {
    try{
        const response = await fetch(`${API_ENDPOINT}random.php`)
        const randomData =await response.json()
        return randomData.meals?.[0] ?? null;

    }catch(error){
        console.log(error)
        return null
    }
}

export async function getMealById(id: string): Promise<MealDetail | null> {
  const res = await fetch(`${API_ENDPOINT}/lookup.php?i=${id}`);
  const data = await res.json();
  return data.meals?.[0] ?? null;
}

    