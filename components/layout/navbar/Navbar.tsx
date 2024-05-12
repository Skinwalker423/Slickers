import Image from "next/image";
import Link from "next/link";
import React from "react";
import { UserNav } from "./UserNav";

export const Navbar = () => {
  return (
    <nav className='w-full border-b'>
      <div className='flex items-center justify-between container px-10 lg:px-10 py-3'>
        <Link href={"/"}>
          <Image
            src={"/slickers-logo-icon.png"}
            alt='slickers logo'
            className='object-cover hidden lg:block'
            width={192}
            height={72}
          />
          <Image
            src={"/slickers-logo-mobile.png"}
            alt='slickers logo mobile'
            className='object-cover lg:hidden'
            width={72}
            height={72}
          />
        </Link>
        <div className='py-2 px-5 border rounded-full'>
          Search bar
        </div>
        <UserNav />
      </div>
    </nav>
  );
};
