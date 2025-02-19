// export interface CardItem {
//   title: string;
//   subDesc: string;
//   desc: string;
//   imageUrl: string;
//   story: string;
// }

import { HeroItem } from "../layouts/Grid";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { getPhotoUrl } from "@/utils/getPhotoUrl";

export default function Card({
  name,
  birth_year,
  death_year,
  description,
  ascension_year,
}: HeroItem) {

  const [photoUrl, setPhotoUrl] = useState<string>("/photo-default.jpg");

  useEffect(() => {
    const fetchPhoto = async () => {
      const url = await getPhotoUrl(name);
      if (url) setPhotoUrl(url); // Jika ada URL, pakai URL dari JSON
    };

    fetchPhoto();
  }, [name]);

  return (
    <div
      className="card"
      onClick={() => Swal.fire({
        title: name,
        text: description,
        icon: "info",
        confirmButtonText: "OK",
      })}
      style={{ cursor: "pointer" }}
    >
      <img src={photoUrl} alt={name} />
      <div className="p-4">
        <h1><b>{name}</b></h1>
        <h6>
          {birth_year} - {death_year ?? "Masih Hidup"} ({ascension_year})
        </h6>
        <p className="clamp-2"><small><i>{description}</i></small></p>
        {/* <small>Diangkat sebagai pahlawan: {ascension_year}</small> */}
      </div>
    </div>
  );
}
