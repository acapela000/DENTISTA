import Image from "next/image";
import localFont from "next/font/local";
import NavBar from "./../components/NavBar";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="w-full h-auto bg-[#EBEAFF]">
      <div>
        <NavBar />
      </div>
      <div className="absolute mt-48 ml-36 ">
        <img src="/nav_bar/image 7.svg" alt="carousel_img" />
      </div>
      <div className="absolute ml-[880px] mt-32">
        <img
          src="/nav_bar/Double CustomRec LandingPage.svg"
          alt="Double_CustomRec_LandingPage"
          style={{ width: "502px", height: "615px" }}
        />
        <img
          src="/nav_bar/Your smiles are important to us.svg"
          alt="slogan"
          className="z-1 relative -top-[520px] left-16 w-[] h-[]"
          style={{ width: "355px", height: "410px" }}
        />
      </div>
      <div className="absolute">
        {/* <div className="absolute mt-[550px] ml-52">
          <img
            src="/nav_bar/Ellipse_LandingPage.svg"
            alt="CallUsToday"
            style={{ width: "68px", height: "64px" }}
          />
          <span className=" text-[#5E1675] text-2xl font-normal z-20 font-[Josefin Slab]">
            <Link href="/">Call us today</Link>
          </span>
        </div> */}
        <div className="absolute mt-[550px] ml-52">
          <img
            src="/nav_bar/Ellipse_LandingPage.svg"
            alt="CallUsToday"
            style={{ width: "66px", height: "62px" }}
          />
          <span className=" text-[#5E1675] text-2xl font-normal z-20 font-[Josefin Slab]">
            <Link href="/">Bokkkkkkkkkkk</Link>
          </span>
        </div>
        <div className="absolute mt-[620px] ml-52">
          <img
            src="/nav_bar/Ellipse_LandingPage.svg"
            alt="FreeConsultation"
            style={{ width: "66px", height: "62px" }}
          />
          <span className=" text-[#5E1675] text-2xl font-normal z-10 font-[Josefin Slab]">
            <Link href="/">Book a free consultation</Link>
          </span>
        </div>
        <div className="absolute mt-[690px] ml-52">
          <img
            src="/nav_bar/Ellipse_LandingPage.svg"
            alt="GetDiscount"
            style={{ width: "66px", height: "62px" }}
          />
          <span className=" text-[#5E1675] text-2xl font-normal z-10 font-[Josefin Slab]">
            <Link href="/">Get discount</Link>
          </span>
        </div>
      </div>
      <footer className="bg-[#EBEAFF]"></footer>
    </main>
  );
}
