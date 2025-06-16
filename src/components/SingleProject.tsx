interface SingleProjectProps {
  title: string;
  image: string;
  text: string;
}

const SingleProject = ({ title, image, text }: SingleProjectProps) => {
  return (
    <div className="flex flex-col rounded-lg border border-gray-400">
      <h2 className="rounded-t bg-[#aca8ac] p-1 text-center text-sm text-black sm:text-base md:text-lg xl:text-xl">
        {title}
      </h2>
      <div className="group relative h-32 overflow-hidden rounded-b-lg border border-t-gray-400 bg-[#dabb64] sm:h-40 md:h-44 xl:h-60">
        <img
          src={image}
          alt={`${title}_cover`}
          className="absolute size-full rounded-b-lg transition duration-500 ease-in-out group-hover:-translate-y-full"
        />
        <p className="size-full p-2 indent-4 text-[8px] text-black sm:text-xs lg:text-sm xl:text-base 2xl:text-lg">
          {text}
        </p>
      </div>
    </div>
  );
};

export default SingleProject;
