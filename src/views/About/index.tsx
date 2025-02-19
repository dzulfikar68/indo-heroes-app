import Head from "next/head";

const AboutViews = () => {
  return (
    <div className="top_container">
      <Head>
        <title>About</title>
      </Head>
      <div className="container mx-auto p-5">
      <div className="text-3xl font-bold underline">About</div>
      <p className="mt-5"><i>Web info about Indonesian heroes created by <b><a target="_blank" href="https://dzulfikar68.github.io">Dzulfikar Fauzi</a></b>, this website is useful for finding information about heroes in Indonesia (hero data updated until 2022). taken from API: <b><a target="_blank" href="https://github.com/yogski/indonesia-public-static-api?tab=readme-ov-file#api-pahlawan-nasional-indonesia-apiheroes">API Indo Heroes</a></b>,
       and this project is open source can be accessed code and modified at: <b><a target="_blank" href="https://github.com/dzulfikar68/indo-heroes-app">Github Indo Heroes Web App</a></b></i></p>
      </div>
    </div>
  );
};

export default AboutViews;
