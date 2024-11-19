import {
  ChartColumn,
  Coins,
  House,
  LucideProps,
  Sprout,
  User,
} from "lucide-react";
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
    icon: ChartColumn,
  },
  {
    title: "Character Profile",
    url: "/profile",
    icon: User,
  },
  {
    title: "Moneymakers",
    url: "/money",
    icon: Coins,
  },
  {
    title: "EXP Calculator",
    url: "/exp",
    icon: Sprout,
  },
];

export const allRoutes: Routes[] = [...homeRoutes, ...resourceRoutes];
