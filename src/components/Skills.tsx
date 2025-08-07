import './Skills.css';

interface Skill {
  src: string;
  name: string;
}

const skills: Skill[] = [
  { src: '/git_logo.png', name: 'Git' },
  { src: '/bash_logo.png', name: 'Bash' },
  { src: '/c_logo.png', name: 'C' },
  { src: '/c++_logo.png', name: 'C++' },
  { src: '/docker_logo.png', name: 'Docker' },
  { src: '/html_logo.png', name: 'HTML' },
  { src: '/css_logo.png', name: 'CSS' },
  { src: '/tailwind_logo.png', name: 'Tailwind CSS' },
  { src: '/typescript_logo.png', name: 'TypeScript' },
  { src: '/react_logo.png', name: 'ReactJS' },
];

const addPadding = (src: string): string => {
  switch (src) {
    case '/bash_logo.png':
      return 'p-1';
    case '/docker_logo.png':
      return 'p-0.5 md:p-1';
    case '/css_logo.png':
      return 'p-2.5 md:p-3';
    case '/tailwind_logo.png':
      return 'p-3 md:p-4';
    case '/typescript_logo.png':
      return 'p-1.5 md:p-2';
    case '/react_logo.png':
      return 'p-1.5';
    default:
      return 'p-0';
  }
};

const Marquee = () => {
  const duplicatedSkills = [
    ...skills,
    ...skills,
    ...skills,
    ...skills,
    ...skills,
    ...skills,
    ...skills,
    ...skills,
    ...skills,
  ];
  return (
    <div className="max-[500px]:scale-90 overflow-hidden rounded-3xl border-t border-b border-sky-600 py-7 shadow-[0_10px_15px_-3px_rgb(0_0_0_/0.1),_0_-10px_15px_-3px_rgb(0_0_0_/0.1)] shadow-sky-500/50 md:rounded-4xl md:py-10">
      <div className="marquee flex gap-7 md:gap-10">
        {duplicatedSkills.map((skill, index) => (
          <div
            key={`skill-${index}`}
            className="flex flex-col items-center justify-center gap-4"
          >
            <div className="flex size-16 items-center-safe justify-center-safe rounded-full bg-[linear-gradient(to_right,#9ca3af_0%,#9ca3af_50%,#d1d5db_50%,#d1d5db_100%)] md:size-28">
              <img
                src={skill.src}
                alt={`Logo ${index + 1}`}
                className={`size-14 md:size-20 ${addPadding(skill.src)}`}
              />
            </div>
            <p className="bg-gradient-to-r from-sky-900 via-sky-600 to-sky-400 bg-clip-text text-[10px] font-semibold text-transparent md:text-lg">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div id="skills" className="py-10 md:py-14">
      <div className="m-4 flex flex-col justify-center gap-7 rounded-xl bg-slate-950/60 p-7 md:gap-10 md:p-10 lg:mx-10 xl:mx-16 xl:px-16 xl:py-12">
        <h1 className="self-center bg-gradient-to-r from-zinc-600 via-zinc-400 via-90% to-zinc-300 bg-clip-text text-xl/relaxed font-extrabold tracking-wide text-transparent md:text-3xl/relaxed xl:text-4xl/relaxed">
          Skills
        </h1>
        <Marquee />
      </div>
    </div>
  );
};

export default Skills;
