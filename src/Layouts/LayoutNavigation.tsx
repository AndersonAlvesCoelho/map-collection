// IMPORTS
import { Outlet } from "react-router-dom";
import { Header, Sidebar } from "../components";

// CONTEXT
import { DarkModeContextProvider } from "../context/DarkModeContext";

export default function LayoutNavigation() {
  return (
    <DarkModeContextProvider>
      <div className="bg-white dark:bg-gray-900">
        <Sidebar />
        <main className="relative md:ml-64">
          <Header />

          <div className="px-4 md:px-10 mx-auto w-full -m-24 md:pt-32 pb-32 pt-12">
            <Outlet />
          </div>
        </main>
      </div>
    </DarkModeContextProvider>
  );
}
