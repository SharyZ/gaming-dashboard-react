import { Outlet } from "react-router-dom";

export const FullscreenLayout = () => {
  return (
    <main className="flex-1 bg-[#fafafa] p-[40px] dark:bg-[#20232a]">
      <Outlet />
    </main>
  );
};
