import { ReleasedGamesListItem } from "./ReleasedGamesListItem"

export const ReleasedGamesList = ({ releasedGames }) => {
  return (
    <div className="grid grid-cols-released-games gap-[20px]">
      {releasedGames.map((releasedGame) => (
        <ReleasedGamesListItem key={releasedGame.id} {...releasedGame} />
      ))}
    </div>
  )
}
