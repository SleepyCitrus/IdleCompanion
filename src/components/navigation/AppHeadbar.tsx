import { SidebarTrigger } from "../ui/sidebar";
import { Routes } from "./Router";

export default function AppHeadbar({ active }: { active?: Routes }) {
  const getTitle = (active?: Routes) => {
    return active?.title ?? "Title";
  };

  return (
    <div className="flex flex-row p-4 pt-7 gap-2 items-center">
      <SidebarTrigger />
      <h2>{getTitle(active)}</h2>
    </div>
  );
}
