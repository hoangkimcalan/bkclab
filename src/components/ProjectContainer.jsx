import React from "react";
import { BsCheckLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import HeroBg from "../assets/hero.png";

function ProjectContainer() {
    return (
        <div className="mt-20 md:px-48 w-full px-4 container">
            {/* BSign */}
            <div
                className="container grid grid-cols-1 md:grid-cols-2 gap-2 w-full"
                id="bsign"
            >
                <div className="py-2 flex-1 flex flex-col items-start justify-center gap-4">
                    <p className="text-2xl font-black tracking-wide text-left text-textColor ">
                        BSign
                    </p>
                    <p className="text-base text-gray-500  text-left w-[105%]">
                        BSign là giải pháp chữ ký số từ xa sử dụng hạ tầng khóa
                        công khai để cấp phát và quản lý các chứng thư số cấp
                        cho người dùng. Người dùng có thể truy cập website hoặc
                        điện thoại để ký nhiều loại tài liệu khác nhau như PDF,
                        Word, Excel mà không cần sử dụng đến USB Token. Các tính
                        năng vượt trội của BSign
                    </p>

                    <ul className="text-left">
                        <li className="text-xs font-bold flex text-left items-center mb-3">
                            <BsCheckLg className=" text-[green] mr-2 w-4 p-[1px] bg-green-300 rounded-3xl" />{" "}
                            Thực hiện ký các loại tài liệu một cách nhanh chóng
                            và thuận tiện
                        </li>
                        <li className="text-xs font-bold flex text-left items-center mb-3">
                            <BsCheckLg className=" text-[green] mr-2 w-4 p-[1px] bg-green-300 rounded-3xl" />{" "}
                            Đảm bảo tính bảo mật và an toàn tuyệt đối
                        </li>
                        <li className="text-xs font-bold flex text-left items-center mb-3">
                            <BsCheckLg className=" text-[green] mr-2 w-4 p-[1px] bg-green-300 rounded-3xl" />{" "}
                            Hỗ trợ nhiều người ký cùng lúc với số lượng tài liệu
                            lớn
                        </li>
                    </ul>

                    <Link to="/bsign">
                        <div className="text-left">
                            <button className="flex border-[1px] w-32 h-10 items-center justify-center m-auto rounded-md mt-6 bg-blue-500 shadow-lg">
                                <h1 className="text-[white] text-sm font-normal">
                                    Xem thêm
                                </h1>
                            </button>
                        </div>
                    </Link>
                </div>

                <div className="py-2 m-0">
                    <img
                        src={HeroBg}
                        className="lg:h-[555px] lg:w-[555px] h-[360px] w-full opacity-80 "
                        alt="heroBG"
                    />
                </div>
            </div>

            {/* B4E */}
            <div
                className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full"
                id="b4e"
            >
                <div className="py-2 m-0">
                    <img
                        src={HeroBg}
                        className="lg:h-[555px] lg:w-[555px] h-[360px] w-full opacity-80 "
                        alt="heroBG"
                    />
                </div>

                <div className="py-2 flex-1 flex flex-col items-start justify-center gap-4">
                    <p className="text-2xl font-black tracking-wide text-left text-textColor ">
                        B4E
                    </p>
                    <p className="text-base text-gray-500  text-left w-[105%]">
                        B4E là giải pháp cấp phát và xác thực bằng cấp/chứng chỉ
                        cho người học sử dụng chữ ký số BSign và ứng dụng công
                        nghệ blockchain. B4E cho phép các tổ chức giáo dục cấu
                        hình và thực hiện các quy trình như tải lên template
                        bằng cấp, danh sách người học, gửi email tới chủ sở
                        hữu,... một cách dễ dàng. Ngoài ra, B4E còn cung cấp các
                        tính năng:
                    </p>

                    <ul className="text-left">
                        <li className="text-xs font-bold flex text-left items-center mb-3">
                            <BsCheckLg className=" text-[green] mr-2 w-4 p-[1px] bg-green-300 rounded-3xl" />{" "}
                            Thực hiện ký số cho bằng cấp/chứng chỉ
                        </li>
                        <li className="text-xs font-bold flex text-left items-center mb-3">
                            <BsCheckLg className=" text-[green] mr-2 w-4 p-[1px] bg-green-300 rounded-3xl" />{" "}
                            Phát hành bằng cấp dưới dạng PDF có gắn mã QR code
                        </li>
                        <li className="text-xs font-bold flex text-left items-center mb-3">
                            <BsCheckLg className=" text-[green] mr-2 w-4 p-[1px] bg-green-300 rounded-3xl" />{" "}
                            Lưu trữ dữ liệu vĩnh viễn trên blockchain phục vụ
                            cho việc xác thực bằng cấp
                        </li>
                    </ul>

                    <Link to="/b4e">
                        <div className="text-left">
                            <button className="flex border-[1px] w-32 h-10 items-center justify-center m-auto rounded-md mt-6 bg-blue-500 shadow-lg">
                                <h1 className="text-[white] text-sm font-normal">
                                    Xem thêm
                                </h1>
                            </button>
                        </div>
                    </Link>
                </div>
            </div>

            {/* VChain */}
            <div
                className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-2 w-full"
                id="vchain"
            >
                <div className="py-2 flex-1 flex flex-col items-start justify-center gap-4">
                    <p className="text-2xl font-black tracking-wide text-left text-textColor ">
                        VChain
                    </p>
                    <p className="text-base text-gray-500  text-left w-[105%]">
                        VChain là một nền tảng cung cấp các tính năng thông qua
                        các ..... được viết sẵn. Các dịch vụ này cho phép tạo
                        các ứng dụng phi tập trung một cách dễ dàng và nhanh
                        chóng. Các tính năng chính bao gồm
                    </p>

                    <ul className="text-left">
                        <li className="text-xs font-bold flex text-left items-center mb-3">
                            <BsCheckLg className=" text-[green] mr-2 w-4 p-[1px] bg-green-300 rounded-3xl" />{" "}
                            Hỗ trợ tạo DApp trên các nền tảng blockchain khác
                            nhau
                        </li>
                        <li className="text-xs font-bold flex text-left items-center mb-3">
                            <BsCheckLg className=" text-[green] mr-2 w-4 p-[1px] bg-green-300 rounded-3xl" />{" "}
                            Tạo SDK và API cho nhà phát triển
                        </li>
                        <li className="text-xs font-bold flex text-left items-center mb-3">
                            <BsCheckLg className=" text-[green] mr-2 w-4 p-[1px] bg-green-300 rounded-3xl" />{" "}
                            Cấu hình cơ sở hạ tầng của mạng lưới
                        </li>
                    </ul>

                    <div className="text-left">
                        <button className="flex border-[1px] w-32 h-10 items-center justify-center m-auto rounded-md mt-6 bg-blue-500 shadow-lg">
                            <h1 className="text-[white] text-sm font-normal">
                                Xem thêm
                            </h1>
                        </button>
                    </div>
                </div>

                <div className="py-2 m-0">
                    <img
                        src={HeroBg}
                        className="lg:h-[555px] lg:w-[555px] h-[360px] w-full opacity-80 "
                        alt="heroBG"
                    />
                </div>
            </div>
        </div>
    );
}

export default ProjectContainer;
