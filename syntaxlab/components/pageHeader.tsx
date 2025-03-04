import { BadgeCheck, Container, FlaskConical } from "lucide-react";
import Image from "next/image";
import React from "react";

const pageHeader = () => {
  return (
    <>
      <div className="max-w-[640px] m-4 p-4">
        <div className="flex items-center gap-6">
          <div className="shadow-md w-16 h-16 rounded-xl flex justify-center items-center">
            <Image
              src="https://www.greatfrontend.com/img/company-logos/airbnb-logomark.svg"
              height="32"
              width="32"
              alt="logo"
              className="object-cover"
            />
          </div>
          <h1 className="text-2xl font-semibold text-neutral-900">
            Javascript Interview Questions
          </h1>
        </div>
        <div className="mt-4">
          <p className="text-neutral-700">
            440+ most important JavaScript interview questions, from library
            APIs and utility functions to algorithms and UI components.
          </p>
          <div className="flex items-center gap-x-10 mt-6">
            <div className="">
              <BadgeCheck color="#727395" />
              Solved By top-experts
            </div>
            <div>
              <FlaskConical color="#727395" />
              Practice cases
            </div>
          </div>

          <div className="mt-4">
            <Container color="#727395" /> Code in browser
          </div>
        </div>
      </div>
    </>
  );
};

export default pageHeader;
