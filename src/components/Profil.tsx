// import { useState } from 'react';

const Profil = () => {
  return (
    <div className="flex items-center bg-slate-900/85">
      <img
        src="/hatim_picture.jpg"
        alt="profil_picture"
        className="w-64 rounded-xl p-2"
      ></img>
      <div className="flex flex-col place-content-center-safe grow text-white gap-4 mt-0">
        <p className="text-center self-start text-xl ml-10">
          Hello dear visitor,
          <br />I am Hatim TOUIL
        </p>
        <div className="flex self-center border-4 border-black rounded-3xl w-80 h-64 ml-10">

		</div>
      </div>
    </div>
  );
};

export default Profil;
