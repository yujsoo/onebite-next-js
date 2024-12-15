import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const onClick = () => {
    router.push('/test')
  }
  
  // test에 대한 프리페칭
  useEffect(() => {
    router.prefetch('/test')
  },[])

  return <>
    <header>
      <Link href={'/'}>홈</Link>
      &nbsp;
      <Link href={'/search'} prefetch={false}>search</Link>
      &nbsp;
      <Link href={'/book/1'}>book</Link>
      <div>
        <button type="button" onClick={onClick}>/test페이지로 이동</button>
      </div>
    </header>
    <Component {...pageProps} />
  </>
}
