import Link from "next/link"

export default function notFound() {
  return (
    <div>
       <div className="font-ranga text-4xl"> 404 - page not found </div>
       <div className="font-roboto text-2xl" > Try going to <Link className="link" href="/">home page</Link></div>
    </div>
  )
}
