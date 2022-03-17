import { LogoutIcon } from "@heroicons/react/outline";

export const TheFooter = () => {
  return (
    <footer>
      <a
        href="/"
        className="inline-flex items-center justify-center rounded-[14px] bg-white p-[12px] shadow-gray duration-300 hover:bg-primary hover:text-white hover:shadow-base dark:bg-[#20232B] dark:text-white dark:shadow-none"
      >
        <LogoutIcon className="h-6 w-6" />
      </a>
    </footer>
  );
};
