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
      return 'p-1';
    case '/css_logo.png':
      return 'p-3';
    case '/tailwind_logo.png':
      return 'p-4';
    case '/typescript_logo.png':
      return 'p-2';
    case '/react_logo.png':
      return 'p-1';
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
    <div className="overflow-hidden rounded-4xl border-t border-b border-sky-600 shadow-[0_10px_15px_-3px_rgb(0_0_0_/0.1),_0_-10px_15px_-3px_rgb(0_0_0_/0.1)] shadow-sky-500/50 py-5">
      <div className="marquee flex gap-10">
        {duplicatedSkills.map((skill, index) => (
          <div
            key={`skill-${index}`}
            className="flex min-w-32 flex-col items-center justify-center gap-3"
          >
            <div className="flex size-24 items-center-safe justify-center-safe rounded-full bg-[linear-gradient(to_right,#9ca3af_0%,#9ca3af_50%,#d1d5db_50%,#d1d5db_100%)]">
              <img
                src={skill.src}
                alt={`Logo ${index + 1}`}
                className={`size-20 ${addPadding(skill.src)}`}
              />
            </div>
            <p className="bg-gradient-to-r from-sky-900 via-sky-600 to-sky-400 bg-clip-text text-xl font-semibold text-transparent">
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
    <div className="m-4 flex justify-center rounded-xl bg-slate-950/60 p-10">
      <Marquee />
    </div>
  );
};

export default Skills;
