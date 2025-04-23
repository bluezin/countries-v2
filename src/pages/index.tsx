import Head from "next/head";
import App from "../components/App";
import "@/styles/global.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Countries V2</title>
        <meta name="description" content="Countries v2 app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <App />
    </>
  );
}

export const getServerSideProps = () => {
  return {
    props: {},
  };
};
