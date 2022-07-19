import React from "react";
import LOGO from "../assets/logo.png";
import { MdOutlineLocationOn } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";

function Footer() {
    return (
        <div className="container z-50 w-full p-3 px-4 lg:px-48 m-auto justify-center bg-white" id="footer">
            <hr className="h-[2px] bg-gray-300" />
            <div className="grid md:grid-cols-2 grid-cols-1 gap-2 w-full px-4">
                <div className="w-full h-[50px] items-center">
                    <a href="#" className="flex items-center gap-1 mt-8">
                        <img
                            className="w-10 object-cover items-center"
                            src={LOGO}
                            alt={"logo"}
                        />
                        <p className="text-headingColor text-base font-extrabold">
                            BKC Lab
                        </p>
                    </a>
                    <p className="text-lighttextGray text-xs font-normal mt-0 ml-1 text-left">
                        Nhóm nghiên cứu và phát triển các ứng dụng sử dụng{" "}
                        <br /> công nghệ chuỗi khối
                    </p>

                    <div className="md:mt-4 mt-4">
                        <div className="flex items-center">
                            <HiOutlineMail />
                            <h1 className="text-textColor ml-2 font-normal text-sm">
                            Liên hệ:{" "}
                                <span className="text-[#624DE3]">
                                    contact@bkc-labs.io
                                </span>
                            </h1>
                        </div>

                        <div className="flex items-start">
                            <MdOutlineLocationOn className="mt-[1px] text-lg"/>
                            <h1 className="text-textColor ml-2 font-normal text-sm">
                                {" "}
                                Địa điểm: Phòng 609, tòa nhà Tạ Quang Bửu,
                                ĐHBKHN
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="py-2 m-0 justify-start md:justify-end flex gap-8 mt-40 md:mt-6 w-full">
                    <div className="grid mr-5 ">
                        <h1 className="text-textColor font-bold md:text-sm text-xs">
                            Giới thiệu
                        </h1>
                        <span className="text-xs justify-center ml-1 text-lighttextGray">giới thiệu</span>
                        <span className="text-xs justify-center ml-1 text-lighttextGray">giới thiệu</span>
                        <span className="text-xs justify-center ml-1 text-lighttextGray">giới thiệu</span>
                    </div>

                    <div className="grid mr-5">
                        <h1 className="text-textColor font-bold md:text-sm text-xs">
                            Giới thiệu
                        </h1>
                        <span className="text-xs justify-center ml-1 text-lighttextGray">giới thiệu</span>
                        <span className="text-xs justify-center ml-1 text-lighttextGray">giới thiệu</span>
                        <span className="text-xs justify-center ml-1 text-lighttextGray">giới thiệu</span>
                    </div>

                    <div className="grid mr-5">
                        <h1 className="text-textColor font-bold md:text-sm text-xs">
                            Giới thiệu
                        </h1>
                        <span className="text-xs justify-center ml-1 text-lighttextGray">giới thiệu</span>
                        <span className="text-xs justify-center ml-1 text-lighttextGray">giới thiệu</span>
                        <span className="text-xs justify-center ml-1 text-lighttextGray">giới thiệu</span>
                    </div>
                </div>
            </div>

            <div className="mt-8 md:mt-28 justify-center text-center">
                <h1 className="text-textColor ml-2 font-normal text-sm justify-center">
                    © 2022 BKC Labs . Đã đăng ký Bản quyền.
                </h1>
            </div>
        </div>
    );
}

export default Footer;
