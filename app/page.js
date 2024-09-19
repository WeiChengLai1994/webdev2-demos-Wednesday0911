import Link from "next/link"
export default function Page(){
  return(
    <div className="m-8">
      <h1 className="font-bold">Web Dev 2</h1>
      <p>Demos for web dev 2</p>
      
        <Link href={"/week-2"} className="bg-teal-700 m-2 text-lime-100"> Week 2</Link>
        <br />
        <Link href={"/week-3"} className="bg-teal-700 m-2  text-lime-100"> Week 3</Link>
      
    </div>
  )
}