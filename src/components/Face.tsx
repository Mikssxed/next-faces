// components/Face.tsx
import Image from "next/image";
import refresh from "../../public/001-refresh.svg";

type Props = {
  url: string;
  alt: string;
  onClick: () => void;
};

const Face = ({ url, alt, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className="w-[240px] aspect-square relative drop-shadow-sm cursor-pointer"
    >
      <div className="absolute w-full h-full bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity rounded-lg flex justify-center items-center z-10">
        <Image className="w-[100px]" src={refresh} alt="refresh" />
      </div>
      <Image className="w-full h-full rounded-lg" src={url} alt={alt} fill />
    </div>
  );
};

export default Face;
