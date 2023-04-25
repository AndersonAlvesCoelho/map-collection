import { Map, LocateFixed, ChevronDown } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="left-0 top-0 bottom-0 block fixed flex-row flex-nowrap overflow-y-auto overflow-hidden w-64 border-b-2 border-gray-400 shadow-sm bg-gray-100 dark:bg-gray-800">
      <nav className="mt-6 flex flex-col space-y-1">
        <hr className="my-4 md:min-w-full" />

        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-zinc-200 hover:text-gray-700">
            <div className="flex items-center gap-2">
              <LocateFixed color={"white"} size={16} />
              <span className="text-sm font-medium"> Teams </span>
            </div>

            <span className="shrink-0 transition duration-300 group-open:-rotate-180">
              <ChevronDown color={"white"} size={16} />
            </span>
          </summary>

          <nav aria-label="Teams Nav" className="mt-2 flex flex-col px-4">
            <a
              href="#"
              className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-zinc-200 hover:text-gray-700"
            >
              <LocateFixed color={"white"} size={16} />
              <span className="text-sm font-medium"> Banned Users </span>
            </a>
          </nav>
        </details>

        {Array(120)
          .fill(null)
          .map((_, index) => (
            <a
              key={index}
              href="#"
              className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-zinc-200 hover:text-gray-700"
            >
              <Map color={"white"} size={16} />

              <span className="text-sm font-medium"> Billing {index}</span>
            </a>
          ))}
      </nav>
    </aside>
  );
}
