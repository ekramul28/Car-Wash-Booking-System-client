import Sidebar from "@/pages/Dashboard/Sidebar/Sidebar";
import { TooltipProvider } from "../ui/tooltip";
import { Outlet } from "react-router-dom";

export function Dashboard() {
  return (
    <TooltipProvider>
      <div className="flex min-h-screen w-full flex-col bg-white bg-muted/40">
        <Sidebar />
        <div>
          <Outlet />
        </div>
      </div>
    </TooltipProvider>
  );
}
