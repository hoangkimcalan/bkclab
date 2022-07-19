import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineLightMode, MdClose } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { BiMoon } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink, useLocation } from "react-router-dom";
import { Link, Navigate } from "react-router-dom";

import LOGO from "../assets/logo.png";
import "../index.css";

function Header() {
    const [dropSolution, setDropSolution] = useState(false);
    const [isMenu, setIsMenu] = useState(false);

    const handleDropSolution = () => {
        console.log("hello");
        setDropSolution(!dropSolution);
    };

    const handleOpenMenu = () => {
        setIsMenu(!isMenu);
    }

    let location = useLocation();

    console.log(location.hash);
    return (
        <header className="fixed z-[90] w-full p-3 px-4 md:px-16 bg-[#fcfcfc]">
            {/* desktop & tablet */}
            <div className="hidden md:flex w-full h-full items-center justify-around ">
                <Link to="/" className="flex items-center gap-2">
                    <img
                        className="w-12 object-cover items-center"
                        src={LOGO}
                        alt={"logo"}
                    />
                    <p className="text-headingColor text-xl font-extrabold">
                        BKC Lab
                    </p>
                </Link>
                <div className="relative flex items-center">
                    <ul className=" flex items-center gap-8">
                        <a href="/#home">
                            <li className={location.hash == "#home" ? `font-bold text-sm text-textColor hover:text-sky-600 duration-100 transition-all ese-in-out cursor-pointer active` : `font-bold text-sm text-textColor hover:text-sky-600 duration-100 transition-all ese-in-out cursor-pointer`}>
                                Giới thiệu
                            </li>
                        </a>
                        <a href="/#solution">
                            <li
                                className={location.hash == "#solution" ? `relative font-bold items-center gap-1 flex text-sm text-textColor hover:text-sky-600 duration-100 transition-all ese-in-out cursor-pointer active` : `relative font-bold items-center gap-1 flex text-sm text-textColor hover:text-sky-600 duration-100 transition-all ese-in-out cursor-pointer`}
                                onMouseEnter={() => setDropSolution(true)}
                                onClick={() => setDropSolution(false)}
                            >
                                Giải pháp <IoIosArrowDown />
                            </li>
                        </a>
                        {dropSolution && (
                            <div
                                className="absolute transition bg-white drop-shadow-md rounded-md w-28 justify-center items-center top-[45px] ml-[60px] overflow-hidden"
                                onMouseEnter={() => setDropSolution(true)}
                                onMouseLeave={() => setDropSolution(false)}
                            >
                                <a href="/#bsign">
                                    <li
                                        className={location.hash == "#bsign" ? "py-2 pl-4 cursor-pointer mb-1 text-textColor hover:text-sky-600 hover:bg-slate-100 font-bold transition active-prj" : "py-2 pl-4 cursor-pointer mb-1 text-textColor hover:text-sky-600 hover:bg-slate-100 font-bold transition"}
                                        onClick={handleDropSolution}
                                    >
                                        BSign
                                    </li>
                                </a>
                                <a href="/#b4e">
                                    <li
                                        className={location.hash == "#b4e" ? "py-2 pl-4 cursor-pointer mb-1 text-textColor hover:text-sky-600 hover:bg-slate-100 font-bold transition active-prj" : "py-2 pl-4 cursor-pointer mb-1 text-textColor hover:text-sky-600 hover:bg-slate-100 font-bold transition"}
                                        onClick={handleDropSolution}
                                    >
                                        B4E
                                    </li>
                                </a>
                                <a href="/#vchain">
                                    <li
                                        className={location.hash == "#vchain" ? "py-2 pl-4 cursor-pointer text-textColor hover:text-sky-600 hover:bg-slate-100 font-bold transition active-prj" : "py-2 pl-4 cursor-pointer text-textColor hover:text-sky-600 hover:bg-slate-100 font-bold transition"}
                                        onClick={handleDropSolution}
                                    >
                                        VChain
                                    </li>
                                </a>
                            </div>
                        )}
                        <a href="/#member">
                            <li className={location.hash == "#member" ? "font-bold text-sm text-textColor hover:text-sky-600 duration-100 transition-all ese-in-out cursor-pointer active " : "font-bold text-sm text-textColor hover:text-sky-600 duration-100 transition-all ese-in-out cursor-pointer"}
                                onClick={() => setDropSolution(false)}
                            >
                                Thành viên
                            </li>
                        </a>
                        <a href="/#information">
                            <li className={location.hash == "#information" ? "font-bold text-sm text-textColor hover:text-sky-600 duration-100 transition-all ese-in-out cursor-pointer active " : "font-bold text-sm text-textColor hover:text-sky-600 duration-100 transition-all ese-in-out cursor-pointer"}
                                onClick={() => setDropSolution(false)}
                            >
                                Thông tin
                            </li>
                        </a>
                        <a href="/#footer">
                            <li className={location.hash == "#footer" ? "font-bold text-sm text-textColor hover:text-sky-600 duration-100 transition-all ese-in-out cursor-pointer active " : "font-bold text-sm text-textColor hover:text-sky-600 duration-100 transition-all ese-in-out cursor-pointer"}
                                onClick={() => setDropSolution(false)}
                            >
                                Liên hệ
                            </li>
                        </a>
                    </ul>
                </div>
            </div>

            {/* mobile */}
            <div className=" flex md:hidden w-full h-full items-center">
                <Link to={"/"} className="flex items-center gap-2 w-full ">
                    <img className="w-10 object-cover" src={LOGO} alt="logo" />
                    <p className="text-headingColor text-xl font-medium">
                        BKC Lab
                    </p>
                </Link>
                <div className="w-full flex justify-end ">
                    {!isMenu ? <AiOutlineMenu onClick={handleOpenMenu} className="text-2xl transition duration-300" /> :
                        <div className="relative bg-red-50 w-full">
                            <MdClose onClick={handleOpenMenu} className="absolute text-3xl transition duration-300 -top-4 right-0" />
                            <div className={!isMenu ? `w-[250px] absolute top-8 -right-[300px] bg-gray-50 p-6 rounded-sm transition-all duration-300` : `w-[250px] absolute top-8 -right-8 bg-gray-50 p-6 rounded-sm transition-all duration-300`}>
                                <ul className="flex flex-col gap-8 ">
                                    <a href="/#home">
                                        <li className={location.hash == "#home" ? `font-bold text-sm text-textColor hover:text-sky-600 duration-100 transition-all ese-in-out cursor-pointer active` : `font-bold text-sm text-textColor hover:text-sky-600 duration-100 transition-all ese-in-out cursor-pointer`}>
                                            Giới thiệu
                                        </li>
                                    </a>
                                    <a href="/#solution">
                                        <li
                                            className={location.hash == "#solution" ? `relative font-bold items-center gap-1 flex text-sm text-textColor hover:text-sky-600 duration-100 transition-all ese-in-out cursor-pointer active` : `relative font-bold items-center gap-1 flex text-sm text-textColor hover:text-sky-600 duration-100 transition-all ese-in-out cursor-pointer`}
                                            onMouseEnter={() => setDropSolution(true)}
                                            onClick={() => setDropSolution(false)}
                                        >
                                            Giải pháp
                                        </li>
                                    </a>
                                    <a href="/#member">
                                        <li className={location.hash == "#member" ? "font-bold text-sm text-textColor hover:text-sky-600 duration-100 transition-all ese-in-out cursor-pointer active " : "font-bold text-sm text-textColor hover:text-sky-600 duration-100 transition-all ese-in-out cursor-pointer"}
                                            onClick={() => setDropSolution(false)}
                                        >
                                            Thành viên
                                        </li>
                                    </a>
                                    <a href="/#information">
                                        <li className={location.hash == "#information" ? "font-bold text-sm text-textColor hover:text-sky-600 duration-100 transition-all ese-in-out cursor-pointer active " : "font-bold text-sm text-textColor hover:text-sky-600 duration-100 transition-all ese-in-out cursor-pointer"}
                                            onClick={() => setDropSolution(false)}
                                        >
                                            Thông tin
                                        </li>
                                    </a>
                                    <a href="/#footer">
                                        <li className={location.hash == "#footer" ? "font-bold text-sm text-textColor hover:text-sky-600 duration-100 transition-all ese-in-out cursor-pointer active " : "font-bold text-sm text-textColor hover:text-sky-600 duration-100 transition-all ese-in-out cursor-pointer"}
                                            onClick={() => setDropSolution(false)}
                                        >
                                            Liên hệ
                                        </li>
                                    </a>
                                </ul>
                            </div>
                        </div>
                    }
                </div>


                {/* {!isMenu ? <></> :
                    <div className="absolute  top-12 right-0">
                        <ul className="flex flex-col gap-8 bg-green-300">
                            <a href="/#home">
                                <li className={location.hash == "#home" ? `font-bold text-sm text-textColor hover:text-sky-600 duration-100 transition-all ese-in-out cursor-pointer active` : `font-bold text-sm text-textColor hover:text-sky-600 duration-100 transition-all ese-in-out cursor-pointer`}>
                                    Giới thiệu
                                </li>
                            </a>
                            <a href="/#solution">
                                <li
                                    className={location.hash == "#solution" ? `relative font-bold items-center gap-1 flex text-sm text-textColor hover:text-sky-600 duration-100 transition-all ese-in-out cursor-pointer active` : `relative font-bold items-center gap-1 flex text-sm text-textColor hover:text-sky-600 duration-100 transition-all ese-in-out cursor-pointer`}
                                    onMouseEnter={() => setDropSolution(true)}
                                    onClick={() => setDropSolution(false)}
                                >
                                    Giải pháp <IoIosArrowDown />
                                </li>
                            </a>
                            {dropSolution && (
                                <div
                                    className="absolute transition bg-white drop-shadow-md rounded-md w-28 justify-center items-center top-[65px] ml-[84px] overflow-hidden"
                                    onMouseEnter={() => setDropSolution(true)}
                                    onMouseLeave={() => setDropSolution(false)}
                                >
                                    <a href="/#bsign">
                                        <li
                                            className={location.hash == "#bsign" ? "py-2 pl-4 cursor-pointer mb-1 text-textColor hover:text-sky-600 hover:bg-slate-100 font-bold transition active-prj" : "py-2 pl-4 cursor-pointer mb-1 text-textColor hover:text-sky-600 hover:bg-slate-100 font-bold transition"}
                                            onClick={handleDropSolution}
                                        >
                                            BSign
                                        </li>
                                    </a>
                                    <a href="/#b4e">
                                        <li
                                            className={location.hash == "#b4e" ? "py-2 pl-4 cursor-pointer mb-1 text-textColor hover:text-sky-600 hover:bg-slate-100 font-bold transition active-prj" : "py-2 pl-4 cursor-pointer mb-1 text-textColor hover:text-sky-600 hover:bg-slate-100 font-bold transition"}
                                            onClick={handleDropSolution}
                                        >
                                            B4E
                                        </li>
                                    </a>
                                    <a href="/#vchain">
                                        <li
                                            className={location.hash == "#vchain" ? "py-2 pl-4 cursor-pointer text-textColor hover:text-sky-600 hover:bg-slate-100 font-bold transition active-prj" : "py-2 pl-4 cursor-pointer text-textColor hover:text-sky-600 hover:bg-slate-100 font-bold transition"}
                                            onClick={handleDropSolution}
                                        >
                                            VChain
                                        </li>
                                    </a>
                                </div>
                            )}
                            <a href="/#member">
                                <li className={location.hash == "#member" ? "font-bold text-sm text-textColor hover:text-sky-600 duration-100 transition-all ese-in-out cursor-pointer active " : "font-bold text-sm text-textColor hover:text-sky-600 duration-100 transition-all ese-in-out cursor-pointer"}
                                    onClick={() => setDropSolution(false)}
                                >
                                    Thành viên
                                </li>
                            </a>
                            <a href="/#information">
                                <li className={location.hash == "#information" ? "font-bold text-sm text-textColor hover:text-sky-600 duration-100 transition-all ese-in-out cursor-pointer active " : "font-bold text-sm text-textColor hover:text-sky-600 duration-100 transition-all ese-in-out cursor-pointer"}
                                    onClick={() => setDropSolution(false)}
                                >
                                    Thông tin
                                </li>
                            </a>
                            <a href="/#footer">
                                <li className={location.hash == "#footer" ? "font-bold text-sm text-textColor hover:text-sky-600 duration-100 transition-all ese-in-out cursor-pointer active " : "font-bold text-sm text-textColor hover:text-sky-600 duration-100 transition-all ese-in-out cursor-pointer"}
                                    onClick={() => setDropSolution(false)}
                                >
                                    Liên hệ
                                </li>
                            </a>
                        </ul>
                    </div>
                } */}
            </div>
        </header>
    );
}

export default Header;
