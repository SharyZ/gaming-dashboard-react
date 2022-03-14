import { HomeIcon, ChatIcon, StarIcon, CogIcon, ViewGridAddIcon } from "@heroicons/react/outline"

export const TheNav = () => {
  return (
    <nav className="flex flex-col space-y-[30px]">
      <a
        href="/"
        className="inline-flex items-center justify-center rounded-[14px] bg-primary p-[12px] shadow-base"
      >
        <HomeIcon className="w-6 h-6 text-white" />
      </a>
      <a
        href="/"
        className="inline-flex items-center justify-center rounded-[14px] bg-white p-[12px] shadow-gray duration-300 hover:bg-primary hover:text-white hover:shadow-base"
      >
        <ChatIcon className="w-6 h-6" />
      </a>
      <a
        href="/"
        className="inline-flex items-center justify-center rounded-[14px] bg-white p-[12px] shadow-gray duration-300 hover:bg-primary hover:text-white hover:shadow-base"
      >
        <StarIcon className="w-6 h-6" />
      </a>
      <a
        href="/"
        className="inline-flex items-center justify-center rounded-[14px] bg-white p-[12px] shadow-gray duration-300 hover:bg-primary hover:text-white hover:shadow-base"
      >
        <CogIcon className="w-6 h-6" />
      </a>
      <a
        href="/"
        className="inline-flex items-center justify-center rounded-[14px] bg-white p-[12px] shadow-gray duration-300 hover:bg-primary hover:text-white hover:shadow-base"
      >
        <ViewGridAddIcon className="w-6 h-6" />
      </a>
    </nav>
  )
}
