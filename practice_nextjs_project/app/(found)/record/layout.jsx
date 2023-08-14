"use client";

import { usePathname } from "next/navigation";
import LayoutStracture from "../../../components/layout-structure";
import { RECORDS_MAP, findIdByPathname } from "./[id]/data";

export default function Layout({ children }) {
  const pathname = usePathname();
  console.log("pathname ", pathname);
  const id = findIdByPathname(pathname);
  const { title, background } = RECORDS_MAP[id];
  return (
    <LayoutStracture title={title} background={background}>
      <div className="flex flex-col items-center">{children}</div>
    </LayoutStracture>
  );
}
