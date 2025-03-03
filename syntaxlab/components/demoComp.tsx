"use client";

import { trpc } from "@/Server/client";


const DemoComp = () => {

    const {data}  = trpc.pokemon.useQuery();
    console.log(data)
  return (
    <div>demoComp</div>
  )
}

export default DemoComp