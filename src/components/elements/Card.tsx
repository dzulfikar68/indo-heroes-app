export interface CardItem {
  title: string;
  subDesc: string;
  desc: string;
  imageUrl: string;
}

function Card({ title, subDesc, desc, imageUrl }: CardItem) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <h6>{subDesc}</h6>
      <p>{desc}</p>
    </div>
  );
}

export default Card;
