import { RECORDS, RECORDS_MAP } from "./data";
import Player from "./player";

export async function generateStaticParams() {
  return RECORDS.map((record) => ({
    id: record.id,
  }));
}

export default function Page({ params }) {
  const { id } = params;
  const { date, blurb, Embed } = RECORDS_MAP[id];

  return (
    <>
      <div className="text-justify">{blurb}</div>
      <div classNAme="text-sm text-slate-600">Release Date: {date}</div>
      <Player embed={<Embed/>} />
    </>
  );
}
