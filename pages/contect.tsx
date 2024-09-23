import Head from "next/head";
import { useState } from "react";
import Linkbox, { Textbox } from "@/Components/Linkbox";

export default function Home() {
  const [isfrom, setFrom] = useState(false);
  return (
    <>
      <Head>
        <title>Contect</title>
      </Head>
      <main
        className="h-full w-full relative flex items-center justify-center"
        onClick={() => (isfrom ? setFrom(false) : "")}
      >
        <div className="flex flex-col w-full px-[10vw] text-[10vw] items-center">
          <div
            className="self-start transition-all duration-500"
            style={{
              opacity: isfrom ? 0 : 1,
              visibility: isfrom ? "hidden" : "visible",
            }}
          >
            <Linkbox
              url="https://www.instagram.com/must_ak_khan?igsh=aGg0anFhZnd5cjNu"
              title="INSTAGRAM_ @Must_ak_khan"
              class="max-sm:flex-col"
            />
          </div>
          <div className="flex items-center font-semibold max-lg:hidden">
            <span>C</span>
            <div className="center relative">
              <div
                className={`size-[8vw] relative bg-black rounded-full overflow-hidden transition-all duration-500 flex flex-col items-center justify-center text-white hover:w-[40vw] hover:text-[2vw] poiner select-none after:content-[''] after:absolute after:text-[10px] after:top-[15px] after:animate-pulse hover:after:top-[-100px] after:duration-500 after:transition-all`}
                style={{
                  height: isfrom ? "30vw" : "8vw",
                  width: isfrom ? "40vw" : "",
                  fontSize: isfrom ? "2vw" : "",
                }}
              >
                <div
                  className="center flex-col cursor-pointer"
                  onClick={() => setFrom(!isfrom)}
                >
                  <div>HOW CAN I HELP YOU ...</div>
                  <div className="text-[15px]">
                    {isfrom ? 'Feedback Form' :'Email : mustak.coc786@gmail.com'}
                  </div>
                </div>
                <form
                  style={{ display: isfrom ? "flex" : "none" }}
                  className="flex-col min-w-fit w-[70%] min-h-fit h-[60%] box-border p-[10px] gap-2"
                >
                  <div className="border-2 border-white relative rounded-full overflow-hidden min-w-[200px] w-full h-[40px] px-[15px]">
                    <input
                      name="name"
                      type="text"
                      placeholder="Name"
                      className="bg-transparent text-white text-sm flex items-center w-full h-full outline-none"
                    />
                  </div>
                  <div className="border-2 border-white relative rounded-full overflow-hidden min-w-[200px] w-full h-[40px] px-[15px]">
                    <input
                      name="contectInfo"
                      type="text"
                      placeholder="Email / Mobile no"
                      className="bg-transparent text-white text-sm flex items-center w-full h-full outline-none"
                    />
                  </div>
                  <div className="border-2 border-white relative rounded-[20px] overflow-hidden min-w-[200px] w-full h-[80px] px-[15px]">
                    <textarea
                      name="msg"
                      placeholder="Enter your msg"
                      className="bg-transparent text-white text-sm flex items-center pt-[10px] w-full h-full outline-none resize-none"
                      style={{ scrollbarWidth: "none" }}
                    ></textarea>
                  </div>
                  <button className="border-2 text-sm center border-white relative rounded-[20px] overflow-hidden min-w-[200px] w-full h-[40px] px-[15px]">
                    Send Feedback
                  </button>
                </form>
              </div>
            </div>
            <span>NTACT</span>
          </div>

          <div className="lg:hidden center flex-col w-[90vw] h-[45vh] m-[20px] rounded-[20px] p-[20px] shadow-2xl overflow-hidden">
            <span className="text-[20px] font-[600]">Contect to me</span>
            <form className="flex-col center min-w-fit w-[100%] min-h-fit h-[100%] box-border gap-2">
              <div className="border-2 border-black relative rounded-full overflow-hidden min-w-[200px] w-full h-[40px] px-[15px]">
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="bg-transparent font-[700] placeholder:font-[500] placeholder:text-gray-700 text-black text-sm flex items-center w-full h-full outline-none"
                />
              </div>
              <div className="border-2 border-black relative rounded-full overflow-hidden min-w-[200px] w-full h-[40px] px-[15px]">
                <input
                  name="contectInfo"
                  type="text"
                  placeholder="Email / Mobile no"
                  className="bg-transparent font-[700] placeholder:font-[500] placeholder:text-gray-700 text-black text-sm flex items-center w-full h-full outline-none"
                />
              </div>
              <div className="border-2 border-black relative rounded-[20px] overflow-hidden min-w-[200px] w-full h-[80px] px-[15px]">
                <textarea
                  name="msg"
                  placeholder="Enter your msg"
                  className="bg-transparent font-[700] placeholder:font-[500] placeholder:text-gray-700 text-black text-sm flex items-center pt-[10px] w-full h-full outline-none resize-none"
                  style={{ scrollbarWidth: "none" }}
                ></textarea>
              </div>
              <button className="text-sm center border-2 border-black hover:border-0 transition-all duration-200 relative rounded-full overflow-hidden min-w-[200px] w-full h-[45px]">
                <Textbox title="Send" />
              </button>
            </form>
          </div>

          <div
            className="self-end transition-all duration-500"
            style={{
              opacity: isfrom ? 0 : 1,
              visibility: isfrom ? "hidden" : "visible",
            }}
          >
            <Linkbox
              url="https://github.com/Mustak24"
              title="GITHUB_ @Mustak24"
              class="max-sm:flex-col"
            />
          </div>
        </div>
      </main>
    </>
  );
}
