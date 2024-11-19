import { Trees } from "lucide-react";
import Link from "next/link";
import { useTitleContext } from "../providers/TitleProvider";
import { homeRoutes } from "./Router";

export default function Logo() {
  const { setTitle } = useTitleContext();

  return (
    <div className="flex flex-row gap-2 py-2 px-2 items-center">
      <Trees size={40} />
      <Link href="/" onClick={() => setTitle(homeRoutes[0].title)}>
        <h4 className="pt-1">Idle Companion</h4>
      </Link>
    </div>
  );
}
