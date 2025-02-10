import Card, { CardItem } from "@/components/elements/Card";
import { useState } from "react";

export default function CardGrid() {
  const [cardData, setCardData] = useState<CardItem[]>([
    { title: "Card 1", subDesc: "string", desc: "string", imageUrl: "" },
    { title: "Card 1", subDesc: "string", desc: "string", imageUrl: "" },
    { title: "Card 1", subDesc: "string", desc: "string", imageUrl: "" },
    { title: "Card 1", subDesc: "string", desc: "string", imageUrl: "" },
    { title: "Card 1", subDesc: "string", desc: "string", imageUrl: "" },
    { title: "Card 1", subDesc: "string", desc: "string", imageUrl: "" },
    { title: "Card 1", subDesc: "string", desc: "string", imageUrl: "" },
  ]);

  return (
    <div className="grid-container">
      {cardData.map((card, index) => (
        <Card key={index} {...card}/>
      ))}
    </div>
  );
}
