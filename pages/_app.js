import "@/styles/globals.css";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return <>
  <Navigation/>
    <Component {...pageProps} />
  </>
}

function Navigation() {
  return (
    <>
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/course">Course</Link>
    </>
  );
}
