import { Appbar } from "@/components/Appbar";
import { useSession } from "next-auth/react";

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <div className="w-full h-16">
        <Appbar/>
      </div>
    </div>
  );
}
