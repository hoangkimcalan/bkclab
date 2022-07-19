import React from "react";
import { VscCircleLargeFilled } from "react-icons/vsc";
import { useEffect } from "react";
import "../index.css";

function FilterMember({ setActiveGenre, activeGenre, setFiltered, popular }) {
    useEffect(() => {
        if (activeGenre === 0) {
            setFiltered(popular);
            return;
        }
        const fitered = popular.filter((memberLab) =>
            memberLab.genres_id.includes(activeGenre)
        );
        setFiltered(fitered);
    }, [activeGenre]);


    return (
        <div className="grid grid-cols-1 justify-start gap-4 ">
            <button
                className={activeGenre === 0 ? " mb-4 text-left ml-1 flex items-center gap-4 active-filter" : " mb-4 text-left ml-1 flex items-center gap-4"} 
                onClick={() => setActiveGenre(0)}
            >
                <VscCircleLargeFilled className=" text-[#F83429]" />
                <h1 className="font-bold text-sm">Tất cả thành viên</h1>
            </button>
            <button
                className={activeGenre === 1 ? " mb-4 text-left ml-1 flex items-center gap-4 active-filter" : " mb-4 text-left ml-1 flex items-center gap-4"}
                onClick={() => setActiveGenre(1)}
            >
                <VscCircleLargeFilled className=" text-[#E77D00]" />
                <h1 className="font-bold text-sm"> Thành viên chính</h1>
            </button>
            <button
                className={activeGenre === 2 ? " mb-4 text-left ml-1 flex items-center gap-4 active-filter" : " mb-4 text-left ml-1 flex items-center gap-4"}
                onClick={() => setActiveGenre(2)}
            >
                <VscCircleLargeFilled className=" text-[#FEC2EB]" />
                <h1 className="font-bold text-sm">Marketing</h1>
            </button>
            <button
                className={activeGenre === 3 ? " mb-4 text-left ml-1 flex items-center gap-4 active-filter" : " mb-4 text-left ml-1 flex items-center gap-4"}
                onClick={() => setActiveGenre(3)}
            >
                <VscCircleLargeFilled className=" text-[#10B529]" />
                <h1 className="font-bold text-sm"> Back Office</h1>
            </button>
            <button
                className={activeGenre === 4 ? " mb-4 text-left ml-1 flex items-center gap-4 active-filter" : " mb-4 text-left ml-1 flex items-center gap-4"}
                onClick={() => setActiveGenre(4)}
            >
                <VscCircleLargeFilled className=" text-[#006FF4]" />
                <h1 className="font-bold text-sm"> Front-end Developer</h1>
            </button>
            <button
                className={activeGenre === 5 ? " mb-4 text-left ml-1 flex items-center gap-4 active-filter" : " mb-4 text-left ml-1 flex items-center gap-4"}
                onClick={() => setActiveGenre(5)}
            >
                <VscCircleLargeFilled className=" text-[#66182A]" />
                <h1 className="font-bold text-sm"> Back-end Developer</h1>
            </button>
            <button
                className={activeGenre === 6 ? " mb-4 text-left ml-1 flex items-center gap-4 active-filter" : " mb-4 text-left ml-1 flex items-center gap-4"}
                onClick={() => setActiveGenre(6)}
            >
                <VscCircleLargeFilled className=" text-[#9C48C6]" />
                <h1 className="font-bold text-sm"> Blockchain Developer</h1>
            </button>
            <button
                className={activeGenre === 7 ? " mb-4 text-left ml-1 flex items-center gap-4 active-filter" : " mb-4 text-left ml-1 flex items-center gap-4"}
                onClick={() => setActiveGenre(7)}
            >
                <VscCircleLargeFilled className=" text-[#BCCEFD]" />
                <h1 className="font-bold text-sm"> UI/UX Design</h1>
            </button>
            <button
                className={activeGenre === 8 ? " mb-4 text-left ml-1 flex items-center gap-4 active-filter" : " mb-4 text-left ml-1 flex items-center gap-4"}
                onClick={() => setActiveGenre(8)}
            >
                <VscCircleLargeFilled className=" text-[yellow]" />
                <h1 className="font-bold text-sm">Mobile Developer</h1>
            </button>
            <button
                className={activeGenre === 9 ? " text-left ml-1 mb-2 flex items-center gap-4 active-filter" : " text-left ml-1 mb-2 flex items-center gap-4"}
                onClick={() => setActiveGenre(9)}
            >
                <VscCircleLargeFilled className=" text-[#A6FF00]" />
                <h1 className="font-bold text-sm">Thực tập</h1>
            </button>
        </div>
    );
}

export default FilterMember;
