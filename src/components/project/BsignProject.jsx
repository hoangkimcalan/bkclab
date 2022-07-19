import React from "react";
import HeaderBsign from '../../assets/bsign_project.png';
import bodyBSign1 from '../../assets/bodyBsign1.png';
import bodyBSign2 from '../../assets/bodyBsign2.png';
import bodyBSign3 from '../../assets/bodyBsign3.png';
import bodyBSign4 from '../../assets/bodyBsign4.png';


function BsignProject() {
    return (
        <div className="md:px-44 px-4 mt-10 w-full h-auto">
            <div className="hidden h-72 w-full bg-white rounded-md overflow-hidden md:flex">
                <h1 className="flex z-50 mt-12 ml-12 text-[2.3rem] mr-28 md:text-[2.5rem] font-bold tracking-wide">
                    Chữ ký số <br /> từ xa Bsign
                </h1>
                <img src={HeaderBsign} className="right-0 h-full object-fill" alt="B4E" />
            </div>

            <div className="flex md:hidden relative h-72 w-full bg-white rounded-md overflow-hidden">
                <h1 className=" absolute z-50 items-center ml-16 text-[2.3rem] md:text-[2.5rem] font-bold tracking-wide">
                    Chữ ký số <br /> từ xa Bsign
                </h1>
                <img src={HeaderBsign} className="mt-8 w-full h-full object-fill" alt="B4E" />
            </div>

            <div className="mt-16 w-full h-auto flex flex-row gap-16">
                <div className="hidden md:block basis-1/4 bg-red-300">hello</div>
                <div className="basic-full md:basis-3/4 bg-white block justify-center">
                    <p className="italic">
                        Ngày nay, chữ ký số đã và đang khẳng định rõ vai trò của mình trong các lĩnh vực của đời sống. Đây cũng là xu thế tất yếu bởi các giao dịch điện tử ngày càng trở nên phổ biến và quá trình chuyển đổi số đang tác động mạnh mẽ tới các doanh nghiệp Việt Nam.
                    </p>
                    <img src={bodyBSign1} className="mt-8 justify-center m-auto w-[250px] object-fill" />
                    <p className="mt-2">
                        Các thủ tục giấy tờ, in ấn tài liệu, trình ký thủ công tốn khá nhiều thời gian và công sức, nhất là đối với các tổ chức, doanh nghiệp có nhu cầu sử dụng chữ ký thường xuyên, liên tục. Hơn nữa, chữ ký thường còn dễ bị bắt bị giả mạo, bắt chước và không có tính xác thực cao. Vì vậy, xét về mặt lợi ích, chữ ký số có những ưu điểm vượt trội hơn hẳn so với chữ ký thường:
                    </p>
                    <p className="mt-2">
                        - Ký kết các tài liệu một cách nhanh chóng, giảm thiểu thời gian đi lại, chờ đợi và luân chuyển văn bản. <br />
                        - Đảm bảo tính định danh của người ký <br />
                        - Đảm bảo tính toàn vẹn (không thể sửa đổi) của tài liệu <br />
                        - Đảm bảo tính không thể phủ nhận của tài liệu đã ký
                    </p>

                    <p className="mt-2">
                        Trên thị trường hiện nay có 2 loại chữ ký số: chữ ký số truyền thống và chữ ký số từ xa. Tuy nhiên, chữ ký số kiểu cũ - sử dụng USB Token/SIM đang dần trở nên lạc hậu và bộc lộ nhiều nhược điểm lớn như:
                    </p>
                    <p className="mt-2">
                        - Tốn kém chi phí thuê bao và thiết bị phần cứng USB token/SIM; <br />
                        - Tính tương thích kém, người dùng bắt buộc phải mang theo USB Token/SIM và kết nối với thiết bị máy tính, người dùng trong quá trình sử dụng có thể làm hỏng hóc hoặc thất lạc USB Token/SIM; <br />
                        - Phải cài đặt phần mềm quản lý của nhà cung cấp; <br />
                        - Thiếu tính cơ động, linh hoạt, không phù hợp với các tổ chức có nhu cầu ký số lớn và ký cùng lúc nhiều loại tài liệu điện tử.
                    </p>
                    <img src={bodyBSign2} className="mt-8 justify-center m-auto w-[250px] object-fill" />
                    <p className="mt-2">
                        Việc sử dụng chữ ký số từ xa đã khá quen thuộc và phổ biến trên thế giới với những nhà cung cấp nổi tiếng như….., nhưng tại Việt Nam thì phương pháp này vẫn còn khá mới, ít các nhà cung cấp cũng như chưa được nhiều các doanh nghiệp sử dụng.
                    </p>
                    <p className="mt-2">
                        Hòa mình vào xu hướng mới của thời đại và nắm bắt kịp thời nhu cầu của các doanh nghiệp, đội ngũ BKC Labs đã nghiên cứu và phát triển sản phẩm Chữ ký số từ xa nội bộ BSign với các đặc tính “<mark className="font-bold bg-transparent">ba KHÔNG</mark>”:
                    </p>
                    <p className="mt-2 ml-2 font-bold">
                        1. KHÔNG cần sử dụng thiết bị phần cứng như USB Token/SIM <br />
                        2. KHÔNG cần cài đặt phần mềm/ứng dụng quản lý của nhà cung cấp <br />
                        3. KHÔNG tốn nhiều chi phí và thời gian
                    </p>
                    <p className="mt-2">
                        Chữ ký số từ xa BSign đã khắc phục hoàn toàn những bất cập và nhược điểm của chữ ký số thông thường với những ưu điểm:
                    </p>
                    <p className="mt-2 ml-2 font-bold">
                        - Không cần sử dụng USB Token/SIM
                    </p>
                    <p className="mt-2">
                        Đây chắc hẳn là ưu điểm lớn nhất của chữ ký số từ xa khi đã loại bỏ được thiết bị phần cứng mà trước đó đem lại khá nhiều bất cập và nguy hiểm nếu người dùng làm hỏng hóc hay thậm chí là thất lạc USB Token/SIM, từ đó không thể quản lý được việc sử dụng dữ liệu và mạo danh người dùng.
                    </p>
                    <p className="mt-2 ml-2 font-bold">
                        - Đảm bảo tính bảo mật và an toàn tuyệt đối
                    </p>
                    <img src={bodyBSign3} className="mt-8 justify-center m-auto w-[250px] object-fill" />
                    <p className="mt-2">
                        BSign xây dựng hạ tầng khóa công khai để cấp phát, quản lý các chứng thư số cấp cho người dùng (theo chuẩn X.509) và thực hiện ký số theo chuẩn PAdES và XAdES. Ngoài ra, để thực hiện thao tác ký số, người dùng phải trải qua cơ chế xác thực 2 bước là đăng nhập tài khoản và xác thực OTP
                    </p>
                    <p className="mt-2 ml-2 font-bold">
                        - Tiết kiệm chi phí
                    </p>
                    <p className="mt-2">
                        Người dùng khi sử dụng chữ ký số từ xa sẽ không phải bỏ thêm tiền để mua USB Token/SIM. Nhất là đối với các doanh nghiệp lớn, có nhu cầu ký số của nhiều bộ phận cùng lúc thì sẽ tiết kiệm đáng kể được khoản chi phí này.
                    </p>
                    <p className="mt-2 ml-2 font-bold">
                        - Dễ dàng tích hợp với các hệ thống quản lý khác
                    </p>
                    <p className="mt-2">
                        Hệ thống BSign có thể dễ dàng tích hợp với các trang quản lý đào tạo, hệ thống thông tin, website của doanh nghiệp do có độ tương thích cao, nhằm phục vụ việc ký số các văn bản một cách nhanh chóng và hiệu quả.
                    </p>
                    <img src={bodyBSign4} className="mt-8 justify-center m-auto w-[600px] object-fill" />
                    <p className="mt-2 font-bold italic">
                        BKC Labs chắc chắn chữ ký số từ xa BSign sẽ là sự lựa chọn hàng đầu giúp những doanh nghiệp trong cả nước đẩy nhanh tiến trình và nâng cao hiệu quả làm việc mà vẫn đảm bảo độ tin cậy và thuận tiện nhất.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default BsignProject;
