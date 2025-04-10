import Sidebar from "./components/SideBar";
import Text from "./components/Text";

export default function App() {
  return (
    <div> {/* Corrected <dv> to <div> */}
      <Text />
      <div className="min-h-screen bg-gray-100">
        <Sidebar />
        <main className="ml-16 p-4">
          <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
        </main>
      </div>
    </div>
  );
}
