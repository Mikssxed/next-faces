// pages/ssr.tsx
import { GetServerSideProps } from "next";
import FaceGallery from "../components/FaceGallery";
import fetchFace, { FaceResponse } from "../lib/fetchFace";

type Props = {
  initialFaces: FaceResponse[];
};

const SSR = ({ initialFaces }: Props) => {
  return <FaceGallery initialFaces={initialFaces} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const initialFaces = await fetchFace(5);
  return { props: { initialFaces } };
};

export default SSR;
