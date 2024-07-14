import { Appbar } from "@/components/Appbar";
import { getServerSession } from "next-auth";
import { authOptions } from "./lib/auth";
import Dashboard from "./dashboard/page";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if(session?.user) {
    return <>
      <Dashboard/>
    </>
  }

  return (
    <div className="h-screen w-screen">
      <div className="w-full h-16">
        <Appbar/>
      </div>
      <br/>
      { JSON.stringify(session) }
    </div>
  );
}
