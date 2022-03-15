import { PopularGamesListItem } from "./PopularGamesListItem"

export const PopularGamesList = ({ popularGames }) => {
  return (
    <div className="grid grid-cols-popular-games items-stretch gap-[20px]">
      {popularGames.map((popularGame) => (
        <PopularGamesListItem key={popularGame.id} {...popularGame} />
      ))}
    </div>
  )
}
