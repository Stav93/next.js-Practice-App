"use client";

import { usePathname, useSelectedLayoutSegments } from "next/navigation";
import LayoutStracture from "../../../components/layout-structure";
import SegmentBreadcrumbs from './../../../components/segment-breadcrumbs';
import { RECORDS_MAP, findIdByPathname, SEGMENT_TITLES_MAP } from "./[id]/data";

export default function Layout({ children }) {
  const pathname = usePathname();
  const segments = useSelectedLayoutSegments();
  console.log("pathname ", pathname);
  console.log("segments ", segments);

  const id = findIdByPathname(pathname);
  const { background } = RECORDS_MAP[id];
  return (
    <LayoutStracture
      title={
        <SegmentBreadcrumbs
         segments={segments}
          startingSegment={"/record"}
          segmentTitlesMap={SEGMENT_TITLES_MAP} 
        />
      }
      background={background}
    >
      <div className="flex flex-col items-center">{children}</div>
    </LayoutStracture>
  );
}
