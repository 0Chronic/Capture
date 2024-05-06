import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";




const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};



function MyApp ({Component, pageProps}) {
  return (
      <>
      <Navbar />
      <Component {...pageProps} />
      </>
  )
}

export default MyApp


