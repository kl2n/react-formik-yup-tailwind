"use client";
import Signup from '@/components/Signup';
import Welcome from "@/components/Welcome";

export default function LoginPage() {
    return (
       <main className="p-5 min-h-screen place-items-center grid bg-gray-100">
           <section className="max-w-screen-lg m-auto
                    grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5
                    p-4 sm:p-6 bg-white rounded-2xl border border-gray-300">
               <Signup />
               <Welcome />
           </section>

       </main>
    )
}