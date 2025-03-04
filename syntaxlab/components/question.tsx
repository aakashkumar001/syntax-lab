import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const question = () => {
  return (
    <>
      <div className="max-w-[720px] border-neutral-200 inset-0 isolate divide-neutral-200 divide-y rounded-lg border m-4 p-4">
        <div className="flex relative">
        <Image src="/assets/check-false.svg" alt="check" height="42" width="42"/>
        <div className="flex flex-col m-4">
        <h3>Counter</h3>
          <p className="text-neutral-600 text-sm ">
            Buid a simple counter that increments whenever a button is clicked
          </p>
        </div>
        <ArrowRight className="text-neutral-700 absolute right-2 top-8"/>
        </div>
      </div>
    </>
  );
};

export default question;
