import Link from "next/link"
export default function Page(){
  return(
    <div>
      <h1>Web Dev 2 Demos</h1>
      <p>Demos for web dev 2</p>
      <li>
        <Link href={"/week-2"}> Week 2</Link>
        <Link href={"/week-3"}> Week 3</Link>
      </li>
    </div>
  )
}