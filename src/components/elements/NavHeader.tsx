import Link from "next/link";

export interface NavHeaderProps {
  title: string;
  url: string;
}

export default function NavHeader({title, url}: NavHeaderProps) {
  return (
    <Link href={url} className="w3-bar-item w3-button w3-padding-large">
      {title}
    </Link>
  );
}
