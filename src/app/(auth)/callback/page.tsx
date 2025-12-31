import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function DashboardPage(){
  const supabase = createServerComponentClient ({ cookies })
  const {
    data:{ session },
  } = await supabase.auth.getSession()
  if( !session) {
    //Redirect on the server
  
    return <p>You must sign in</p> // or redirect('/signin)
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Welcome {session.user.email}</p>
    </div>
  )
}