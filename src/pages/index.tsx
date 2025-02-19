import Container from "@/components/layouts/Container";
import HomeViews from "@/views/Home";
import { useEffect, useState } from "react";

export default function Home() {
  const colors = ["#caff7b", "#ff7b7b", "#7bcaff", "#ffca7b", "#7bffca"]; // Warna yang akan dipilih
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length); // Loop warna
    }, 3000); // 5 menit (300.000 ms)

    return () => clearInterval(interval); // Hapus interval saat unmount
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty("--bg-color", colors[colorIndex]); // Update warna di CSS Variable
  }, [colorIndex]);

  return (
    <>
      <Container>
        <HomeViews />
      </Container>
    </>
  );
}
