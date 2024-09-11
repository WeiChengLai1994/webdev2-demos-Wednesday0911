import Heading from "./heading";
import Link from "next/link"
export default function Page(){
    let a = 5;
    let b = 10;



    return(
        <main>
            <Heading/>
            <Heading/>
            <Heading/>
            <p>These are the demos content for week2</p>
            <p>The sum of a + b is {a+b}.</p>
            <p>
                Go back to <Link href={"/"}>HomePage</Link>
            </p>
        </main>
    )
}