import { auth, signIn, signOut } from "@/auth";
import DemoComp from "@/components/demoComp";
import { trpc } from "@/Server/client";
import Image from "next/image";

export default async function Home() {
    const session = await auth()
    console.log(session?.user?.email)
    

  return (
    <div>
      <h1>Syntax lab</h1>
      <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <button type="submit" className="bg-green-500">Signin with Google</button>
    </form>
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <button type="submit">Sign Out</button>
    </form>
  <DemoComp/>
    </div>
  );
}
