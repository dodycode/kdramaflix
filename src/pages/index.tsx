import Head from "next/head";
import Navbar from "@/components/modules/Navbar";
import Billboard from "@/components/modules/Billboard";

export default function Home(props: any) {
  return (
    <>
      <Head>
        <title>Kdrama Flix | Your favorite KDrama Databases</title>
        <meta name="description" content="Kdrama Flix" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Billboard />
    </>
  )
}
