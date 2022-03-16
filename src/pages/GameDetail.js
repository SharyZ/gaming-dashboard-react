import { ChevronLeftIcon } from "@heroicons/react/outline"
import { StarIcon } from "@heroicons/react/solid"
import { useNavigate } from "react-router-dom"

export const GameDetail = () => {
  let navigate = useNavigate()

  return (
    <main
      className="flex-1 px-[30px] pt-[50px] pb-[40px] flex flex-col justify-between"
      style={{
        backgroundImage: 'url(https://fakeimg.pl/1200x720/162440?font=bebas)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div>
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center space-x-2 text-white rounded p-[10px] focus:ring-2"
        >
          <ChevronLeftIcon className="w-5 h-5" />
          <span>Back</span>
        </button>
      </div>
      <div className="max-w-[768px]">
        <div className="mb-[12px] flex flex-col space-y-[8px]">
          <h1 className="text-white">Need For Speed</h1>
          <div className="flex space-x-[5px] items-center font-medium">
            <p className="text-white text-[18px]">
              Racing
            </p>
            <p className="text-white flex items-center">
              <StarIcon className="text-primary w-4" />
              <StarIcon className="text-primary w-4" />
              <StarIcon className="text-primary w-4" />
              <StarIcon className="text-primary w-4" />
              <StarIcon className="text-primary w-4" />
              <span className="ml-[5px]">5</span>
            </p>
          </div>
        </div>
        <p
          className="mb-[30px] font-normal text-[#9DA1B4]"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          soluta?
        </p>
        <a
          href="/"
          className="inline-block rounded-[8px] bg-primary px-[30px] py-[15px] text-center text-[17px] font-medium leading-[15px] text-white shadow-gray"
        >
          Download Now
        </a>
      </div>
    </main>
  )
}
