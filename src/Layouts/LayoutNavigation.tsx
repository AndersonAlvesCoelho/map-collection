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

          <Outlet />
        </main>
      </div>
    </DarkModeContextProvider>
  );
}
