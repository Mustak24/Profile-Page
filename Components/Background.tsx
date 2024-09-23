export default function Background(){
    return(<>
        <div
  style={{height: "100vh"}}
  className="flex items-center justify-center max-sm:flex-col w-screen h-screen bg-gray-200 absolute -z-1 contrast-[1.5] gap-20 overflow-hidden"
>
  <div
    className="w-[25vw] h-[25vw] rounded-full bg-pink-500 blur-[40px] animate-spin origin-bottom"
    style={{animationDuration: "10s"}}
  ></div>
  <div
    className="w-[25vh] h-[25vh] rounded-full bg-blue-600 blur-[70px] animate-spin origin-left"
    style={{animationDuration: "10s"}}
  ></div>
  <div
    className="w-[25vw] h-[25vw] rounded-full bg-pink-500 blur-[40px] animate-spin origin-top"
    style={{animationDuration: "10s"}}
  ></div>
  <div
    className="w-[25vh] h-[25vh] rounded-full bg-blue-600 blur-[70px] animate-spin origin-right"
    style={{animationDuration: "10s"}}
  ></div>
</div>

    </>)
}