'use client'
import Header from "@/components/Header";
// import LogIn from "@/components/Login";
import { useUserContext } from "@/Utils/context";
import { UserContextType } from "@/Utils/types";

export default function Home({children}: {children: React.ReactNode}) {
  const {user} = useUserContext() as UserContextType
  // const user = (false)
  return (
    <>    <Header/>
      <div className="flex flex-col p-10 font-extrabold text-4xl">
      {user && <><h2>Hi {user.name},</h2><p>Welcome to our website</p></> }
      {user && <p>Your Favouite Category: {user.favouriteCategory }  </p>}
      </div>
      </>

  );
}
