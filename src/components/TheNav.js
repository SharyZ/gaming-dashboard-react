import { HomeIcon, ChatIcon, StarIcon, CogIcon, ViewGridAddIcon } from "@heroicons/react/outline"
import { TheNavItem } from "./TheNavItem"

const ACTIVE_NAV_ITEM_CLASSES = "inline-flex items-center justify-center rounded-[14px] bg-primary p-[12px] shadow-base text-white"
const NAV_ITEM_CLASSES = "inline-flex items-center justify-center rounded-[14px] bg-white p-[12px] shadow-gray duration-300 hover:bg-primary hover:text-white hover:shadow-base"

const navItems = [
  {
    classes: ACTIVE_NAV_ITEM_CLASSES,
    icon: <HomeIcon className="w-6 h-6" />,
  },
  {
    classes: NAV_ITEM_CLASSES,
    icon: <ChatIcon className="w-6 h-6" />,
  },
  {
    classes: NAV_ITEM_CLASSES,
    icon: <StarIcon className="w-6 h-6" />,
  },
  {
    classes: NAV_ITEM_CLASSES,
    icon: <CogIcon className="w-6 h-6" />,
  },
  {
    classes: NAV_ITEM_CLASSES,
    icon: <ViewGridAddIcon className="w-6 h-6" />,
  },
]

export const TheNav = () => {
  return (
    <nav className="flex flex-col space-y-[30px]">
      {navItems.map((navItem, index) => (
        <TheNavItem key={index} {...navItem} />
      ))}
    </nav>
  )
}
