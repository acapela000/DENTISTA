"use client";
import Link from "next/link";
import Flags from "country-flag-icons/react/3x2";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

export default function NavBar() {
  const textNavBarColorList = ["#FFFFFF", "#A20A0A", "#7743DB", "#219B9D"];

  return (
    <div className="w-full h-auto">
      <div className="absolute -top-14 -left-3">
        <img
          src="/nav_bar/LOGO Landing Page.svg"
          alt="Logo_LandingPage"
          style={{ width: "285px", height: "205px" }}
        />
        <span className="relative -top-28 left-14 text-3xl z-10 text-white tracking-widest font-semibold">
          <Link href="/">DENTISTA</Link>
        </span>
      </div>
      <div className="absolute top-0 right-0">
        <img
          src="/nav_bar/Menu NavBar LandingPage.svg"
          alt="NavBar_LandingPage"
          style={{ width: "1100px", height: "auto" }}
        />
        <span className="relative -top-20 left-16 text-2xl z-10 text-white tracking-widest font-semibold">
          <Link href="/">About us</Link>
        </span>
        <span className="relative -top-20 left-28 text-2xl z-10 text-white tracking-widest font-semibold">
          <Link href="/">Cosmetic Dentistry</Link>
        </span>
        <span className="relative -top-20 left-40 text-2xl z-10 text-white tracking-widest font-semibold">
          <Link href="/">Orthodontics</Link>
        </span>
        <span className="relative -top-20 left-52 text-2xl z-10 text-white tracking-widest font-semibold">
          <Link href="/">Price</Link>
        </span>
        <span className="relative -top-20 left-60 text-2xl z-10 text-white tracking-widest font-semibold">
          <Link href="/">Contact</Link>
        </span>
        <span className="relative -top-[120px] -right-[1025px]">
          <Dropdown>
            <Dropdown.Trigger>
              <Flags.US width={40} height={40} className="relative" />
            </Dropdown.Trigger>
            {/* <Dropdown.Content>
              <Dropdown.Link href="#">English</Dropdown.Link>
              <Dropdown.Link href="#">Spanish</Dropdown.Link>
            </Dropdown.Content> */}
            <DropdownMenu>
              <DropdownItem>
                <Flags.US width={40} height={40} className="relative" />
              </DropdownItem>
              <DropdownItem>
                <Flags.ES width={40} height={40} className="relative" />
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </span>
      </div>
    </div>
  );
}
