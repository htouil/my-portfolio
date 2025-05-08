// import { useState } from 'react';

const Profil = () => {
  return (
    <div className="flex bg-slate-950/40 py-5">
      <img
        src="/hatim_picture.jpg"
        alt="profil_picture"
        className="ml-7 w-64 place-self-center-safe rounded-xl p-2"
      ></img>
      <div className="flex grow flex-col place-content-center-safe gap-10 text-white">
        <p className="mr-20 self-center text-center text-xl/normal font-bold tracking-wide">
          Hello dear visitor,
          <span className="ml-20 inline-block" />
          <br />I am Hatim TOUIL
        </p>
        <div className="ml-10 flex h-64 w-80 flex-col self-center overflow-hidden rounded-3xl border border-white">
          <div className="flex basis-1/6 rounded-t-xl bg-[#d8d7d8]">
            <div className="flex basis-1/5 items-center-safe justify-evenly">
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
            <div className="flex basis-4/5 items-center-safe justify-center-safe">
              <p className="text-center text-lg text-black">Summary</p>
            </div>
          </div>
          <div className="basis-5/6 bg-[#dabb64]">
            <p className="p-2 indent-8 text-base text-pretty text-black">
              Hello and Welcome, My name is Hatim TOUIL
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profil;
