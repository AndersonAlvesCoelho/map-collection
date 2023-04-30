//ASSETS
import { Star, Clock, Paperclip, MapPin } from "lucide-react";

export default function Header() {
  return (
    <header className="items-center p-4 border-b-2 shadow-sm border bg-viridian-50 ">
      <div className="w-full mx-auto items-center flex justify-between px-4">
        <a className="p-2 outline-0 rounded-md hover:outline-1 hover:bg-viridian-200 active:bg-viridian-500">
          <span className="sr-only">Home</span>
          <MapPin size={32} className="text-dune-900" />
        </a>

        <div className="flex items-center justify-between">
          <nav className="flex items-center gap-6 text-sm">
            <a className="p-2 rounded-md hover:scale-105 hover:bg-viridian-200 active:bg-viridian-500 transition duration-800 ease-in-out">
              <Star size={16} className="text-dune-900" />
            </a>
            <a className="p-2 outline-0 rounded-md hover:outline-1 hover:bg-viridian-200 active:bg-viridian-500">
              <Clock size={16} className="text-dune-900" />
            </a>
            <div className="bg-gray-500 w-0.5 py-2.5"></div>
            <a className="p-2 outline-0 rounded-md hover:outline-1 hover:bg-viridian-200 active:bg-viridian-500">
              <Paperclip size={16} className="text-dune-900" />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
