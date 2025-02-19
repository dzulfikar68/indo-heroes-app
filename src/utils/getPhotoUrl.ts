export const getPhotoUrl = async (name: string): Promise<string | null> => {
  try {
    const res = await fetch("/photo-lib.json"); // Ambil JSON dari public
    const data = await res.json();

    const photo = data["photo-list"].find(
      (p: { name: string }) => p.name === name
    );
    return photo ? photo.url : null;
  } catch (error) {
    console.error("Error fetching photo data:", error);
    return null;
  }
};
