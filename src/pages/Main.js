import {
  TheBanner,
  TheHeader,
  ThePopularGames,
  TheReleasedGames,
  Layout,
} from "../components";

export const Main = () => {
  return (
    <Layout>
      <TheHeader />
      <TheBanner />
      <ThePopularGames />
      <TheReleasedGames />
    </Layout>
  );
};
