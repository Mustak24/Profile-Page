import { title } from "process";

export default function Linkbox(props) {
  return (
    <>
      <div
        className="flex relative items-center shadow-[0_0_10px_black] text-[4vw] px-5 rounded-full text-gray-700 overflow-hidden  hover:text-white after:content-[''] after:absolute after:border-2 after:left-0 after:rounded-full  hover:after:scale-[250] after:transition-all after:duration-500 hover:after:border-gray-900 before:content-['']  before:absolute hover:before:border-black before:right-0 before:transition-all before:duration-500 before:border-2 hover:before:scale-[350] before:rounded-full after:border-transparent before:border-transparent"
      >
        <a href={props.url} target="_black" className={`${props?.class || ''} flex p-[10px] max-sm:p-[20px] transition-all duration-200`}>
          {props.title.split(' ').map(e=><div className="relative z-10">{e}</div>)}
        </a>
      </div>
    </>
  );
}

export function Textbox(props) {
  return (
    <>
      <div
        className="center w-full h-full relative shadow-[0_0_10px_black] text-[4vw] px-5 rounded-full text-gray-700 overflow-hidden  hover:text-white after:content-[''] after:absolute after:border-2 after:left-0 after:rounded-full hover:after:scale-[250] after:transition-all after:duration-500 hover:after:border-gray-900 before:content-['']  before:absolute hover:before:border-black before:right-0 before:transition-all before:duration-500 before:border-2 hover:before:scale-[350] before:rounded-full after:border-transparent before:border-transparent"
      >
        <div className={`${props?.class || ''} center w-full h-full p-[10px] max-sm:p-[20px] transition-all duration-200`}>
          {props.title.split(' ').map(e=><div className="relative z-10">{e}</div>)}
        </div>
      </div>
    </>
  );
}
