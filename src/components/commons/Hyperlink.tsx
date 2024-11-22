"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { allRoutes } from "../navigation/Router";
import { useTitleContext } from "../providers/TitleProvider";

interface HyperlinkProps {
  href: string;
  text: string;
  blank?: boolean;
  className?: string | undefined;
}

export default function Hyperlink({
  href,
  text,
  blank = false,
  className,
  ...props
}: HyperlinkProps) {
  const { setTitle } = useTitleContext();
  const getTitleFromRoutes = (href: string) => {
    const route = allRoutes.get(href);
    return route ? route.title : "";
  };

  return (
    <Link
      href={href}
      target={blank ? "_blank" : "_self"}
      className={cn(
        "underline underline-offset-4 text-[color:hsl(var(--link-primary))] hover:text-[color:hsl(var(--link-accent))] font-semibold",
        className
      )}
      onClick={() => setTitle(getTitleFromRoutes(href))}
      {...props}
    >
      {text}
    </Link>
  );
}
