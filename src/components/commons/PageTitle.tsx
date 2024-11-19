"use client";

import { useTitleContext } from "../providers/TitleProvider";

export default function PageTitle() {
  const { title } = useTitleContext();

  return (
    <div className="flex flex-row p-3 pl-0 pb-7 gap-2 items-center">
      <h2>{title}</h2>
    </div>
  );
}
