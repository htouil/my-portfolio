// import { useState } from 'react';

const Profil = () => {
  return (
    <div id="about" className="py-10 md:py-14">
      <div className="m-4 flex flex-col min-[500px]:flex-row rounded-xl bg-slate-950/60 p-3.5 sm:p-4 md:p-5 lg:mx-10 lg:px-14 xl:mx-16 xl:px-16 xl:py-8 2xl:px-32 2xl:py-10">
        <img
          src="/hatim_picture.jpg"
          alt="profil_picture"
          className="w-44 place-self-center-safe rounded-2xl p-2 sm:w-48 md:w-64 2xl:w-72"
        ></img>
        <div className="flex grow flex-col place-content-center-safe gap-5 text-white md:gap-10">
          <h1 className="self-center bg-gradient-to-r from-zinc-600 via-zinc-400 via-90% to-zinc-300 bg-clip-text text-center text-base/relaxed font-extrabold tracking-wide text-transparent sm:mr-20 md:text-2xl/relaxed lg:mr-32">
            Hello dear visitor,
            <span className="ml-20 inline-block" />
            <br />I am Hatim TOUIL
          </h1>
          <div className="ml-5 flex w-60 flex-col self-center overflow-hidden rounded-xl border border-[#aca8ac] md:ml-10 md:h-72 md:w-80 md:rounded-3xl 2xl:h-80 2xl:w-92">
            <div className="flex basis-3/12 rounded-t-xl bg-[#aca8ac] md:basis-1/6">
              <div className="flex basis-3/12 items-center-safe justify-evenly">
                <img
                  src="/mac_close_btn.png"
                  alt="close_button"
                  className="size-2.5 md:size-3.5"
                />
                <img
                  src="/mac_reduce_btn.png"
                  alt="reduce_button"
                  className="size-2.5 md:size-3.5"
                />
                <img
                  src="/mac_resize_btn.png"
                  alt="resize_button"
                  className="size-2.5 md:size-3.5"
                />
              </div>
              <div className="flex basis-9/12 items-center-safe justify-center-safe">
                <p className="text-center text-base text-black md:text-lg lg:text-xl">
                  Summary
                </p>
              </div>
            </div>
            <div className="basis-9/12 bg-[#dabb64] md:basis-5/6">
              <p className="p-2 indent-8 text-xs text-pretty text-black md:p-3 md:text-sm 2xl:text-base">
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
    </div>
  );
};

export default Profil;
