"use client";

import { Circle, Line } from "rc-progress";
import React from "react";
const SolvedProblems = () => {
  return (
    <>
    
    <div className="max-w-[640px] border-2 border-gray-400 m-4 rounded-md p-6">
      <h3 className="text-1xl font-bold text-gray-800">Solved problems</h3>
      <div className="flex flex-col lg:flex-row xl:flex-row mt-6">
        <div className="relative">
            <span className="absolute top-14 left-16">
                <span className="font-bold text-2xl">
                    5
                </span>
                <span className="font-semibold ml-2">
                Solved
                </span>
            </span>
          <Circle
            percent={90}
            strokeWidth={4}
            strokeColor="#b2df50"
            className="h-36 w-48"
          />
        </div>
        <div className="mt-6">
          <span>
            <span className="text-sm font-semibold">Easy  <span className="text-2xl">2</span>/221</span>
            <Line
              percent={10}
              strokeWidth={1}
              strokeColor="#b2df50"
              className="h-2 w-102 mb-2 rounded-xl"
            />
          </span>
          <span>
          <span className="text-sm font-semibold">Medium <span className="text-2xl">2</span>/221</span>
            <Line
              percent={40}
              strokeWidth={1}
              strokeColor="#b2df50"
              className="h-2 w-102 mb-2 rounded-xl"
            />
          </span>
          <span>
          <span className="text-sm font-semibold">Hard  <span className="text-2xl">2</span>/221</span>
            <Line
              percent={90}
              strokeWidth={1}
              strokeColor="#b2df50"
              className="h-2 w-102 rounded-xl"
            />
          </span>
        </div>
      </div>
    </div>
    <div className="max-w-[640px] border-2 border-gray-400 m-4 rounded-md p-6">
    <h3 className="text-1xl font-bold text-gray-800">Solved by quetion type</h3>
    <div className="mt-6">
          <span>
            <span className="text-sm font-semibold">React  <span className="text-2xl">2</span>/221</span>
            <Line
              percent={10}
              strokeWidth={1}
              strokeColor="#b2df50"
              className="h-2 w-102 mb-2 rounded-xl"
            />
          </span>
          <span>
          <span className="text-sm font-semibold">Javascript<span className="text-2xl">2</span>/221</span>
            <Line
              percent={40}
              strokeWidth={1}
              strokeColor="#b2df50"
              className="h-2 w-102 mb-2 rounded-xl"
            />
          </span>
          <span>
          <span className="text-sm font-semibold">Data Structures & Algorithms <span className="text-2xl">2</span>/221</span>
            <Line
              percent={90}
              strokeWidth={1}
              strokeColor="#b2df50"
              className="h-2 w-102 rounded-xl"
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default SolvedProblems;
