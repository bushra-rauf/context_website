export type UserType =  {
   name: string | null,
   password: string | null,
   favouriteCategory: string | null;
   favouriteRecipe: string[]
}

export type UserContextType = {
    user: UserType | null,
    setUser: (user: UserType) => void
}

export type menuItemsType = {
    name: string;
    path: string;
}