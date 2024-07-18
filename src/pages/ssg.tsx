// pages/ssg.tsx
import { GetStaticProps } from "next";
import FaceGallery from "../components/FaceGallery";
import fetchFace, { FaceResponse } from "../lib/fetchFace";

type Props = {
  initialFaces: FaceResponse[];
};

const SSG = ({ initialFaces }: Props) => {
  return <FaceGallery initialFaces={initialFaces} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const initialFaces = await fetchFace(5);
  return { props: { initialFaces } };
};

export default SSG;
