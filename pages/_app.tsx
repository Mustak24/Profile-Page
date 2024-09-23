import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Background from "@/Components/Background";
import Navbar from "@/Components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (<>
  
    <Background/>
    <Navbar/>
    <Component {...pageProps} />

  </>)
}
