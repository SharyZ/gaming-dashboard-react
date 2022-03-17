import { ChevronLeftIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";

export const GameDetail = () => {
  let navigate = useNavigate();

  return (
    <main
      className="flex flex-1 flex-col justify-between px-[30px] pt-[50px] pb-[40px]"
      style={{
        backgroundImage: "url(https://fakeimg.pl/1200x720/162440?font=bebas)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center space-x-2 rounded p-[10px] text-white focus:ring-2"
        >
          <ChevronLeftIcon className="h-5 w-5" />
          <span>Back</span>
        </button>
      </div>
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
