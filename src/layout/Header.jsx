import React, { useState } from "react";
import { SlBasket } from "react-icons/sl";
import { BiUserCircle } from "react-icons/bi";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuItems = [
    {
      name: "Profile",
      url: "/profile",
    },
    {
      name: "Admin",
      url: "/admin",
    },
    {
      name: "Logout",
      url: "/logout",
    }
  ];
  return (
    <div className="bg-gray-100 h-16 px-10 flex items-center justify-between">
      <div className="text-3xl">E Commerce</div>
      <div className="flex items-center gap-5">

        {/* search */}
        <div className="flex items-center">
          <input className="p-2 outline-none" type="text" placeholder="Search" />
          <div className="p-2 ml-1 bg-white cursor-pointer">Search</div>
        </div>

        {/* user */}
        <div className="relative ">
          <BiUserCircle onClick={()=>setOpenMenu(!openMenu)} className="w-8 h-8 rounded-full cursor-pointer"/>
          <div className="absolute right-0 mt-3 w-[200px] bg-white shadow-lg shadow-gray-300">
            {openMenu && menuItems.map((item, i) => (
              <div className="px-2 py-1 hover:bg-gray-100" key={i}>{item.name}</div>
            ))}
          </div>
        </div>

        {/* basket */}
        <div className="relative">
          <SlBasket size={25}/>
          <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center font-bold">4</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
