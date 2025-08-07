import { useState, useEffect, useRef } from 'react';

interface SingleProjectProps {
  title: string;
  image: string;
  text: string;
}

const SingleProject = ({ title, image, text }: SingleProjectProps) => {
  const [ishovered, setIsHovered] = useState(false);

  const imageToHover = useRef<HTMLImageElement | null>(null);
  const divToClick = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const switchHover = () => {
      setIsHovered(!ishovered);
    };
    const removeHover = () => {
      setIsHovered(false);
    };

    divToClick.current?.addEventListener('touchstart', switchHover);
    document.addEventListener('scroll', removeHover);

    return () => {
      divToClick.current?.removeEventListener('touchstart', switchHover);
      document.removeEventListener('scroll', removeHover);
    };
  });
  return (
    <div className="flex flex-col rounded-lg border border-gray-400">
      <h2 className="rounded-t bg-[#aca8ac] p-1 text-center text-sm text-black sm:text-base md:text-lg xl:text-xl">
        {title}
      </h2>
      <div
        ref={divToClick}
        className="group relative max-[500px]:h-40 h-32 overflow-hidden rounded-b-lg border border-t-gray-400 bg-[#dabb64] sm:h-40 md:h-44 xl:h-60"
      >
        <img
          ref={imageToHover}
          src={image}
          alt={`${title}_cover`}
          className={`absolute size-full rounded-b-lg transition duration-500 ease-in-out group-hover:-translate-y-full ${!ishovered ? '' : '-translate-y-full'}`}
        />
        <p className="size-full p-2 indent-4 text-[8px] text-black sm:text-xs lg:text-sm xl:text-base 2xl:text-lg">
          {text}
        </p>
      </div>
    </div>
  );
};

export default SingleProject;
