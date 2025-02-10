import CardGrid from "@/components/layouts/Grid";
import Head from "next/head";

export default function HomeViews() {
  return (
    <div className="top_container">
      <Head>
        <title>Home</title>
      </Head>
      <div className="header">
        <div className="text-3xl font-bold underline">HomePage</div>
      </div>
      <div className="row">
        <div className="column side"></div>
        <div className="column middle">
          <CardGrid/>
        </div>
        <div className="column side"></div>
      </div>
    </div>
  );
}
