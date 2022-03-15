import { PopularGamesList } from "./PopularGamesList"

const popularGames = [
  {
    id: 0,
    cover: 'https://fakeimg.pl/200x250/162440?font=bebas',
    title: 'Sniper 2',
    rating: 4.5,
    category: 'FPS Shooter',
  },
  {
    id: 1,
    cover: 'https://fakeimg.pl/200x250/162440?font=bebas',
    title: 'Motor Race',
    rating: 4,
    category: 'Race',
  },
  {
    id: 2,
    cover: 'https://fakeimg.pl/200x250/162440?font=bebas',
    title: 'Witcher Hunt',
    rating: 5,
    category: 'Action RPG',
  },
  {
    id: 3,
    cover: 'https://fakeimg.pl/200x250/162440?font=bebas',
    title: 'PUBG War',
    rating: 4.5,
    category: 'Battle Royale',
  },
  {
    id: 4,
    cover: 'https://fakeimg.pl/200x250/162440?font=bebas',
    title: 'Sniper',
    rating: 5,
    category: 'FSP Shooter',
  },
]

export const ThePopularGames = () => {
  return (
    <section className="mb-[30px]">
      <div className="mb-[25px] flex items-center justify-between">
        <h2>Most Popular Games</h2>
        <a
          href="/"
          className="text-[#a0a8b1] duration-300 hover:text-primary"
        >
          See All
        </a>
      </div>
      <PopularGamesList popularGames={popularGames} />
    </section>
  )
}
