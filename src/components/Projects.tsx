// import SingleProject from "./SingleProject";

const Projects = () => {
  return (
    <div className="m-4 grid grid-cols-2 grid-rows-3 place-items-center gap-y-8 gap-x-4 rounded-xl bg-slate-950/60 px-5 py-7">
      <div className="flex flex-col rounded-lg border border-gray-400">
        <h2 className="rounded-t bg-[#aca8ac] p-1 text-center text-lg text-black">
          so_long
        </h2>
        <div className="group relative h-44 w-72 overflow-hidden rounded-b-lg border border-t-gray-400 bg-[#dabb64]">
          <img
            src="/so_long_cover.png"
            alt="so_long_cover"
            className="absolute size-full rounded-b-lg transition duration-500 ease-in-out group-hover:-translate-y-full"
          />
          <p className="size-full p-2 indent-4 text-xs text-black">
            "so_long" is a 2D game developed in C using the MiniLibX graphics
            library. The player navigates through a map, collecting items and
            reaching the exit. This project enhances understanding of graphics
            rendering, event handling, and basic game mechanics.
          </p>
        </div>
      </div>
      <div className="flex flex-col rounded-lg border border-gray-400">
        <h2 className="rounded-t bg-[#aca8ac] p-1 text-center text-lg text-black">
          push_swap
        </h2>
        <div className="group relative h-44 w-72 overflow-hidden rounded-b-lg border border-t-gray-400 bg-[#dabb64]">
          <img
            src="/push_swap_cover.jpg"
            alt="push_swap_cover"
            className="absolute size-full rounded-b-lg transition duration-500 ease-in-out group-hover:-translate-y-full"
          />
          <p className="size-full p-2 indent-4 text-xs text-black">
            "push_swap" is a sorting algorithm project that involves sorting a
            stack of integers using a limited set of operations (push, swap,
            rotate). The objective is to achieve the sorted stack with the
            minimal number of moves, emphasizing algorithm optimization and
            efficiency.
          </p>
        </div>
      </div>
      <div className="flex flex-col rounded-lg border border-gray-400">
        <h2 className="rounded-t bg-[#aca8ac] p-1 text-center text-lg text-black">
          minishell
        </h2>
        <div className="group relative h-44 w-72 overflow-hidden rounded-b-lg border border-t-gray-400 bg-[#dabb64]">
          <img
            src="/minishell_cover.jpg"
            alt="minishell_cover"
            className="absolute size-full rounded-b-lg transition duration-500 ease-in-out group-hover:-translate-y-full"
          />
          <p className="size-full p-2 indent-4 text-xs text-black">
            "minishell" is a project focused on creating a simple Unix shell. It
            involves implementing command parsing, execution, environment
            variable management, and handling of built-in commands, providing
            deep insights into process creation and synchronization in Unix
            systems.
          </p>
        </div>
      </div>
      <div className="flex flex-col rounded-lg border border-gray-400">
        <h2 className="rounded-t bg-[#aca8ac] p-1 text-center text-lg text-black">
          inception
        </h2>
        <div className="group relative h-44 w-72 overflow-hidden rounded-b-lg border border-t-gray-400 bg-[#dabb64]">
          <img
            src="/inception_cover.jpg"
            alt="inception_cover"
            className="absolute size-full rounded-b-lg transition duration-500 ease-in-out group-hover:-translate-y-full"
          />
          <p className="size-full p-2 indent-4 text-xs text-black">
            "inception" is a project that introduces system administration and
            DevOps concepts by setting up a virtualized infrastructure using
            Docker. It involves creating and configuring multiple services (like
            Nginx, WordPress, and MariaDB) within Docker containers, emphasizing
            containerization and networking.
          </p>
        </div>
      </div>
      <div className="flex flex-col rounded-lg border border-gray-400">
        <h2 className="rounded-t bg-[#aca8ac] p-1 text-center text-lg text-black">
          ft_irc
        </h2>
        <div className="group relative h-44 w-72 overflow-hidden rounded-b-lg border border-t-gray-400 bg-[#dabb64]">
          <img
            src="/ft_irc_cover.png"
            alt="ft_irc_cover"
            className="absolute size-full rounded-b-lg transition duration-500 ease-in-out group-hover:-translate-y-full"
          />
          <p className="size-full p-2 indent-4 text-xs text-black">
            "ft_irc" is a networking project that entails developing an IRC
            (Internet Relay Chat) server from scratch using C++. It focuses on
            understanding and implementing communication protocols,
            client-server architecture, and managing multiple client
            connections.
          </p>
        </div>
      </div>
      <div className="flex flex-col rounded-lg border border-gray-400">
        <h2 className="rounded-t bg-[#aca8ac] p-1 text-center text-lg text-black">
          ft_transcendence
        </h2>
        <div className="group relative h-44 w-72 overflow-hidden rounded-b-lg border border-t-gray-400 bg-[#dabb64]">
          <img
            src="/ft_transcendence_cover.png"
            alt="ft_transcendence_cover"
            className="absolute size-full rounded-b-lg transition duration-500 ease-in-out group-hover:-translate-y-full"
          />
          <p className="size-full p-2 indent-4 text-xs text-black">
            "ft_transcendence", the final group project of the 1337 common core
            curriculum, is a full-stack web application that combines a
            real-time multiplayer Pong game with features like user
            authentication, chat systems, and user profiles.
            <br />
            In this project, I specialized in the front-end development,
            utilizing HTML, Tailwind CSS, and TypeScript to craft a responsive
            and visually appealing user interface.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
