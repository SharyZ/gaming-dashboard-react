import { Link } from "react-router-dom";

export const LiveGamesListItem = ({ id, cover, title, category }) => {
  return (
    <Link to={`/games/${id}`} className="flex items-center space-x-[10px]">
      <img
        src={cover}
        alt=""
        className="rounded-[10px] shadow-gray dark:shadow-none"
      />
      <div>
        <h4 className="mb-[6px]">{title}</h4>
        <p className="text-[12px] font-medium leading-[10px] text-[#a0a8b1]">
          {category}
        </p>
      </div>
    </Link>
  );
};
