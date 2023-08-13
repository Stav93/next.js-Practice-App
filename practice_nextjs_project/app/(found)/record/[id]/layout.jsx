import LayoutStracture from "../../../../components/layout-structure";
import { RECORDS, RECORDS_MAP } from "./data";

export const dynamicParams = false;

export async function generateStaticParams() {
  return RECORDS.map((record) => ({
    id: record.id,
  }));
}

export async function generateMetadata({ params }) {
  const { id } = params;
  const { title } = RECORDS_MAP[id];

  return { title: `${title} - Daviv Kando` };
}

export default function Layout({ children, params }) {
  const { id } = params;
  const { title, background } = RECORDS_MAP[id];
  return (
    <LayoutStracture title={title} background={background}>
      <div className="flex flex-col items-center">{children}</div>
    </LayoutStracture>
  );
}
