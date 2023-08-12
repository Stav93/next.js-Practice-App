import { RECORDS, RECORDS_MAP } from "./data";

export async function generateStaticParams() {
  return RECORDS.map((record) => ({
    id: record.id,
  }));
}

export default function Page({ params }) {
  const { id } = params;
  const { date, blurb } = RECORDS_MAP[id];

  return (
    <>
      <div className="text-justify">{blurb}</div>
      <div classNAme="text-sm text-slate-600">
        Release Date: {date}
      </div>
    </>
  )
}
