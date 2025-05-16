// import { useState } from 'react';

const Profil = () => {
  return (
    <div className="m-4 flex rounded-xl bg-slate-950/60 p-5">
      <img
        src="/hatim_picture.jpg"
        alt="profil_picture"
        className="w-64 place-self-center-safe rounded-2xl p-2"
      ></img>
      <div className="flex grow flex-col place-content-center-safe gap-10 text-white">
        <p className="mr-20 self-center bg-gradient-to-r from-zinc-600 via-zinc-400 via-90% to-zinc-300 bg-clip-text text-center text-2xl/relaxed font-extrabold tracking-wide text-transparent">
          Hello dear visitor,
          <span className="ml-20 inline-block" />
          <br />I am Hatim TOUIL
        </p>
        <div className="ml-10 flex h-72 w-80 flex-col self-center overflow-hidden rounded-3xl border border-[#aca8ac]">
          <div className="flex basis-1/6 rounded-t-xl bg-[#aca8ac]">
            <div className="flex basis-3/12 items-center-safe justify-evenly">
              <img
                src="/mac_close_btn.png"
                alt="close_button"
                className="size-3.5"
              />
              <img
                src="/mac_reduce_btn.png"
                alt="reduce_button"
                className="size-3.5"
              />
              <img
                src="/mac_resize_btn.png"
                alt="resize_button"
                className="size-3.5"
              />
            </div>
            <div className="flex basis-9/12 items-center-safe justify-center-safe">
              <p className="text-center text-lg text-black">Summary</p>
            </div>
          </div>
          <div className="basis-5/6 bg-[#dabb64]">
            <p className="p-3 indent-8 text-sm text-pretty text-black">
              Hello and Welcome, My name is Hatim TOUIL, a front-end developer
              with a strong foundation in system programming, algorithms, and
              collaborative coding, honed through the rigorous Common Core at
              1337 Coding School.
              <br />
              I'm passionate about crafting, not only responsive and
              user-friendly, but also creative interfaces. My goal is to
              contribute to innovative projects that make a meaningful impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profil;
