import { MessageCircleQuestion, MoveRight } from "lucide-react";
import Image from "next/image";

const CompanyTag = () => {
  return (
    <>
      <div className="max-w-[560px] flex relative gap-2 border-2 items-center rounded-md border-neutral-300 m-4 p-4">
        <div className="shadow-md w-16 h-16 rounded-xl flex justify-center items-center">
            <Image src="https://www.greatfrontend.com/img/company-logos/airbnb-logomark.svg"  height="28" width="28" alt="logo" className="object-cover"/>
        </div>
        <div className="flex-col gap-8 ml-2">
          <p className="font-semibold text-xl text-neutral-900 cursor-pointer">Airbnb</p>
          <span className="flex gap-1 text-neutral-600">
            <span><MessageCircleQuestion color="#727371"/></span>
            <span>24</span>
            <span>questions</span>
          </span>
        </div>
            <MoveRight color="#727395" className="absolute right-8 cursor-pointer"/> 
      </div>
    </>
  );
};

export default CompanyTag;
