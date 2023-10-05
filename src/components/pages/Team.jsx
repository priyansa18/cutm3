import React from "react";

const Team = () => {
  return (
    <div className="bg-white mb-28">
      <div className="flex justify-center flex-col items-center w-full h-full text-center ">
        <div>
          <h1 className="text-4xl mt-24  sm:text-center sm:text-6xl font-bold text-blue-800 ">
            Our Team
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-8 grid-rows-1 mt-10 text-xl md:grid-cols-1 lg:grid-cols-4">
          <div className="text-start ">
            <span className="font-mono text-blue-600 font-extrabold ">
              Web Developer
            </span>
            <div className="text-start mt-4 ">
              <li>Gyan Prakash Tiwari</li>
              <li>Bikash Barik</li>

            </div>

          </div>
          <div className="text-start">
            <span className="font-mono text-blue-600 font-extrabold">
              3D Artist & Game Developer
            </span>
            <div className="text-start mt-4">

              <li>Nandagiri s v ramakrishna bharat</li>
              <li>P Sudip Kumar Prusty </li>
              <li>Ritik Mishra</li>
            </div>
          </div>
          <div className="text-start">
            <span className="font-mono text-blue-600 font-extrabold">Game Developer</span>
            <div className="mt-4 text-start">
              <li>Samikshya Patra</li>
              <li>Monalisha Prusty</li>
              <li>Sk Rizwanul Haque</li>
              <li>Pratyush Pal</li>
              <li>Chiranjeeb Garnayak</li>
              <li>Rajesh Kumar Swain</li>
              <li>Priyanshu Das</li>
              <li>Chandrakanta Sahoo</li>
              <li>Suvendu Parida</li>
              <li>Sameer Dehury</li>
              <li>Rudra Narayan Acharya</li>
              <li>G Vamsi Sai</li>

            </div>
          </div>
          <div className="text-start">
            <span className="font-mono text-blue-600 font-extrabold">Unity Developer</span>
            <div className="mt-4 text-start">
              <li>Kunal Panigrahi</li>
              <li>Aniket Senapati</li>
              <li>Eppili Bhargava</li>
              <li>Mahaprasad Jata</li>
              <li>Dipak Pattanaik</li>
            </div>
          </div>
          <div className="text-start">
            <span className="font-mono text-blue-600 font-extrabold">3D Artist</span>
            <div className="mt-4 text-start">
             <li>Monalisha Prusty</li>
             <li>Neelanjan Chakraborty</li>
             <li>Romit Swain</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
