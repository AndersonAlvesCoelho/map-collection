import { Routes, Route } from "react-router-dom";
import LayoutNavigation from "./Layouts/LayoutNavigation";
import HomePage from "./pages";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutNavigation />}>
        <Route index element={<HomePage />} />
      </Route>

      <Route path="*" element={<h1>Pagina inexistente!</h1>} />
    </Routes>
  );
}
