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

const homeRoutes: Map<string, Routes> = new Map();
homeRoutes.set("/", {
  title: "Home",
  url: "/",
  icon: House,
});

const resourceRoutes: Map<string, Routes> = new Map();
resourceRoutes.set("/marketplace", {
  title: "Marketplace",
  url: "/marketplace",
  icon: ChartColumn,
});
resourceRoutes.set("/profile", {
  title: "Character Profile",
  url: "/profile",
  icon: User,
});
resourceRoutes.set("/money", {
  title: "Moneymakers",
  url: "/money",
  icon: Coins,
});
resourceRoutes.set("/exp", {
  title: "EXP Calculator",
  url: "/exp",
  icon: Sprout,
});

const allRoutes: Map<string, Routes> = new Map([
  ...homeRoutes.entries(),
  ...resourceRoutes.entries(),
]);

export { allRoutes, homeRoutes, resourceRoutes };
