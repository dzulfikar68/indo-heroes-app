import { TypeFilter } from "@/components/elements/Modal";
import { useModalStore } from "@/components/elements/Modal/useModalStore";
import CardGrid, { HeroItem } from "@/components/layouts/Grid";
import ApiRequest from "@/utils/ApiRequest";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useShowStore } from "./useShowStore";

export default function HomeViews() {
  const [heroes, setHeroes] = useState<HeroItem[]>([]);
  // const [isShow, setIsShow] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { submittedData } = useModalStore();
  const { isShow, setIsShow } = useShowStore();

  useEffect(() => {
    if (isShow) {
      fetch(
        ApiRequest(
          submittedData?.type || "",
          submittedData?.query || "",
          submittedData?.startDate || "",
          submittedData?.endDate || ""
        )
      )
        .then((res) => {
          setIsLoading(true);
          return res.json();
        })
        .then((data) => {
          setIsLoading(false);
          setHeroes(data);
        })
        .catch((err) => {
          setIsLoading(false);
          console.error("Error fetching data:", err);
        });
    }
  }, [isShow, submittedData]);

  // Listener untuk memantau perubahan formState
  // useEffect(() => {
  //   console.log("heroes berubah:", heroes);
  // }, [heroes]); // Akan dipanggil setiap kali formState berubah

  // useEffect(() => {
  //   console.log("submittedData berubah:", submittedData);
  // }, [submittedData]);

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
      if (isShow) {
        style = {
          display: "block",
        };
      } else {
        style = {
          display: "none",
        };
      }
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
      (submittedData?.type === TypeFilter?.[1] ||
        submittedData?.type === TypeFilter?.[2]) &&
      isShow
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
    if (heroes.length <= 0 && isShow) {
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
        {!isShow && (
          <div className="flex justify-center">
            <img src="./heroes.png" className="h-[300px] mb-10"></img>
          </div>
        )}
        <div className="text-3xl font-bold underline">Indo Heroes Web App</div>
        <p className="mt-5"><i>Web info about Indonesian heroes</i></p>
        {!isShow && (
          <div className="flex justify-center">
            <button
              onClick={() => {
                setIsShow(true);
              }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5 rounded"
            >
              Show All
            </button>
          </div>
        )}
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
              <li className="chip-black">by {submittedData?.type}</li>
              <li style={handleHidingItemFilter()} className="chip-black">
                {submittedData?.startDate || "-"} s/d{" "}
                {submittedData?.endDate || "-"}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="column side"></div>
        <div className="column middle">
          {isLoading && (
            <div
              style={handleHidingListContent()}
              className="flex items-center justify-center min-h-screen"
            >
              <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <div
            style={handleHidingListContent()}
            className="flex justify-center items-center"
          >
            <b>List Empty</b>
          </div>
          <CardGrid data={heroes} />
        </div>
        <div className="column side"></div>
      </div>
    </div>
  );
}
