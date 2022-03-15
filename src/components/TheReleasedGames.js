import { ReleasedGamesList } from "./ReleasedGamesList"

const releasedGames = [
  {
    id: 0,
    cover: 'https://fakeimg.pl/70x62/162440?font=bebas',
    title: 'Ghost of Tsushima',
    rating: 5,
    category: 'War Battle'
  },
  {
    id: 1,
    cover: 'https://fakeimg.pl/70x62/162440?font=bebas',
    title: 'Need For Speed',
    rating: 4,
    category: 'Race'
  },
  {
    id: 2,
    cover: 'https://fakeimg.pl/70x62/162440?font=bebas',
    title: 'The Witcher Hunt',
    rating: 5,
    category: 'Action RPG'
  },
  {
    id: 3,
    cover: 'https://fakeimg.pl/70x62/162440?font=bebas',
    title: 'Free Fire',
    rating: 4,
    category: 'War Battle'
  },
  {
    id: 4,
    cover: 'https://fakeimg.pl/70x62/162440?font=bebas',
    title: 'Elden Ring',
    rating: 5,
    category: 'Action RPG'
  },
  {
    id: 5,
    cover: 'https://fakeimg.pl/70x62/162440?font=bebas',
    title: 'Cyberpunk 2077',
    rating: 2.5,
    category: 'Action RPVG'
  },
  {
    id: 6,
    cover: 'https://fakeimg.pl/70x62/162440?font=bebas',
    title: 'Assassin\'s Creed: Valhalla',
    rating: 4.5,
    category: 'Action role-plaing'
  },
  {
    id: 7,
    cover: 'https://fakeimg.pl/70x62/162440?font=bebas',
    title: 'Mass Effect 2: Remastered',
    rating: 3.5,
    category: 'Action RPG'
  },
]

export const TheReleasedGames = () => {
  return (
    <section className="mb-[30px]">
      <div className="mb-[25px] flex items-center justify-between">
        <h2>New Released Games</h2>
        <a
          href="/"
          className="text-[#a0a8b1] duration-300 hover:text-primary"
        >
          See All
        </a>
      </div>
      <ReleasedGamesList releasedGames={releasedGames} />
    </section>
  )
}
