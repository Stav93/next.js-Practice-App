import { RECORDS } from "../record/[id]/data";

export default function Page() {
  return (
    <div>
      {RECORDS.map(({ id, title, date, blurb }) => (
        <div key={id}>
          <div className="w-[330px] lg:w-[500px] bg-white p-5 lg:p-10 text-left ">
            {title}
            <div className="text-justify text-md lg:-text-lg">{blurb}</div>
            <div className="text-sm text-slate-600">Release date: {date}</div>
          </div>
          <br />
        </div>
      ))}
    </div>
  );
}
