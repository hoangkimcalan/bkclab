import React from 'react';
import BsignIcon from '../assets/bsign1.png';
import B4EIcon from '../assets/b4e1.png';
import VchainIcon from '../assets/vchain1.png';

import "../index.css";


function SulutionsContainer() {
  return (
    <submain className=" mt-16 md:px-48 w-full justify-center items-center pr-2 md:pr-auto" id="solution">
      <h1 className="flex text-center justify-center text-textColor font-black text-xl">
        Giải pháp
      </h1>

      <div className="w-full h-auto mt-16 flex flex-col md:flex-row gap-16 justify-center pl-4 md:pl-0">
        <div className="bg-white md:min-w-[270px] h-56 drop-shadow-xl rounded-md hoverTraslate transition-all ease-in-out duration-300 pt-12 justify-center items-center p-3 ">
          <img className="w-12 transition m-auto" src={BsignIcon} alt="bsign icon" />
          <h1 className="text-textColor text-lg font-bold mt-4 text-center mr-2 ">Bsign</h1>
          <p className="text-lighttextGray text-xs font-normal mt-4 text-center ">Giải pháp chữ ký số từ xa không sử dụng USB Token</p>
        </div>

        <div className="bg-white md:min-w-[270px] h-56 drop-shadow-xl rounded-md hoverTraslate transition-all ease-in-out duration-300 pt-12 justify-center items-center p-3 ">
          <img className="w-12 transition m-auto" src={B4EIcon} alt="bsign icon" />
          <h1 className="text-textColor text-lg font-bold mt-2 text-center mr-2">B4E</h1>
          <p className="text-lighttextGray text-xs font-normal mt-4 text-center ">Giải pháp cấp phát và xác thực bằng cấp sử dụng công nghệ blockchain</p>
        </div>

        <div className="bg-white md:min-w-[270px] h-56 drop-shadow-xl rounded-md hoverTraslate transition-all ease-in-out duration-300 pt-12 justify-center items-center p-3 ">
          <img className="w-12 transition m-auto" src={VchainIcon} alt="bsign icon" />
          <h1 className="text-textColor text-lg font-bold mt-2 text-center mr-2">VchainIcon</h1>
          <p className="text-lighttextGray text-xs font-normal mt-4 text-center ">Nền tảng tạo DApp trên nhiều mạng blockchain</p>

        </div>
      </div>
    </submain>
  )
}

export default SulutionsContainer;