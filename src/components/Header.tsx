// IMPORTS
import { useState, useEffect } from "react";

//ASSETS
import {Star, Clock, Paperclip, MapPin } from "lucide-react";

export default function Header() {
 

  return (
    <header className="items-center p-4 border-b-2 shadow-sm border-concrete-900 bg-[#393646] dark:bg-gray-800 ">
      <div className="w-full mx-auto items-center flex justify-between px-4">
        <a className="block text-teal-600" href="/">
          <span className="sr-only">Home</span>
          <MapPin color="black" size={32} />
        </a>

        <div className="flex items-center justify-between">
          <nav className="flex items-center gap-6 text-sm">
            <a className="p-2 outline-0 outline-zinc-500 rounded-md hover:outline-1 hover:bg-slate-300/20">
              <Star color="black" size={16} />
            </a>
            <a className="p-2 outline-0 outline-zinc-500 rounded-md hover:outline-1 hover:bg-slate-300/20">
              <Clock color="black" size={16} />
            </a>
            <div className="bg-gray-500 w-0.5 py-2.5"></div>
            <a className="p-2 outline-0 outline-zinc-500 rounded-md hover:outline-1 hover:bg-slate-300/20">
              <Paperclip
                color="black"
                size={16}
              />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
