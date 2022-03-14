import { TheHeaderList } from "./TheHeaderList"

const HEADER_LIST_ITEM_CLASSES = "text-[17px] font-medium leading-[22px] text-[#a0a8b1] duration-300 hover:text-primary"

const headerListItems = [
  {
    classes: HEADER_LIST_ITEM_CLASSES,
    label: "Game",
  },
  {
    classes: HEADER_LIST_ITEM_CLASSES,
    label: "Live Score",
  },
  {
    classes: HEADER_LIST_ITEM_CLASSES,
    label: "Statistics",
  },
  {
    classes: HEADER_LIST_ITEM_CLASSES,
    label: "Analytics",
  },
  {
    classes: HEADER_LIST_ITEM_CLASSES,
    label: "Forecasts",
  },
]

export const TheHeader = () => {
  return (
    <header className="hidden pb-[25px] md:block">
      <TheHeaderList listItems={headerListItems} />
    </header>
  )
}
