import { useState } from "react";

// COMPONENTS
import { Dialog } from "@headlessui/react";

// CONTEXT
import { useDarkMode } from "../../context/DarkModeContext";

// ASSETS
import { Search } from "lucide-react";

export default function SearchMapModal() {
  const { theme } = useDarkMode();

  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center border border-zinc-300 rounded-lg px-4 py-2 bg-white hover:bg-white/5 dark:bg-zinc-700/50 hover:dark:bg-white/5"
      >
        <span className="text-sm font-medium text-gray-500 hover:text-gray-700">
          {" "}
          Pesquisar map{" "}
        </span>
        <Search color={theme === "light" ? "gray" : "white"} size={16} />
      </button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <Dialog.Panel>
          <Dialog.Title>Deactivate account</Dialog.Title>
          <Dialog.Description>
            This will permanently deactivate your account
          </Dialog.Description>

          <p>
            Are you sure you want to deactivate your account? All of your data
            will be permanently removed. This action cannot be undone.
          </p>

          <button onClick={() => setIsOpen(false)}>Deactivate</button>
          <button onClick={() => setIsOpen(false)}>Cancel</button>
        </Dialog.Panel>
      </Dialog>
    </>
  );
}
