// categories.php
export interface MealCategory {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

//  for categories.php
export interface CategoriesResponse {
  categories: MealCategory[];
}

// Recipe type from filter.php
export interface Recipe {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

// Response type for filter.php
export interface RecipeResponse {
  meals: Recipe[];
}

// Meal type from random.php
export interface MealDetail extends Recipe {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags?: string;
  strYoutube?: string;
  [key: string]: any; // For additional dynamic keys like ingredients
}

// for random.php
export interface RandomMealResponse {
  meals: MealDetail[];
}


