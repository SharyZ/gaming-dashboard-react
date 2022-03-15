import { StarIcon } from "@heroicons/react/solid"

export const PopularGamesListItem = ({ cover, title, rating, category }) => {
  return (
    <a
      href="/"
      className="inline-flex h-[250px] flex-col justify-end rounded-[14px] px-[15px] py-[20px] text-white shadow-gray"
      style={{
        backgroundImage: `url(${cover})`,
        backgroundSize: 'cover',
        backgroundPosition: "center",
      }}
    >
      <h3 className="text-white line-clamp-2">{title}</h3>
      <p className="flex items-center">
        <StarIcon className="text-primary w-4" />
        <span className="ml-[5px] line-clamp-1">{rating} / 10 {category}</span>
      </p>
    </a>
  )
}
