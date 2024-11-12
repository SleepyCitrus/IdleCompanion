import { House, LucideProps, Store } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export interface Routes {
  title: string;
  url: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}

export const basePath = "/IdleCompanion";

export const homeRoutes: Routes[] = [
  {
    title: "Home",
    url: "/",
    icon: House,
  },
];

export const resourceRoutes: Routes[] = [
  {
    title: "Marketplace",
    url: "/marketplace",
    icon: Store,
  },
];

export const allRoutes: Routes[] = [...homeRoutes, ...resourceRoutes];
