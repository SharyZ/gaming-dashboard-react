import { TheNav } from "./TheNav"
import { TheFooter } from "./TheFooter"

export const TheLeftSidebar = () => {
  return (
    <aside
      className="sticky top-0 left-0 hidden h-screen w-[130px] flex-col justify-between bg-white p-[40px] md:flex"
    >
      <button className="inline-block rounded p-[10px] focus:ring-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </button>
      <TheNav />
      <TheFooter />
    </aside>
  )
}
