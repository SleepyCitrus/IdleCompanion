import { FlameKindling } from "lucide-react";
import Link from "next/link";
import { useTitleContext } from "../providers/TitleProvider";
import { homeRoutes } from "./Router";

export default function Logo() {
  const { setTitle } = useTitleContext();

  return (
    <div className="flex flex-row py-2 px-2 justify-center basis-full min-w-[var(--min-supported-screen)] md:min-w-0">
      <FlameKindling size={40} />
      <Link
        href="/"
        onClick={() => setTitle(homeRoutes[0].title)}
        className="pt-1"
      >
        <h4 className="pt-1">Idle Companion</h4>
      </Link>
    </div>
  );
}
