// components/FaceGallery.tsx
import { useState } from "react";
import fetchFace, { FaceResponse } from "../lib/fetchFace";
import Face from "./Face";

type Props = {
  initialFaces: FaceResponse[];
};

const FaceGallery = ({ initialFaces }: Props) => {
  const [faces, setFaces] = useState<FaceResponse[]>(initialFaces);

  const loadFace = async () => {
    try {
      const [newFace] = await fetchFace();
      setFaces([...faces, newFace]);
    } catch (error) {
      console.error(error);
    }
  };

  const changeFace = async (index: number) => {
    try {
      const [newFace] = await fetchFace();
      const newFaces = [...faces];
      newFaces[index] = newFace;
      setFaces(newFaces);
    } catch (error) {
      console.error(error);
    }
  };

  const refreshAll = async () => {
    try {
      const newFaces = await fetchFace(faces.length);
      setFaces(newFaces);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="flex flex-wrap gap-10 px-10 py-20">
      {faces.map((face, index) => (
        <Face
          key={`${face.id}-${index}`}
          url={face.url}
          alt={face.first_name}
          onClick={() => changeFace(index)}
        />
      ))}
      <button
        className="border-4 aspect-square w-[240px] flex justify-center items-center text-[70px] text-green-500 border-green-500 rounded-lg leading-[70px]"
        onClick={loadFace}
      >
        <p>+</p>
      </button>
      <button
        onClick={refreshAll}
        className="w-[240px] h-10 bg-green-500 rounded-lg fixed left-1/2 -translate-x-1/2 bottom-20 text-white"
      >
        Refresh All
      </button>
    </main>
  );
};

export default FaceGallery;
