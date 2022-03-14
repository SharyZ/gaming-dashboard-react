export const TheRightSidebar = () => {
  return (
    <aside
      className="fixed top-0 right-0 z-10 hidden h-screen w-[326px] flex-col justify-between space-y-[30px] overflow-y-scroll bg-white py-[40px] px-[10px] shadow-gray md:flex"
    >
      <div className="flex items-center justify-between">
        <a href="/" className="inline-flex items-center space-x-[14px]">
          <img
            src="https://fakeimg.pl/40/162440?font=bebas"
            alt=""
            className="rounded-full"
          />
          <h4>William Johnson</h4>
        </a>
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
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </button>
      </div>
      <div>
        <div className="mb-[20px]">
          <h2>Live Game</h2>
        </div>
        <div className="flex flex-col space-y-[15px]">
          <a href="/" className="flex items-center space-x-[10px]">
            <img
              src="https://fakeimg.pl/70x62/162440?font=bebas"
              alt=""
              className="rounded-[10px] shadow-gray"
            />
            <div>
              <h4 className="mb-[6px]">The Witcher Hunt</h4>
              <p className="text-[12px] font-medium leading-[10px] text-[#a0a8b1]">
                War Battle
              </p>
            </div>
          </a>
          <a href="/" className="flex items-center space-x-[10px]">
            <img
              src="https://fakeimg.pl/70x62/162440?font=bebas"
              alt=""
              className="rounded-[10px] shadow-gray"
            />
            <div>
              <h4 className="mb-[6px]">PUBG</h4>
              <p className="text-[12px] font-medium leading-[10px] text-[#a0a8b1]">
                War Battle
              </p>
            </div>
          </a>
          <a href="/" className="flex items-center space-x-[10px]">
            <img
              src="https://fakeimg.pl/70x62/162440?font=bebas"
              alt=""
              className="rounded-[10px] shadow-gray"
            />
            <div>
              <h4 className="mb-[6px]">Ghost of Tsushima</h4>
              <p className="text-[12px] font-medium leading-[10px] text-[#a0a8b1]">
                War Battle
              </p>
            </div>
          </a>
          <a href="/" className="flex items-center space-x-[10px]">
            <img
              src="https://fakeimg.pl/70x62/162440?font=bebas"
              alt=""
              className="rounded-[10px] shadow-gray"
            />
            <div>
              <h4 className="mb-[6px]">Free Fire</h4>
              <p className="text-[12px] font-medium leading-[10px] text-[#a0a8b1]">
                War Battle
              </p>
            </div>
          </a>
        </div>
      </div>
      <div>
        <img
          src="https://fakeimg.pl/302x218/162440?font=bebas"
          alt=""
          className="mb-[20px] rounded-[12px] shadow-gray"
        />
        <div>
          <div className="mb-[12px] flex flex-col space-y-[8px]">
            <h2>Need For Speed</h2>
            <p className="text-[18px] font-medium leading-[10px] text-[#a0a8b1]">
              Racing
            </p>
            <p className="flex items-center text-[12px] leading-[14px]">
              <span className="mr-[5px] text-[12px] leading-[14px]">5</span>
              <svg
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0055 4.16434L8.28631 3.62479L6.62371 0.260276C6.5783 0.168158 6.50359 0.0935859 6.41131 0.0482578C6.17986 -0.0657934 5.89861 0.0292493 5.78289 0.260276L4.12029 3.62479L0.401051 4.16434C0.298512 4.17896 0.204762 4.22721 0.132985 4.30032C0.0462101 4.38935 -0.0016068 4.50912 4.12294e-05 4.63332C0.00168926 4.75752 0.0526674 4.87599 0.141774 4.96269L2.83269 7.58149L2.19695 11.2794C2.18204 11.3654 2.19158 11.4539 2.22448 11.5348C2.25738 11.6156 2.31232 11.6857 2.38309 11.737C2.45385 11.7883 2.53759 11.8188 2.62483 11.825C2.71207 11.8312 2.7993 11.8129 2.87664 11.7721L6.2033 10.0263L9.52996 11.7721C9.62078 11.8204 9.72625 11.8365 9.82732 11.8189C10.0822 11.7751 10.2536 11.5338 10.2096 11.2794L9.5739 7.58149L12.2648 4.96269C12.3381 4.89105 12.3864 4.79747 12.4011 4.69511C12.4406 4.43923 12.2619 4.20235 12.0055 4.16434Z"
                  fill="#FC8B40"
                />
              </svg>
              <svg
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0055 4.16434L8.28631 3.62479L6.62371 0.260276C6.5783 0.168158 6.50359 0.0935859 6.41131 0.0482578C6.17986 -0.0657934 5.89861 0.0292493 5.78289 0.260276L4.12029 3.62479L0.401051 4.16434C0.298512 4.17896 0.204762 4.22721 0.132985 4.30032C0.0462101 4.38935 -0.0016068 4.50912 4.12294e-05 4.63332C0.00168926 4.75752 0.0526674 4.87599 0.141774 4.96269L2.83269 7.58149L2.19695 11.2794C2.18204 11.3654 2.19158 11.4539 2.22448 11.5348C2.25738 11.6156 2.31232 11.6857 2.38309 11.737C2.45385 11.7883 2.53759 11.8188 2.62483 11.825C2.71207 11.8312 2.7993 11.8129 2.87664 11.7721L6.2033 10.0263L9.52996 11.7721C9.62078 11.8204 9.72625 11.8365 9.82732 11.8189C10.0822 11.7751 10.2536 11.5338 10.2096 11.2794L9.5739 7.58149L12.2648 4.96269C12.3381 4.89105 12.3864 4.79747 12.4011 4.69511C12.4406 4.43923 12.2619 4.20235 12.0055 4.16434Z"
                  fill="#FC8B40"
                />
              </svg>
              <svg
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0055 4.16434L8.28631 3.62479L6.62371 0.260276C6.5783 0.168158 6.50359 0.0935859 6.41131 0.0482578C6.17986 -0.0657934 5.89861 0.0292493 5.78289 0.260276L4.12029 3.62479L0.401051 4.16434C0.298512 4.17896 0.204762 4.22721 0.132985 4.30032C0.0462101 4.38935 -0.0016068 4.50912 4.12294e-05 4.63332C0.00168926 4.75752 0.0526674 4.87599 0.141774 4.96269L2.83269 7.58149L2.19695 11.2794C2.18204 11.3654 2.19158 11.4539 2.22448 11.5348C2.25738 11.6156 2.31232 11.6857 2.38309 11.737C2.45385 11.7883 2.53759 11.8188 2.62483 11.825C2.71207 11.8312 2.7993 11.8129 2.87664 11.7721L6.2033 10.0263L9.52996 11.7721C9.62078 11.8204 9.72625 11.8365 9.82732 11.8189C10.0822 11.7751 10.2536 11.5338 10.2096 11.2794L9.5739 7.58149L12.2648 4.96269C12.3381 4.89105 12.3864 4.79747 12.4011 4.69511C12.4406 4.43923 12.2619 4.20235 12.0055 4.16434Z"
                  fill="#FC8B40"
                />
              </svg>
              <svg
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0055 4.16434L8.28631 3.62479L6.62371 0.260276C6.5783 0.168158 6.50359 0.0935859 6.41131 0.0482578C6.17986 -0.0657934 5.89861 0.0292493 5.78289 0.260276L4.12029 3.62479L0.401051 4.16434C0.298512 4.17896 0.204762 4.22721 0.132985 4.30032C0.0462101 4.38935 -0.0016068 4.50912 4.12294e-05 4.63332C0.00168926 4.75752 0.0526674 4.87599 0.141774 4.96269L2.83269 7.58149L2.19695 11.2794C2.18204 11.3654 2.19158 11.4539 2.22448 11.5348C2.25738 11.6156 2.31232 11.6857 2.38309 11.737C2.45385 11.7883 2.53759 11.8188 2.62483 11.825C2.71207 11.8312 2.7993 11.8129 2.87664 11.7721L6.2033 10.0263L9.52996 11.7721C9.62078 11.8204 9.72625 11.8365 9.82732 11.8189C10.0822 11.7751 10.2536 11.5338 10.2096 11.2794L9.5739 7.58149L12.2648 4.96269C12.3381 4.89105 12.3864 4.79747 12.4011 4.69511C12.4406 4.43923 12.2619 4.20235 12.0055 4.16434Z"
                  fill="#FC8B40"
                />
              </svg>
              <svg
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0055 4.16434L8.28631 3.62479L6.62371 0.260276C6.5783 0.168158 6.50359 0.0935859 6.41131 0.0482578C6.17986 -0.0657934 5.89861 0.0292493 5.78289 0.260276L4.12029 3.62479L0.401051 4.16434C0.298512 4.17896 0.204762 4.22721 0.132985 4.30032C0.0462101 4.38935 -0.0016068 4.50912 4.12294e-05 4.63332C0.00168926 4.75752 0.0526674 4.87599 0.141774 4.96269L2.83269 7.58149L2.19695 11.2794C2.18204 11.3654 2.19158 11.4539 2.22448 11.5348C2.25738 11.6156 2.31232 11.6857 2.38309 11.737C2.45385 11.7883 2.53759 11.8188 2.62483 11.825C2.71207 11.8312 2.7993 11.8129 2.87664 11.7721L6.2033 10.0263L9.52996 11.7721C9.62078 11.8204 9.72625 11.8365 9.82732 11.8189C10.0822 11.7751 10.2536 11.5338 10.2096 11.2794L9.5739 7.58149L12.2648 4.96269C12.3381 4.89105 12.3864 4.79747 12.4011 4.69511C12.4406 4.43923 12.2619 4.20235 12.0055 4.16434Z"
                  fill="#FC8B40"
                />
              </svg>
            </p>
          </div>
          <p
            className="mb-[30px] text-[14px] font-normal leading-[20px] text-[#9DA1B4]"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            soluta?
          </p>
          <a
            href="/"
            className="block rounded-[8px] bg-primary px-[30px] py-[15px] text-center text-[17px] font-medium leading-[15px] text-white shadow-gray"
          >
            Download Now
          </a>
        </div>
      </div>
    </aside>
  )
}
