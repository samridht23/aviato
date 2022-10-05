import type { NextPage } from "next";
import Main from "../components/main/Main";
import Head from "next/head";
import Sidebar from "../components/sidebar/Sidebar";
import Right from "../components/right/Right";
const Count = Array.from({ length: 10 }).map(
  (_, i, a) => a.length - i
);
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Aviato.</title>
        <meta name="description" content="Aviato" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex bg-gray-50 w-full justify-center">
          <div className="flex h-screen sticky top-16 items-center">
            <div className="hidden lg:block">
              <Sidebar />
            </div>
          </div>
          <div className="my-16">
            {Count.map((tag) => <Main key={tag} />)}
          </div>
          <div className="hidden xl:flex h-screen sticky top-16 items-start">
            <Right />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
