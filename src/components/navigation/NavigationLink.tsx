import { NavLink } from "@mantine/core";
import { ReactNode } from "react";

export default function NavigationLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: ReactNode;
}) {
  return <NavLink href={href} label={label} leftSection={icon} />;
}
