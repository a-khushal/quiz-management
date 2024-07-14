"use client"
import { signIn, signOut, useSession } from "next-auth/react"

export const Appbar = () => {
    const session = useSession();
    return (
        <div className="bg-slate-300 h-full w-full px-10 text-black">
            <div className="flex justify-between items-center h-full w-full px-4">
                <div className="cursor-pointer">
                    logo
                </div>
                <div className="py-3 px-6 cursor-pointer bg-zinc-900 rounded-lg text-white" onClick={() => {
                    signIn();
                }}>
                    Signin
                </div>
            </div>
            {/* { JSON.stringify(session) } */}
        </div>
    );
}
