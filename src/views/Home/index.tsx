import CardGrid, { HeroItem } from "@/components/layouts/Grid";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function HomeViews() {
  const [heroes, setHeroes] = useState<HeroItem[]>([]);

  useEffect(() => {
    fetch("https://indonesia-public-static-api.vercel.app/api/heroes")
      .then((res) => res.json())
      .then((data) => setHeroes(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="top_container">
      <Head>
        <title>Home</title>
      </Head>
      <div className="header">
        <div className="text-3xl font-bold underline">Indo Heroes Web App</div>
      </div>
      <div className="row">
        <div className="column side"></div>
        <div className="column middle">
        <CardGrid data={heroes} />
        </div>
        <div className="column side"></div>
      </div>
    </div>
  );
}
