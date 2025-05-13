import Link from "next/link";
import React from "react";


const Navbar = () => {
  const navlinks = [
    {name: "Home", src:"/" },
    {name: "New Flat", src: "/new-flat"},
    {name: "My Favs", src:"/favorites"},
    {name: "My Flats", src: "/my-flats"}
  ]
  return (
    <nav>
      <div className="container mx-auto flex items-center justify-between p-4 ">
      <div>
        <img src={"/images/logo.svg"}/>
      </div>
      <ul className="flex justify-between gap-6">
        {navlinks.map((link)=> {
          return <li key={link.name}><Link href={link.src}>{link.name}</Link></li>
        })}
      </ul>
      <div>
        <Link href="/auth/login">Login</Link>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
