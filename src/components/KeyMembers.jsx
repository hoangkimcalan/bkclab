import React from "react";
import TChung from "../assets/members/TChung.png";
import TMinh from "../assets/members/TMinh.png";
import TLam from "../assets/members/TLam.png";
import Nam from "../assets/members/TvNam.png";
import { Link, NavLink, Route } from "react-router-dom";

function KeyMembers() {
    return (
        <div
            className="container mt-20 md:px-48 w-full justify-center items-center px-16"
            id="member"
        >
            <h1 className="flex text-center justify-center text-textColor font-black text-xl">
                Thành viên chính
            </h1>

            <div className="w-full h-auto mt-8 flex flex-col md:flex-row gap-8 justify-center">
                <section className="min-w-[200px] h-auto transition">
                    <div className="bg-cartImageKey drop-shadow-md hover:scale-105 transition ">
                        <img
                            src={TMinh}
                            className="h-[320px] md:h-[240px] w-[320px] object-cover px-2 py-0 hover:scale(1.2) transition"
                            alt="Minh"
                        />
                    </div>
                    <h1 className="text-textColor text-lg font-bold mt-2 text-center mr-2">
                        Nguyễn Bình Minh
                    </h1>
                    <p className="text-lighttextGray text-xs font-normal mt-2 text-center">
                        Giảng viên môn Hệ thống thông tin Đại học Bách Khoa Hà
                        Nội
                    </p>
                </section>

                <section className="min-w-[200px] h-auto transition">
                    <div className="bg-cartImageKey drop-shadow-md hover:scale-105 transition">
                        <img
                            src={TChung}
                            className="h-[320px] md:h-[240px] w-[320px] object-cover px-2 py-0"
                            alt="Chung"
                        />
                    </div>
                    <h1 className="text-textColor text-lg font-bold mt-2 text-center mr-2">
                        Đào Thành Chung
                    </h1>
                    <p className="text-lighttextGray text-xs font-normal mt-2 text-center">
                        Giảng viên môn Hệ thống thông tin Đại học Bách Khoa Hà
                        Nội
                    </p>
                </section>

                <section className="min-w-[200px] h-auto transition">
                    <div className="bg-cartImageKey drop-shadow-md hover:scale-105 transition ">
                        <img
                            src={TLam}
                            className="h-[320px] md:h-[240px] w-[320px] object-cover px-2 py-0"
                            alt="Lam"
                        />
                    </div>
                    <h1 className="text-textColor text-lg font-bold mt-2 text-center mr-2">
                        Đỗ Bá Lâm
                    </h1>
                    <p className="text-lighttextGray text-xs font-normal mt-2 text-center">
                        Giảng viên môn Hệ thống thông tin Đại học Bách Khoa Hà
                        Nội
                    </p>
                </section>

                <section className="min-w-[200px] h-auto transition">
                    <div className="bg-cartImageKey drop-shadow-md hover:scale-105 transition ">
                        <img
                            src={Nam}
                            className="h-[320px] md:h-[240px] w-[320px] object-cover px-2 py-0 hover:scale(1.2) transition"
                            alt="Nam"
                        />
                    </div>
                    <h1 className="text-textColor text-lg font-bold mt-2 text-center mr-2">
                        Đinh Hoàng Nam
                    </h1>
                    <p className="text-lighttextGray text-xs font-normal mt-2 text-center">
                        Kỹ sư Hệ thống thông tin Đại học Bách Khoa Hà Nội
                    </p>
                </section>
            </div>

            <Link to="/members">
                <button className="flex border-[1px] w-36 h-10 items-center justify-center m-auto rounded-md mt-6 bg-blue-500 shadow-lg">
                    <h1 className="text-[white] text-sm semibold text-center">
                        Xem thêm
                    </h1>
                </button>
            </Link>
        </div>
    );
}

export default KeyMembers;
