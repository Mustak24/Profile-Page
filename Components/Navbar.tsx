import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isNavOpen, setNav] = useState(false);

  return (
    <>
      <nav className="flex w-screen relative text-white min-h-[80px] items-center justify-between box-border px-10 bg-gray-900 shadow-[0_10px_10px_black]">
        <Link href={"/"}>
          <span>Must_ak_khan</span>
        </Link>
        <div className="max-sm:hidden flex gap-5 items-center">
          {["Home", "About", "Contect"].map((e) => {
            return (
              <Link href={`/${e.toLocaleLowerCase()}`}>
                <span className="flex items-center justify-center px-5 relative after:content-[''] after:absolute after:border-2 after:w-[80%] after:transition-all after:duration-500 after:rounded-full hover:after:w-full after:bottom-0 before:content-[''] before:transition-all before:duration-500 before:rounded-full before:absolute before:border-2 hover:before:w-[80%] before:bottom-[-6px] before:w-[40%]  ">
                  {e}
                </span>
              </Link>
            );
          })}
        </div>
        <div className="sm:hidden flex">
          <div
            className="relative flex flex-col items-center justify-center gap-[4px] hover:w-10 w-8 h-8 transition-all duration-300 active:w-7"
            onClick={() => setNav(!isNavOpen)}
          >
            <div className="w-[80%] left-0 absolute border-2 items-start justify-center rounded-full after:content-[''] after:absolute after:left-0 after:border-2 after:w-[60%] after:bottom-2 after:rounded-full before:content-[''] before:w-[60%] before:rounded-full before:absolute before:border-2 before:right-0 before:top-2 "></div>
          </div>
          <div className="fixed z-10 flex flex-col top-[100px] right-5 gap-[15px]">
            {["Home", "About", "Contect"].map((e, i) => {
              return (
                <>
                  <Link key={i} href={`/${e.toLocaleLowerCase()}`}>
                    <span
                      className="relative font-bold overflow-hidden shadow-[0_0_10px_black] w-[200px] h-10 z-1 rounded-full flex items-center justify-center flex-col after:border-gray-900 before:border-gray-900 text-sky-600 transition-all duration-500 hover:after:content-[''] after:border-2 active:after:scale-[70] after:self-start after:z-[-1] after:rounded-full before:content-[''] before:self-end before:z-[-1] active:before:scale-[70] before:border-2 before:rounded-full before:transition-all after:transition-all"
                      onClick={() => setNav(!isNavOpen)}
                      style={{
                        transform: `translateX(${isNavOpen ? 0 : "100%"})`,
                        opacity: isNavOpen ? 1 : 0,
                        transitionDelay: `${i * 100}ms`,
                      }}
                    >
                      {e}
                    </span>
                  </Link>
                </>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
