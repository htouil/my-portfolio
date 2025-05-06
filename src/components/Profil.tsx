// import { useState } from 'react';

const Profil = () => {
  return (
    <div className="flex items-center bg-slate-900/85">
      <img
        src="/hatim_picture.jpg"
        alt="profil_picture"
        className="w-96 rounded-xl p-2"
      ></img>
      <div className="flex flex-col place-content-center-safe grow text-white gap-7 mt-10">
        <p className="text-center self-start text-3xl ml-20">
          Hello dear visitor,
          <br />I am Hatim TOUIL
        </p>
        <div className="flex self-center border-4 border-black rounded-3xl w-[450px] h-80 ml-20">

		</div>
      </div>
    </div>
  );
};

export default Profil;
