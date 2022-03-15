import { StarIcon } from "@heroicons/react/solid"

export const ReleasedGamesListItem = ({ cover, title, rating, category }) => {
  return (
    <a
      href="/"
      className="flex space-x-[10px] rounded-[10px] shadow-gray p-1 items-center"
    >
      <img
        src={cover}
        alt=""
        className="rounded-[10px]"
      />
      <div className="text-[#22283C]">
        <h4 className="mb-[6px] line-clamp-1">{title}</h4>
        <p
          className="mb-[8px] text-[12px] font-medium leading-[10px] text-[#9DA1B4]"
        >
          {category}
        </p>
        <p className="flex items-center text-[12px] leading-[14px]">
          <span className="mr-[5px] text-[12px] leading-[14px]">{rating}</span>
          <StarIcon className="text-primary w-4" />
          <StarIcon className="text-primary w-4" />
          <StarIcon className="text-primary w-4" />
          <StarIcon className="text-primary w-4" />
          <StarIcon className="text-primary w-4" />
        </p>
      </div>
    </a>
  )
}
