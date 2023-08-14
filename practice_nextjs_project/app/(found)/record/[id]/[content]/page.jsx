import Player from "../player";
import { RECORDS, CONTENT_PATHS, RECORDS_MAP } from "../data";

export async function generateStaticParams() {
  const recordSegmaenMaps = []

  RECORDS.forEach((record) => {
    CONTENT_PATHS.forEach((contentPath) => {
      recordSegmaenMaps.push({id: record.id, content: contentPath})
    })
  })

  return recordSegmaenMaps;
}

export default function Page({params: {id, content}}) {
  const contentJsx = RECORDS_MAP[id][content];
  //in-propertuity-id.gear
  //in-propertuity-id.content
  //poison-worms-id-id.gear
  //poison-worms-id-id.content
  const { Embed } = RECORDS_MAP[id];

  return (
    <>
      <Player embed={<Embed/>} />
      <br />
      {contentJsx}
    </>
  ) 
}