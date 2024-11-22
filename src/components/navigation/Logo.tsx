import { FlameKindling } from "lucide-react";
import Link from "next/link";
import { useTitleContext } from "../providers/TitleProvider";
import { homeRoutes } from "./Router";

export default function Logo() {
  const { setTitle } = useTitleContext();

  const homeRoute = homeRoutes.get("/");
  const homeTitle = homeRoute ? homeRoute.title : "";

  return (
    <div className="flex flex-row py-2 px-2 justify-center basis-full md:min-w-0 items-center">
      <FlameKindling size={40} />
      <Link
        href="/"
        onClick={() => setTitle(homeTitle)}
        className="pt-1"
      >
        <h4 className="pt-1">Idle Companion</h4>
      </Link>
    </div>
  );
}
