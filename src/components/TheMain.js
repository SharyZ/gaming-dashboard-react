import { TheBanner } from "./TheBanner"
import { TheHeader } from "./TheHeader"
import { ThePopularGames } from "./ThePopularGames"
import { TheReleasedGames } from "./TheReleasedGames"

export const TheMain = () => {
  return (
    <main
      className="container mx-auto flex-1 rounded-[40px] bg-[#fafafa] px-[30px] pt-[50px] pb-[40px]"
    >
      <TheHeader />
      <TheBanner />
      <ThePopularGames />
      <TheReleasedGames />
    </main>
  )
}
