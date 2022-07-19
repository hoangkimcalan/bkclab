import React from "react";
import HeroBg from "../assets/hero.png";

function HomeContainer() {
    return (
        
        <section
            className="px-4 grid grid-cols-1 md:grid-cols-2 gap-2 w-full justify-center"
            id="home"
        >
            <div className="py-2 flex-1 flex flex-col items-start justify-center gap-4 xl:pl-44">
                <p className="text-[2.3rem] md:text-[2.5rem] font-black tracking-wide text-textColor w-[105%] ">
                    Các giải pháp sáng tạo cho nền kinh tế kỹ thuật số
                </p>
                <p className="text-base text-gray-500 text-center md:text-left w-[100%]">
                    BKC Labs được thành lập nhằm thúc đẩy sự phát triển và
                    truyền bá công nghệ chuỗi khối cũng như mang lại các giải
                    pháp công nghệ thông tin hiệu quả trong mọi lĩnh vực đời
                    sống.
                </p>
            </div>

            <div className="py-2 m-0">
            <img
                    src={HeroBg}
                    className="lg:h-[555px] lg:w-[555px] h-[360px] w-full opacity-80 "
                    alt="heroBG"
                />
            </div>
        </section>
    );
}

export default HomeContainer;
