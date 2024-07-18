// lib/fetchFace.ts
export type FaceResponse = {
  id: number;
  url: string;
  first_name: string;
};

const fetchFace = async (amount: number = 1): Promise<FaceResponse[]> => {
  const response = await fetch(
    `https://tinyfac.es/api/data?limit=${amount}&quality=0`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data: FaceResponse[] = await response.json();
  return data;
};

export default fetchFace;
