import { UserType } from "@/Utils/types";
 const users: UserType[] = [
      {name:'lina',
      password: '1234',
      favouriteCategory:'SeaFood',
      favouriteRecipe: [] }, 
      {name:'mina', 
      password: '1234',
      favouriteCategory:'',
      favouriteRecipe: []}, 
      {name:'hina', 
      password: '1234',
      favouriteCategory: 'beef',
      favouriteRecipe: []}
    ]

export const findUserByName =(name: string , password: string) => {
      const person = users.find((user) => user.name === name && user.password === password);
      return person ? {...person} : null;   
    }

export const menuItems = [
  {name: 'Home', path: '/'},
  {name: 'Category', path: '/category'},
  {name: 'Profile', path: '/profile'}
]