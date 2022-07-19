import React from "react";
import "../index.css";

function InformationContainer() {
    return (
        <submain
            className="container mt-20 xl:px-[209px] w-full justify-center items-center px-4"
            id="information"
        >
            <h1 className="flex text-center justify-center text-textColor font-black text-xl">
                Thông tin
            </h1>

            <div className="w-full h-auto mt-10 flex flex-col md:flex-row gap-8 justify-center">
                <div className="bg-white min-w-[300px] md:w-[300px] h-[280px] drop-shadowIn4 rounded-md hoverTraslate transition-all ease-in-out duration-300 pt-4 justify-center items-center p-3 ">
                    <h1 className="text-textColor text-base font-bold text-justify">
                        Blockchain cho giáo dục: Xác minh và quản lý dữ liệu học
                        tập suốt đời
                    </h1>
                    <p className="text-lighttextGray text-xs font-normal mt-4 text-left ">
                        Trong những năm gần đây, công nghệ blockchain đã được
                        ứng dụng trong lĩnh vực giáo dục vì những ưu điểm nổi
                        bật của nó, tức là tính minh bạch, tính phi tập trung và
                        tính bất biến. Các hệ thống có sẵn thường sử dụng các
                        mạng blockchain công cộng...
                    </p>
                </div>

                <div className="bg-white min-w-[300px] md:w-[300px] h-[280px] drop-shadowIn4 rounded-md hoverTraslate transition-all ease-in-out duration-300 pt-4 justify-center items-center p-3 ">
                    <h1 className="text-textColor text-base font-bold text-justify">
                        nQSV-Net: một biến thể tìm kiếm xếp hàng mới cho tìm
                        kiếm không gian toàn cầu và mô hình hóa khối lượng công
                        việc
                    </h1>
                    <p className="text-lighttextGray text-xs font-normal mt-4 text-left ">
                        Trong bài báo này, chúng tôi trình bày nghiên cứu của
                        mình trải qua hai bước: (1) sử dụng tối ưu hóa siêu kinh
                        nghiệm để tìm kiếm không gian toàn cầu; (2) áp dụng tối
                        ưu hóa được đề xuất để mô hình hóa và dự đoán khối lượng
                        công việc đa biến...
                    </p>
                </div>

                <div className="bg-white min-w-[300px] md:w-[300px] h-[280px] drop-shadowIn4 rounded-md hoverTraslate transition-all ease-in-out duration-300 pt-4 justify-center items-center p-3 ">
                    <h1 className="text-textColor text-base font-bold text-justify">
                        nQSV-Net: một biến thể tìm kiếm xếp hàng mới cho tìm
                        kiếm không gian toàn cầu và mô hình hóa khối lượng công
                        việc
                    </h1>
                    <p className="text-lighttextGray text-xs font-normal mt-4 text-left ">
                        Trong bài báo này, chúng tôi trình bày nghiên cứu của
                        mình trải qua hai bước: (1) sử dụng tối ưu hóa siêu kinh
                        nghiệm để tìm kiếm không gian toàn cầu; (2) áp dụng tối
                        ưu hóa được đề xuất để mô hình hóa và dự đoán khối lượng
                        công việc đa biến...
                    </p>
                </div>
            </div>

            <button className="flex border-[1px] w-36 h-10 items-center justify-center m-auto rounded-md mt-12 bg-[#4D95E9] hover:bg-sky-500 shadow-lg">
                  <h1 className="text-white text-sm font-normal text-center">Xem thêm</h1>
            </button>
        </submain>
    );
}

export default InformationContainer;
