import { Outlet } from "react-router-dom";
import { TheLeftSidebar } from "./TheLeftSidebar";

export const Layout = () => {
  return (
    <>
      <TheLeftSidebar />
      <main className="container mx-auto flex-1 rounded-[40px] bg-[#fafafa] p-[40px] dark:bg-[#20232a]">
        <Outlet />
      </main>
    </>
  );
};
