interface MarqueeProps {
  images: string[];
}

const Marquee = ({ images }: MarqueeProps) => {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className="animate-\(--marquee\) inline-block">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Logo ${index + 1}`}
            className="mx-4 inline-block h-20 w-auto"
          />
        ))}
        {images.map((src, index) => (
          <img
            key={`dup-${index}`}
            src={src}
            alt={`Logo ${index + 1}`}
            className="mx-4 inline-block h-20 w-auto"
          />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const images = [
    '/git_logo.png',
    '/bash_logo.png',
    '/c_logo.png',
    '/c++_logo.png',
    '/docker_logo.png',
    '/html_logo.jpg',
    '/css_logo.png',
    '/tailwind_logo.png',
    '/typescript_logo.png',
    '/react_logo.png',
  ];
  return (
    <div className="m-4 flex justify-center rounded-xl bg-slate-950/60 p-10">
      {/* <div className="relative origin-center size-96 rounded-full border border-white">
    	<div className="absolute top-0 left-1/2 -translate-1/2 size-20 rounded-full border border-white">

    	</div>
    	<div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 size-20 rounded-full border border-white">

    	</div>
    	<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 size-20 rounded-full border border-white">

    	</div>
    	<div className="absolute top-1/2 left-0 -translate-1/2 size-20 rounded-full border border-white">

    	</div>
      </div> */}
      <Marquee images={images} />
    </div>
  );
};

export default Skills;
