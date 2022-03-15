import { BellIcon } from "@heroicons/react/outline"
import { StarIcon } from "@heroicons/react/solid"

import { Section } from "./Section"
import { LiveGamesList } from "./LiveGamesList"

const liveGames = [
  {
    id: 0,
    cover: 'https://fakeimg.pl/70x62/162440?font=bebas',
    title: 'Ghost of Tsushima',
    category: 'War Battle'
  },
  {
    id: 1,
    cover: 'https://fakeimg.pl/70x62/162440?font=bebas',
    title: 'Need For Speed',
    category: 'Race'
  },
  {
    id: 2,
    cover: 'https://fakeimg.pl/70x62/162440?font=bebas',
    title: 'The Witcher Hunt',
    category: 'Action RPG'
  },
  {
    id: 3,
    cover: 'https://fakeimg.pl/70x62/162440?font=bebas',
    title: 'Free Fire',
    category: 'War Battle'
  },
]

export const TheRightSidebar = () => {
  return (
    <aside
      className="fixed top-0 right-0 z-10 hidden h-screen w-[326px] flex-col justify-between space-y-[30px] overflow-y-scroll bg-white py-[40px] px-[10px] shadow-gray md:flex"
    >
      <div className="flex items-center justify-between">
        <a href="/" className="inline-flex items-center space-x-[14px]">
          <img
            src="https://fakeimg.pl/40/162440?font=bebas"
            alt=""
            className="rounded-full"
          />
          <h4>William Johnson</h4>
        </a>
        <button className="inline-block rounded p-[10px] focus:ring-2">
          <BellIcon className="w-6 h-6" />
        </button>
      </div>
      <div>
        <Section title="Live Game">
          <LiveGamesList liveGames={liveGames} />
        </Section>
      </div>
      <div>
        <img
          src="https://fakeimg.pl/302x218/162440?font=bebas"
          alt=""
          className="mb-[20px] rounded-[12px] shadow-gray"
        />
        <div>
          <div className="mb-[12px] flex flex-col space-y-[8px]">
            <h2>Need For Speed</h2>
            <p className="text-[18px] font-medium leading-[10px] text-[#a0a8b1]">
              Racing
            </p>
            <p className="flex items-center text-[12px] leading-[14px]">
              <span className="mr-[5px] text-[12px] leading-[14px]">5</span>
              <StarIcon className="text-primary w-4" />
            </p>
          </div>
          <p
            className="mb-[30px] text-[14px] font-normal leading-[20px] text-[#9DA1B4]"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            soluta?
          </p>
          <a
            href="/"
            className="block rounded-[8px] bg-primary px-[30px] py-[15px] text-center text-[17px] font-medium leading-[15px] text-white shadow-gray"
          >
            Download Now
          </a>
        </div>
      </div>
    </aside>
  )
}
