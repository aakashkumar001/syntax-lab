import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen overflow-x-hidden bg-slate-200">
        <header className="flex justify-between px-10 text-center items-center">
          <div>
            <Image
              src={"/images/Logo.png"}
              width={240}
              height={180}
              alt="logo"
              className=""
            />
          </div>
          <div>
            <Button
              size="lg"
              className="w-24 rounded-xl text-bg_color cursor-pointer font-bold"
            >
              Log in
            </Button>
          </div>
        </header>
        <main>
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-4xl text-center my-28 text-neutral-900">
              Connecting You to Smarter Answers
            </h1>
            <Button
              size="lg"
              className="w-64 cursor-pointer rounded-xl text-bg_color font-bold"
            >
              Get Started for free
            </Button>
          </div>
          <div className="flex flex-col justify-center items-center px-6 my-16">
            <h2 className="font-bold text-xl">
              Revolutionize Your Search with AI-Powered Insights Beyond Google.
            </h2>
            <p className="text-gray-600 my-4">
              Experience next-level search capabilities with AI that goes beyond
              Google to provide smarter, more accurate results tailored to your
              needs.
            </p>
            <div className="w-82 my-4">
              <Image
                src={"/images/main1.jpg"}
                alt="section-image"
                width={480}
                height={120}
                className="rounded-xl object-cover"
              />
            </div>

            <h2 className="font-bold text-xl">
              Stay Informed with Real-Time News and Smarter AI Search in One
              Place.
            </h2>
            <p className="text-gray-600 my-4">
              Get real-time news updates alongside powerful AI search
              functionality, keeping you informed and ahead in one seamless
              platform.
            </p>
            <div className="w-82 my-4">
              <Image
                src={"/images/main2.jpg"}
                alt="section-image"
                width={480}
                height={120}
                className="rounded-xl object-cover"
              />
            </div>
            <h2 className="font-bold text-xl">
              Discover, Search, and Stay Updated—Your All-in-One AI Web App.
            </h2>
            <p className="text-gray-600 my-4">
              Combine the best of AI-driven search, Google’s reach, and live
              news updates to discover information faster and smarter.
            </p>
            <div className="w-82 my-4">
              <Image
                src={"/images/main4.jpg"}
                alt="section-image"
                width={480}
                height={120}
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </main>
        <footer>
          <div className="flex flex-col justify-center items-center">
            <Button
              size="lg"
              className="w-64 cursor-pointer rounded-xl text-bg_color mb-12 font-bold"
            >
              Get Started for free
            </Button>
            <div>
              <Image
                src={"/images/Logo.png"}
                width={140}
                height={80}
                alt="logo"
                className=""
              />
            </div>
            <h1 className="font-bold text-small text-center my-4 text-neutral-900">
              Connecting You to Smarter Answers
            </h1>
            <div className="flex flex-col justify-center items-center py-4 gap-4 text-gray-600">
              <span>Terms of Use</span>
              <span>Privacy Policy</span>
              <span>©️ Ai Nexus PVT LTD. 2025</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
