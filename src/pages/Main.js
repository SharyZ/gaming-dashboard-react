import {
  TheBanner,
  TheHeader,
  ThePopularGames,
  TheReleasedGames,
} from "../components";

export const Main = () => {
  return (
    <>
      <TheHeader />
      <TheBanner />
      <ThePopularGames />
      <TheReleasedGames />
    </>
  );
};
