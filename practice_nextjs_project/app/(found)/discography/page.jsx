import Image from "next/image";
import Link from "next/link";
import { RECORDS } from "../record/[id]/data";

export default function Page() {
  return (
    <div>
      {RECORDS.map(
        ({ id, title, date, blurb, albumImage, recordHalfImage }) => (
          <div key={id}>
            <div className="w-[330px] lg:w-[500px] bg-white p-5 lg:p-10 text-left ">
              <Link
                href={`/record/${id}`}
                className="flex flex-row jutify-center"
              >
                <div className="relative w-[180px] h-[180px] lg:w-[256px] lg:h-[256px]">
                  <Image
                    src={albumImage}
                    fill
                    alt="album image"
                    sizes="(max-width: 1024px) 180px, 256px"
                    priority
                     />
                </div>
                <div className="relative w-[90px] h-[180px] lg:w-[128px] lg:h-[256px]">
                  <Image
                   src={recordHalfImage}
                   fill
                   alt="record image"
                   sizes="(max-width: 1024px) 90px, 128px"
                   />
                </div>
              </Link>
              {/* <Link
                href={`/record/${id}`}
                className="flex flex-row jutify-center"
              >
                <Image src={albumImage} width={256} height={256} />
                <Image src={recordHalfImage} width={128} height={256} />
              </Link> */}
              {title}
              <div className="text-justify text-md lg:-text-lg">{blurb}</div>
              <div className="text-sm text-slate-600">Release date: {date}</div>
            </div>
            <br />
          </div>
        )
      )}
    </div>
  );
}
