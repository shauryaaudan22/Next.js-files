import Link from "next/link";

export default function Home(){
    return(<>
    <h1>Welcome Home! Brother </h1>
    <h1>to check the blogs click the below text</h1>
    <Link href="/blog">Blog</Link>

    <h2>To check about me click text below text</h2>
    <Link href="/about">About</Link>

    <h3>To check the products click the below text</h3>
    <Link href = "/products">Products</Link>
    </>);
}