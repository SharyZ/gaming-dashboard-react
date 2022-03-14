import { StarIcon } from "@heroicons/react/solid"

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
      <div className="grid grid-cols-popular-games items-stretch gap-[20px]">
        <a
          href="/"
          className="inline-flex h-[250px] flex-col justify-end rounded-[14px] px-[15px] py-[20px] text-white shadow-gray"
          style={{
            backgroundImage: `url('https://fakeimg.pl/200x250/162440?font=bebas')`,
            backgroundSize: 'cover',
            backgroundPosition: "center",
          }}
        >
          <h3 className="text-white line-clamp-2">Sniper 2</h3>
          <p className="flex items-center">
            <StarIcon className="text-primary w-4" />
            <span className="ml-[5px]">8.6 / 10 Action-rpg</span>
          </p>
        </a>
        <a
          href="/"
          className="inline-flex h-[250px] flex-col justify-end rounded-[14px] px-[15px] py-[20px] text-white shadow-gray"
          style={{
            backgroundImage: `url('https://fakeimg.pl/200x250/162440?font=bebas')`,
            backgroundSize: 'cover',
            backgroundPosition: "center",
          }}
        >
          <h3 className="text-white line-clamp-2">Motor Race</h3>
          <p className="flex items-center">
            <StarIcon className="text-primary w-4" />
            <span className="ml-[5px]">8.6 / 10 Action-rpg</span>
          </p>
        </a>
        <a
          href="/"
          className="inline-flex h-[250px] flex-col justify-end rounded-[14px] px-[15px] py-[20px] text-white shadow-gray"
          style={{
            backgroundImage: `url('https://fakeimg.pl/200x250/162440?font=bebas')`,
            backgroundSize: 'cover',
            backgroundPosition: "center",
          }}
        >
          <h3 className="text-white line-clamp-2">Witcher Hunt</h3>
          <p className="flex items-center">
            <StarIcon className="text-primary w-4" />
            <span className="ml-[5px]">8.6 / 10 Action-rpg</span>
          </p>
        </a>
        <a
          href="/"
          className="inline-flex h-[250px] flex-col justify-end rounded-[14px] px-[15px] py-[20px] text-white shadow-gray"
          style={{
            backgroundImage: `url('https://fakeimg.pl/200x250/162440?font=bebas')`,
            backgroundSize: 'cover',
            backgroundPosition: "center",
          }}
        >
          <h3 className="text-white line-clamp-2">PUBG War</h3>
          <p className="flex items-center">
            <StarIcon className="text-primary w-4" />
            <span className="ml-[5px]">8.6 / 10 Action-rpg</span>
          </p>
        </a>
        <a
          href="/"
          className="inline-flex h-[250px] flex-col justify-end rounded-[14px] px-[15px] py-[20px] text-white shadow-gray"
          style={{
            backgroundImage: `url('https://fakeimg.pl/200x250/162440?font=bebas')`,
            backgroundSize: 'cover',
            backgroundPosition: "center",
          }}
        >
          <h3 className="text-white line-clamp-2">Sniper 2</h3>
          <p className="flex items-center">
            <StarIcon className="text-primary w-4" />
            <span className="ml-[5px]">8.6 / 10 Action-rpg</span>
          </p>
        </a>
      </div>
    </section>
  )
}
