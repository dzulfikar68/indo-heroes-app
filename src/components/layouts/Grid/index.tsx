import Card from "@/components/elements/Card";

export interface HeroItem {
  name: string;
  birth_year: number;
  death_year: number | null;
  description: string;
  ascension_year: number;
}

interface CardGridProps {
  data: HeroItem[];
}

export default function CardGrid({ data }: CardGridProps) {
  return (
    <div className="grid-container">
      {data.map((hero, index) => (
        <Card key={index} {...hero} />
      ))}
    </div>
  );
}
