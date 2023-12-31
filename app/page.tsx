import { frontend } from "@/api/apis";
import { useState } from 'react';


import  Signin  from "@/components/auth/Signin";
import SignUp from "@/components/auth/Signup";
import Forgotpass from "@/components/auth/Forgotpassword";
import Cards from "@/components/dashboard/Cards";
import Dashboard from '@/components/dashboard/Dashboard';
import FindProjectPage from "@/components/Find_project/FindProjectPage";

export default async function Home() {

    const res = await frontend();
    console.log(res?.data)
   
  return (
    <main>
       {/* Created Login,Signup, and forgot password but havn't done the routing between pages */}
       {/* <Signin /> */}
       {/* <SignUp /> */}
       {/* <Forgotpass /> */}
       {/* <Dashboard /> */}
       {/* <Cards /> */}

      <FindProjectPage />

       <p>{res?.data.message}</p>
    </main>
  )
}
