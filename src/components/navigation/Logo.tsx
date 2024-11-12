import { Trees } from "lucide-react";
import Link from "next/link";
import { homeRoutes, Routes } from "./Router";

export default function Logo({
  setActive,
}: {
  setActive: (activeLink: Routes) => void;
}) {
  return (
    <div className="flex flex-row gap-2 py-4 px-2 items-center">
      <Trees size={40} />
      <Link href="/" onClick={() => setActive(homeRoutes[0])}>
        <h4 className="pt-1">Idle Companion</h4>
      </Link>
    </div>
  );
}
