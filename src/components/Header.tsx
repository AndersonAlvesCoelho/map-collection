// IMPORTS
import { useState, useEffect } from "react";

// CONTEXT
import { useDarkMode } from "../context/DarkModeContext";

//ASSETS
import { Moon, Sun, Star, Clock, Paperclip, MapPin } from "lucide-react";

export default function Header() {
  const { handleThemeSwitch, theme } = useDarkMode();
 

  return (
    <header className="items-center p-4 border-b-2 border-gray-400 shadow-sm bg-gray-100 dark:bg-gray-800 ">
      <div className="w-full mx-auto items-center flex justify-between px-4">
        <a className="block text-teal-600" href="/">
          <span className="sr-only">Home</span>
          <MapPin color={theme === "light" ? "gray" : "white"} size={32} />
        </a>

        <div className="flex items-center justify-between">
          <nav className="flex items-center gap-6 text-sm">
            <a className="p-2 outline-0 outline-zinc-500 rounded-md hover:outline-1 hover:bg-slate-300/20">
              <Star color={theme === "light" ? "gray" : "white"} size={16} />
            </a>
            <a className="p-2 outline-0 outline-zinc-500 rounded-md hover:outline-1 hover:bg-slate-300/20">
              <Clock color={theme === "light" ? "gray" : "white"} size={16} />
            </a>
            <button
              onClick={handleThemeSwitch}
              className="p-2 outline-0 outline-zinc-500 rounded-md hover:outline-1 hover:bg-slate-300/20"
            >
              {theme === "light" ? <Moon color="gray" size={16} /> : null}
              {theme === "dark" ? <Sun color="white" size={16} /> : null}
            </button>
            <div className="bg-gray-500 w-0.5 py-2.5"></div>
            <a className="p-2 outline-0 outline-zinc-500 rounded-md hover:outline-1 hover:bg-slate-300/20">
              <Paperclip
                color={theme === "light" ? "gray" : "white"}
                size={16}
              />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
