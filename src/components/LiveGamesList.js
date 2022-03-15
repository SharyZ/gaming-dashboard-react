import { LiveGamesListItem } from "./LiveGamesListItem"

export const LiveGamesList = ({ liveGames }) => {
  return (
    <div className="flex flex-col space-y-[15px]">
      {liveGames.map((liveGame) => <LiveGamesListItem key={liveGame.id} {...liveGame} />)}
    </div>
  )
}
