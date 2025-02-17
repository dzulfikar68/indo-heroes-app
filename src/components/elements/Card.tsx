// export interface CardItem {
//   title: string;
//   subDesc: string;
//   desc: string;
//   imageUrl: string;
//   story: string;
// }

import { HeroItem } from "../layouts/Grid";

export default function Card({
  name,
  birth_year,
  death_year,
  description,
  ascension_year,
}: HeroItem) {
  return (
    <div className="card" onClick={() => alert("Clicked!")} style={{ cursor: "pointer" }}>
      <img src="/photo-default.jpg" alt={name} />
      <div className="p-4">
      <h3>{name}</h3>
      <h6>
        {birth_year} - {death_year ?? "Masih Hidup"}
      </h6>
      <p>{description}</p>
      <small>Diangkat sebagai pahlawan: {ascension_year}</small>
      </div>
    </div>
  );
}
