import { TheLeftSidebar } from "./TheLeftSidebar";
import { TheRightSidebar } from "./TheRightSidebar";

export const Layout = ({ children }) => {
  return (
    <>
      <TheLeftSidebar />
      <main className="container mx-auto flex-1 rounded-[40px] bg-[#fafafa] px-[30px] pt-[50px] pb-[40px] dark:bg-[#20232a]">
        {children}
      </main>
      {/* <TheRightSidebar /> */}
    </>
  );
};
