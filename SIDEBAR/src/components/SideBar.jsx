import { useState } from "react";
import { Home, Settings, User, Menu } from "lucide-react";
import { motion } from "framer-motion";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleMobileSidebar = () => setIsMobileOpen(!isMobileOpen);

  return (
    <>
      {/* Navbar with Menu Icon */}
      <nav className="fixed top-0 left-0 w-full p-4 bg-gray-900 text-white flex items-center">
        <span className={`text-xl font-bold transition-all ${isOpen ? "block" : "hidden"}`}>
          Logo
        </span>
        <button
          className="ml-4 p-2 bg-gray-800 rounded hover:bg-gray-700 transition-all"
          onClick={toggleSidebar}
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Sidebar for PC */}
      <motion.aside
        animate={{ width: isOpen ? 200 : 60 }}
        className="fixed left-0 top-0 h-full bg-gray-800 text-white flex flex-col items-center pt-16"
      >
        <button className="p-3 mt-2 hover:bg-gray-700 rounded" title="Home">
          <Home size={24} />
        </button>
        <button className="p-3 mt-2 hover:bg-gray-700 rounded" title="User">
          <User size={24} />
        </button>
        <button className="p-3 mt-2 hover:bg-gray-700 rounded" title="Settings">
          <Settings size={24} />
        </button>
      </motion.aside>

      {/* Floating Menu Button for Mobile */}
      <button
        className="fixed bottom-4 right-4 p-3 bg-gray-900 text-white rounded-full shadow-lg"
        onClick={toggleMobileSidebar}
      >
        <Menu size={24} />
      </button>

      {/* Sidebar for Mobile */}
      {isMobileOpen && (
        <motion.aside
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          className="fixed right-0 top-0 h-full w-1/2 bg-gray-900 text-white flex flex-col items-center pt-16"
        >
          <button className="p-3 mt-2 hover:bg-gray-700 rounded" onClick={toggleMobileSidebar}>
            Close
          </button>
          <button className="p-3 mt-2 hover:bg-gray-700 rounded" title="Home">
            <Home size={24} />
          </button>
          <button className="p-3 mt-2 hover:bg-gray-700 rounded" title="User">
            <User size={24} />
          </button>
          <button className="p-3 mt-2 hover:bg-gray-700 rounded" title="Settings">
            <Settings size={24} />
          </button>
        </motion.aside>
      )}
    </>
  );
}
