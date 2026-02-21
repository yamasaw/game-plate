import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "@/components/Layout";
import GamePage from "@/pages/GamePage";
import ForgePage from "@/pages/ForgePage";
import ExplorePage from "@/pages/ExplorePage";
import ShopPage from "@/pages/ShopPage";
import SettingsPage from "@/pages/SettingsPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Navigate to="/game" replace />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/forge" element={<ForgePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  );
}
