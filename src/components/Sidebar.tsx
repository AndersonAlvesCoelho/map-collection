// CONTEXT
import { SearchMapModal } from ".";

// ASSETS
import { Map, LocateFixed, ChevronDown } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="left-0 top-0 bottom-0 block fixed flex-row flex-nowrap overflow-y-auto overflow-hidden w-64 shadow-sm border bg-viridian-50">
      <nav className="mt-6 flex flex-col gap-2 px-2">
        <h1 className="flex items-center gap-2 px-4 py-2 rounded-lg bg-viridian-500 ">
          <LocateFixed size={18} className="text-chamois-50" />
          <span className="text-xl text-chamois-50">Banned Users</span>
        </h1>

        <SearchMapModal />

        <hr className="my-4 md:min-w-full" />

        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2">
            <div className="flex items-center gap-2">
              <LocateFixed color="black" size={16} />
              <span className="text-sm font-medium text-dune-900"> Teams </span>
            </div>

            <span className="shrink-0 transition duration-300 group-open:-rotate-180">
              <ChevronDown color="black" size={16} />
            </span>
          </summary>

          <nav aria-label="Teams Nav" className="mt-2 flex flex-col px-4">
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 rounded-md hover:scale-105 hover:bg-viridian-200 active:bg-viridian-500 transition duration-800 ease-in-out"
            >
              <LocateFixed color="black" size={16} />
              <span className="text-sm font-medium text-dune-900">
                {" "}
                Banned Users{" "}
              </span>
            </a>
          </nav>
        </details>

        {Array(120)
          .fill(null)
          .map((_, index) => (
            <a
              key={index}
              href="#"
              className="flex items-center gap-2 px-4 py-2 rounded-md hover:scale-105 hover:bg-viridian-200 active:bg-viridian-500 transition duration-800 ease-in-out"
            >
              <Map color="black" size={16} />
              <span className="text-sm font-medium text-dune-900">
                {" "}
                Billing {index}
              </span>
            </a>
          ))}
      </nav>
    </aside>
  );
}
