import { Outlet } from "react-router-dom";
import BottomNav from "@/components/BottomNav";

export default function Layout() {
  return (
    <div className="flex flex-col h-[100dvh] overflow-hidden">
      <main className="flex-1 overflow-hidden relative">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
}
