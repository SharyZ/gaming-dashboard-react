import { TheBanner, TheHeader, ThePopularGames, TheReleasedGames } from "../components"

export const Main = () => {
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