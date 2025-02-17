import { TypeFilter } from "@/components/elements/Modal";
import { useModalStore } from "@/components/elements/Modal/useModalStore";
import CardGrid, { HeroItem } from "@/components/layouts/Grid";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function HomeViews() {
  const [heroes, setHeroes] = useState<HeroItem[]>([]);
  const { submittedData } = useModalStore();

  useEffect(() => {
    fetch("https://indonesia-public-static-api.vercel.app/api/heroes")
      .then((res) => res.json())
      .then((data) => setHeroes(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  // Listener untuk memantau perubahan formState
  useEffect(() => {
    console.log("heroes berubah:", submittedData);
  }, [heroes]); // Akan dipanggil setiap kali formState berubah

  useEffect(() => {
    console.log("submittedData berubah:", submittedData);
  }, [submittedData]);

  const handleHidingFilter = () => {
    let style = {};
    if (
      submittedData?.type === "default" ||
      submittedData?.type === "" ||
      submittedData?.type == null
    ) {
      style = {
        display: "none",
      };
    } else {
      style = {
        display: "block",
      };
    }
    return style;
  };

  const handleHidingItemFilter = () => {
    let style = {};
    if (
      submittedData?.type === TypeFilter?.[1] ||
      submittedData?.type === TypeFilter?.[2] ||
      submittedData?.type === "default" ||
      submittedData?.type === "" ||
      submittedData?.type == null
    ) {
      style = {
        display: "none",
      };
    } else {
      style = {
        display: "block",
      };
    }
    return style;
  };

  const handleHidingSearch = () => {
    let style = {};
    if (
      submittedData?.type === TypeFilter?.[1] ||
      submittedData?.type === TypeFilter?.[2]
      // && submittedData?.query.length > 0
    ) {
      style = {
        display: "block",
      };
    } else {
      style = {
        display: "none",
      };
    }
    return style;
  };

  const handleHidingListContent = () => {
    let style = {};
    if (heroes.length <= 0) {
      style = {
        display: "block",
      };
    } else {
      style = {
        display: "none",
      };
    }
    return style;
  };

  return (
    <div className="top_container">
      <Head>
        <title>Home</title>
      </Head>
      <div className="header">
        <div className="text-3xl font-bold underline">Indo Heroes Web App</div>
        <p className="mt-5">
          Web info mengenai pahlawan-pahlawan tanah air indonesia
        </p>
        <div className="flex justify-center">
          <button
            // style={handleHidingSearch()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5 rounded"
          >
            Show All
          </button>
        </div>
        <div>
          <div className="mt-10 mb-5">
            <p style={handleHidingSearch()}>
              <b>Search: </b>[{submittedData?.query}]
            </p>
          </div>
          <div style={handleHidingFilter()}>
            <ul className="flex justify-center items-center gap-3">
              <li>
                <b>Filter: </b>
              </li>
              <li className="bg-slate-800 rounded-md py-1 px-3 border border-transparent text-sm text-white transition-all shadow-sm">
                by {submittedData?.type}
              </li>
              <li
                style={handleHidingItemFilter()}
                className="bg-slate-800 rounded-md py-1 px-3 border border-transparent text-sm text-white transition-all shadow-sm"
              >
                {submittedData?.startDate || "-"} s/d {submittedData?.endDate || "-"}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="column side"></div>
        <div className="column middle">
          <div
            className="flex justify-center"
            style={handleHidingListContent()}
          >
            List Empty
          </div>
          <CardGrid data={heroes} />
        </div>
        <div className="column side"></div>
      </div>
    </div>
  );
}
