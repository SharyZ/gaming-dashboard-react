import {
  HomeIcon,
  ChatIcon,
  StarIcon,
  CogIcon,
  ViewGridAddIcon,
} from "@heroicons/react/outline";
import { TheNavItem } from "./TheNavItem";

const ACTIVE_NAV_ITEM_CLASSES =
  "inline-flex items-center justify-center rounded-[14px] bg-primary p-[12px] shadow-base dark:shadow-none text-white";
const NAV_ITEM_CLASSES =
  "inline-flex items-center justify-center rounded-[14px] bg-white dark:bg-[#20232B] dark:text-white p-[12px] shadow-gray dark:shadow-none duration-300 hover:bg-primary hover:text-white hover:shadow-base";

const navItems = [
  {
    classes: ACTIVE_NAV_ITEM_CLASSES,
    icon: <HomeIcon className="h-6 w-6" />,
  },
  {
    classes: NAV_ITEM_CLASSES,
    icon: <ChatIcon className="h-6 w-6" />,
  },
  {
    classes: NAV_ITEM_CLASSES,
    icon: <StarIcon className="h-6 w-6" />,
  },
  {
    classes: NAV_ITEM_CLASSES,
    icon: <CogIcon className="h-6 w-6" />,
  },
  {
    classes: NAV_ITEM_CLASSES,
    icon: <ViewGridAddIcon className="h-6 w-6" />,
  },
];

export const TheNav = () => {
  return (
    <nav className="flex flex-col space-y-[30px]">
      {navItems.map((navItem, index) => (
        <TheNavItem key={index} {...navItem} />
      ))}
    </nav>
  );
};
