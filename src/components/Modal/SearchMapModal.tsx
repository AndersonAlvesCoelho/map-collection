import { Fragment, useState } from "react";

// COMPONENTS
import { Dialog, Transition } from "@headlessui/react";
// ASSETS
import { Search } from "lucide-react";

export default function SearchMapModal() {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        onClick={openModal}
        className="flex justify-between items-center px-4 py-2 rounded-md border bg-dune-50 hover:scale-105 hover:bg-white transition duration-800 ease-in-out"
      >
        <span className="text-sm font-medium text-dune-400 hover:text-dune-900">
          Pesquisar mapa
        </span>
        <Search size={18} className="text-dune-900" />
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10 " onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="max-w-4xl flex flex-col gap-6 rounded-2xl bg-chamois-50 align-middle shadow-xl transition-all">
                  <form className="flex border-b border-gray-200 mt-2">
                    <button className="px-3 border-none">
                      <Search size={18} className="text-dune-900" />
                    </button>

                    <input
                      type="text"
                      id="search"
                      placeholder="Pesquisar mapa..."
                      className="flex-1 text-xl h-8 w-full border-none bg-transparent  focus:border-transparent focus:outline-none focus:ring-0"
                    />
                  </form>

                  <div className="mt-2 h-80 overflow-auto">
                    {Array(20)
                      .fill(null)
                      .map((_, index) => (
                        <p key={index}>Caros amigos, o início da atividade geral de formação de atitudes deve passar por modificações independentemente das condições financeiras e administrativas exigidas.
                        - {index}</p>
                      ))}
                  </div>

                  <div className="h-full bottom-0 border-t-2">
                    <p>Footer...</p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
