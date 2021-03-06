import { StarIcon } from "@heroicons/react/solid";

import { TheHeader } from "../components";

export const GameDetail = () => {
  return (
    <main className="flex min-h-screen flex-1 flex-col justify-between">
      <TheHeader />
      <div
        className="mb-[30px] h-[400px] w-full rounded-[14px] px-[30px] py-[60px] shadow-gray dark:shadow-none"
        style={{
          backgroundImage: "url(https://fakeimg.pl/1200x720/162440?font=bebas)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="max-w-[768px]">
        <div className="mb-[12px] flex flex-col space-y-[8px]">
          <h1 className="text-white">Need For Speed</h1>
          <div className="flex items-center space-x-[5px] font-medium">
            <p className="text-[18px] text-white">Racing</p>
            <p className="flex items-center text-white">
              <StarIcon className="w-4 text-primary" />
              <StarIcon className="w-4 text-primary" />
              <StarIcon className="w-4 text-primary" />
              <StarIcon className="w-4 text-primary" />
              <StarIcon className="w-4 text-primary" />
              <span className="ml-[5px]">5</span>
            </p>
          </div>
        </div>
        <p className="mb-[30px] font-normal text-[#9DA1B4]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          soluta?
        </p>
        <a
          href="/"
          className="inline-block rounded-[8px] bg-primary px-[30px] py-[15px] text-center text-[17px] font-medium leading-[15px] text-white shadow-gray dark:shadow-none"
        >
          Download Now
        </a>
      </div>
    </main>
  );
};
